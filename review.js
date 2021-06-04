function addLines(myText1, myPic1){
    //let locateBefore;
    let startLine = document.getElementById('slideshow');
    if (document.getElementById('before') != null){
        console.log('found before');
        while(startLine.firstChild){
        startLine.removeChild(startLine.firstChild);
        }
    }
    let vpWidth = window.innerWidth;


    let vpHeight = ((window.innerWidth)/635) * 829;//635 x 829 are the dimentions of the picture
    let zerLn = document.createElement("div");
    zerLn.setAttribute('id','before');
    startLine.appendChild(zerLn); 
    let firstLine = '<div id="letters" class="guitar" style="width: ' + vpWidth + 'px; height: ' + vpHeight +'px; overflow:auto; background-image: url(/Letters/' + myPic1 + '.jpg); background-size: cover; background-repeat: no-repeat;">';
    let newEntry = document.getElementById('before');
    newEntry.insertAdjacentHTML('beforeend', firstLine);
    //FUNCTION FOR SVG OVERLAY
    function addOverlay(){
        const svg = "http://www.w3.org/2000/svg";
        let addSVG = document.createElementNS(svg, "svg");
        addSVG.setAttribute('width', ((window.innerWidth) + 'px'));
        /*ESTIMATING NUMBER OF LINES OF TEXT*/
        let words = myText1;//adding words here to adjust height
        const marginSize = Math.round(window.innerWidth / 10.5);
        console.log('Width of margin in characters: ' + marginSize);
        let numLines1 = Math.ceil(words.length/marginSize);
        let numLinesFudge = 0;
        console.log(numLines1);
        if(numLines1>1 && numLines1<=10)
        {
            numLinesFudge = 1;
        }
        else if(numLines1>10 && numLines1<=20){
            numLinesFudge = 2;
        }
        else if(numLines1>20 && numLines1<=30){
            numLinesFudge = 4;
        }
        else if(numLines1>30 && numLines1<=40){
            numLinesFudge = 5;
        }
        else if(numLines1>40){
            numLinesFudge = 5;
        }
        console.log('Est. number of lines of text: ' + (numLines1 + numLinesFudge));
        let svgHeight = (numLines1 + numLinesFudge + 6) * 30;//30 is the verticle space between lines, 6 is more fudge factor
        console.log('svg height : ' + svgHeight);
        
        addSVG.setAttribute('height', (svgHeight + 'px'));//changing height to arbitrary value. need to dynamically set based on text shown
        let addOvrly = document.getElementById('letters');
        addOvrly.appendChild(addSVG);
        let addRect = document.createElementNS(svg, "rect");
        addRect.setAttribute('id', 'layer');
        addRect.setAttribute('width', vpWidth);
        addRect.setAttribute('height', svgHeight);//same, see above
        addRect.setAttribute('y', 100);
        addRect.setAttribute('fill', 'grey');
        addRect.setAttribute('fill-opacity', 0.7);
        addSVG.appendChild(addRect);
        let addStyle = document.createElement('style');
        addSVG.appendChild(addStyle);
        let addG = document.createElementNS(svg, 'g');
        addSVG.appendChild(addG);
        addG.setAttribute("overflow", "scroll");

        function addWords(word, yValue){
            let addText = document.createElementNS(svg, 'text');
            addText.setAttribute('x', 20);
            addText.setAttribute('y', yValue);//yValue is here...
            addText.setAttribute('class', 'small');
            addText.insertAdjacentText('beforeend', word);
            addG.appendChild(addText);
        }
        console.log('Number of characters in string: ' + words.length);

    


        /* 'FUNCTION' TO ADD WORDS TO SVG
        *   This bit assumes that a single character is about 10.5px
        *   although that would need to be recalculated if the font
        *   or font style were changed.
        *   It then determines how many characters can fit given the viewport
        *   width, and determines where the last space is in the string
        *   if the last space is next to a line break than everything is fine
        *   else it then breaks the line at the space and moves the rest of the string
        *   to the next line.
        */
        
        let myLine;
        let lstSpace = 0;
        let index = 0;
        let count = 1;
        while(count != 0){
            myLine = words;
            let lineStart = (lstSpace);
            let lineEnd = (lstSpace) + (marginSize);// * (index + 1));
            let prntLine = myLine.slice(lineStart, lineEnd);
            if(prntLine.length>marginSize-2){
                lstSpace = (prntLine.lastIndexOf(' ')) + lineStart;// + (marginSize) * (index));
                ++index;//need to add this if commenting out line above
                prntLine = myLine.slice(lineStart, lstSpace);
                lstSpace = lstSpace + 1;
                //console.log(prntLine);
                addWords(prntLine, (155 + ((index)*30)));
        
            }
            if(prntLine.length==marginSize){
                lstSpace = (prntLine.lastIndexOf(' ')) + lineStart;// + (marginSize) * (index));
                ++index;//need to add this if commenting out above
                //console.log(prntLine);
                addWords(prntLine, (155 + ((index)*30)));
        
            }
            if((words.length-marginSize)<lineStart){
                count = 0;
                addWords(prntLine, (155 + ((index+1)*30)));
            }
        }
    }
    addOverlay();
}






//FUNCTION TO DISPLAY TO CONSOLE
function DisplayToConsole(object){
    console.log(object);
}

let backgroundPics = ['letter1', 'letter2', 'letter3', 'letter4', 'letter5', 'letter6', 'letter7', 'letter8', 'letter9', 'letter10', 'letter11', 'letter12', 'letter13', 'letter14', 'letter15', 'letter16'];
let reviewText = ['letter1.txt', 'letter2.txt', 'letter3.txt', 'letter4.txt', 'letter5.txt', 'letter6.txt', 'letter7.txt', 'letter8.txt', 'letter9.txt', 'letter10.txt', 'letter11.txt', 'letter12.txt', 'letter13.txt', 'letter14.txt', 'letter15.txt', 'letter16.txt'];

async function getWords(writing, photo){
    let fileLocation = '/Letters/' + writing;
    let response = await fetch(fileLocation);//changing from static
    myText = await response.text();
    myPic = photo;//changing from static
    addLines(myText, myPic);
}




const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');

let count1 = 0;
let rWords = reviewText[count1];
let bPics = backgroundPics[count1];



//below the number 2 can be changed to the number of elemnts in the array
nextButton.addEventListener('click', function () {
    if(count1 < (backgroundPics.length - 1)){
        ++count1;
        console.log(backgroundPics[count1]);
        noParameters();
    }
    else if (count1 >=backgroundPics.length){
        count1 = backgroundPics.length;
        console.log(backgroundPics[count1])
        noParameters();
    }
})

prevButton.addEventListener('click', function(){
    if(count1 > 0){
        --count1;
        console.log(backgroundPics[count1]);
        noParameters();
    }
    else if(count1 <= 0){
        count1 = 0;
        console.log(backgroundPics[count1]);
        noParameters();
    }
})

let tick = 0;
let tock = 2;
function showDimentions (){
	let WHeight = window.innerHeight;
	let WWidth = window.innerWidth;
	console.log('Window resized:' + WHeight + ' x ' + WWidth);
}
function moveTick (){
    tick++;
    console.log('tick = ' + tick);
    console.log('tock = ' + tock);
    if((tick % 2 == 0) && (tock == 1)){ //this works as long as things stay even, fails when on odds
        showDimentions();
        tock = 2;
    }
    else if(tick % 2 != 0)
        tock = 1;
        
}

function eraseChildren(){
    let newStartLine = document.getElementById('slideshow');
    while(newStartLine.firstChild){
        console.log('eraseChildren');
        newStartLine.removeChild(newStartLine.firstChild);
    }

}

function noParameters(){
    console.log('count is: ' + count1);
    let startLine = document.getElementById('slideshow');
    let noOverlay = document.createElement('div');
    let addBefore = document.createElement('div');
    if(window.innerWidth<=480){
        console.log('portrait view');
        eraseChildren();
        getWords(reviewText[count1], backgroundPics[count1]);

    }
    else if(window.innerWidth>480 && window.innerWidth<=768){
        console.log('landscape view');
        eraseChildren();
        noOverlay.setAttribute('class', 'letter');
        noOverlay.setAttribute('style', "background-image: url('/Letters/" + backgroundPics[count1] +".jpg')");
        startLine.appendChild(addBefore);
        addBefore.setAttribute('id','before');
        let addPictOnly = document.getElementById('before');
        addPictOnly.appendChild(noOverlay);

    }
    else if(window.innerWidth>768){
        console.log('desktop view');
        eraseChildren();
        noOverlay.setAttribute('class', 'letter');
        noOverlay.setAttribute('style', "background-image: url('/Letters/" + backgroundPics[count1] + ".jpg')");
        startLine.appendChild(addBefore);
        addBefore.setAttribute('id','before');
        let addPictOnly = document.getElementById('before');
        addPictOnly.appendChild(noOverlay);

    }
}
noParameters();
window.addEventListener('resize', noParameters);




let locateSlideshow;
if((locateSlideshow = document.getElementById('slideshow')) != null){
    console.log('found slideshow');
}

console.log(document.getElementById('slideshow'));

