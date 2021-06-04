

function showMessage(message) {
    document.getElementById('copyright').textContent = message;
}

showMessage('hello');

function showDimentions (){
	let WHeight = window.innerHeight;
	let WWidth = window.innerWidth;
	console.log('Window resized:' + WHeight + ' x ' + WWidth);
}
//window.onresize = console.log('window resized:' + window.innerHeight + ' x ' + window.innerWidth);
window.addEventListener('resize', showDimentions);


let articleTitles = ['Chicago: Where Polygraph Becomes a Science', 'Polygraph Testimony in Criminal Cases', 'PCSOT Procedures Determined to be Unconstitutional'];
let authors = ['Slowik, S.M., Horvath, F.S.', 'Slowik, S.M.', 'Slowik, S.M.'];
let publications = ['European Polygraph. ', 'Polygraph. ', 'APA Magazine. '];
let citeInfo = ['Volume 13, Number 1, (47) 2019', '41(1) 2012', 'Volume 49, (3) May/June 2016'];
let fileName = ['Articles/european-polygraph-2019-no1-slowik.pdf', 'Articles/Polygraph Testimony in Criminal Cases.pdf', 'Articles/PCSOT Procedures Determined to be Unconstitutional.pdf']


//Making and array of arrays where:
//articles[x][0] = article title
//articles[x][1] = file name
//articles[x][2] = author
//articles[x][3] = publicaction
//articles[x][4] = cite information
//article[x][5] = year

let articles = new Array();
articles.push(['Chicago: Where Polygraph Becomes a Science', 'european-polygraph-2019-no1-slowik.pdf', 'Slowik, S.M., Horvath, F.S.', 'European Polygraph', 'Volume 13, Number 1, (47)','2019']);
articles.push(['Polygraph Testimony in Criminal Cases', 'Polygraph Testimony in Criminal Cases.pdf', 'Slowik, S.M.', 'APA Magazine', 'Volume 41(1)', '2012']);
articles.push(['PCSOT Procedures Determined to be Unconstitutional', 'PCSOT Procedures Determined to be Unconstitutional.pdf', 'Slowik, S.M.', 'APA Magazine', 'Volume 49(3) May/June', '2016']);
articles.push(['ADA Revisited: Current Legal Pre-Employment Interviewing and Polygraph Issues and Solutions', 'ADA Revisited.pdf', 'Slowik, S.M.', 'Polygraph', 'Volume 34, Number 4 (217-224)', '2005']);
articles.push(['The Americans with Disabilities Act Amendments Act and Polygraph Compliance','ADA and Polygraph Compliance Issues.pdf','Slowik, S.M.','Polygraph','Volume 38, Number 3 (198-203)','2009']);
articles.push(['Criminal and Credit Records and Pre-employment Background Investigations','credit and criminal record checks.pdf','Slowik, S.M.','APA Magazine','Volume 45(2)','2012']);
articles.push(['EEOC Hiring Qualification Standards','Educational Standards.pdf','Slowik, S.M.','','www.eeoc.gov/eeoc/foia/letters/2011','2011']);
articles.push(['EEOC Enforcement Guidance on Arrest and Conviction Records in Employment Decisions Under Title VII','EEOC 2012 Criminal Record Guidelines.pdf','Slowik, S.M.','APA Magazine','Volume 45(2)','2012']);
articles.push(['Fedral Employers and Selection of Disabled Americans','Federal Employers and Selection of Disabled Americans.pdf','Slowik, S.M.','Federal Register','V75(146) at 405039','']);
articles.push(['Medical Marijuana and Pre-employment Evaluations','Medical Marijuana and Pre.pdf','Slowik, S.M.','Polygraph','Volume 40, Number 3','2011']);
articles.push(['Unemployment Discrimination','Unemployment Discrimination.pdf','Slowik, S.M.','APA Magazine','Volume 44(5)','2011']);
articles.push(['Pre-employment Selection Systems and the Smaller Department','Pre-employment Selection Systems and the Smaller Department.pdf','Slowik, S.M.','Law and Order','January','2002']);
articles.push(['Conducting Backgrounds on Lateral Hires','Conducting Backgrounds on Lateral Hires.pdf','Slowik, S.M.','Law and Order','January','2002']);
articles.push(['Objective Pre-employment Interviewing - Balancing Recruitment, Selection and Retention Goals','IPMA-HR Objective Pre-employment Interviewing.pdf','Slowik, S.M.','Public Personnel Management','Volume 30, Number 1 (77-93)','2001']);
articles.push(['Elicitation Techniques for Blind Interviews','Elicitation handout - APA.pdf','Slowik, S.M.','APA Annual Conference','August 2-7, Nashville, TN','2009']);
articles.push(['Kinesic Credibility Assessment During Criminal Interviews','Kinesic Credibility Assessment During Criminal Interviews.pdf','Jensen, M., Burgoon, J., Slowik, S., Blair, P., Metaxas, D.','Center of Identification Technology Research','www.citer.wvu.edu','2009']);
articles.push(['Forensic Interviewing, Polygraph and Child Deception','Forensic Interviewing.pdf','Slowik, S.M.','Polygraph','Volume 37, Number 3 (216-227)','2008']);
articles.push(['Genetic Information Nondiscrimination Act of 2008','Genetic Information Nondiscrimination Act of 2008.pdf','Slowik, S.M.','APA Magazine','Volume 43(6)','2008']);
articles.push(['Evaluating Previously Conducted Polygraph Examinations','Evaluating Previously Conducted Polygraph Examinations.pdf','Slowik, S.M.','Polygraph','Volume 42, Number 4 (203-208)','2013']);
articles.push(['Social Media Searches','Social Media Searches.pdf','Slowik, S.M.','APA Magazine','Volume 46(4)','2013']);
articles.push(['The Accuracy of Auditors and Layered Voice Analysis (LVA) Operators Judgments of Truth and Deception During Police Questioning','HORVATH-MCCLOUGHAN-ET AL-2013-AUDITORS AND LVA-JFS.pdf','Horvath, F., McCloughan, J., Weatherman, D., Slowik, S.','Journal of Forensic Sciences','','2013']);
articles.push(['Compliance Update 2015*','Compliance Update.pdf','Slowik, S.M.','APA Magazine','Volume 48(1)','2015']);
articles.push(['Disparate Impact and EEOC v. Freeman, 2015','Disparate Impact and EEOC v. Freeman, 2015.pdf','Slowik, S.M.','APA Magazine','Volume 48(3)','2015']);
articles.push(['Interrogation','Interrogation.pdf','Slowik, S.M.','International Encyclopedia of Interpersonal Communication','','2016']);
articles.push(['New Federal Ban-the-Box Mandate','New Federal Ban-the-Box Mandate.pdf','Slowik, S.M.','APA Magazine','Volume 49(3)','2016']);
articles.push(['New Research Contradicts Basis for Ban-the-Box','New Research Contradicts Basis for Btb.pdf','Slowik, S.M.','APA Magazine','Volume 49(4)','2016']);
articles.push(['Advancing Diversity in Law Enforcement','Advancing Diversity in Law Enforcement.pdf','Slowik, S.M.','APA Magazine','Volume 49(6)','2016']);
articles.push(['Ban-the-Box Update','Ban the box Update.pdf','Slowik, S.M.','APA Magazine','Volume 51(2)','2018']);
articles.push(['Deceptive Language by Innocent and Guilty Criminal Suspects: The Influence of Dominance, Question, and Guilt on Interview Responses','Need to get.pdf','Jensen, M.L., Bessarabova, E., Adame, B., Burgoon, J.K., Slowik, S.M.','Journal of Language and Social Psychology','Volume 30(4) 357-375','2011']);


//articles.sort();//will sort alphabetically by first element, which is the article title
function alphaSort(){
    articles.sort();
} 


//to sort by different elements, first specify the slots in an array of array fashion, then you can write the function appropriately
//articles.sort(function([a,b, c, d, e, f],[g, h, i, j, k, l]){
//    return f-l;//sorts by year, oldest to newest
//});
function displayArticles(){
	let zroLine = '<div id=\"before">';
	let startLine = document.getElementById('articleIndex');
	startLine.insertAdjacentHTML('beforeend', zroLine);
	for(let index = 0; index < articles.length; index++){
		let firstLine = '<a href="' + 'Articles/' + articles[index][1] + '" class="list-group-item list-group-item-action">';
		let secondLine = '<div class="d-flex w-100 justify-content-between">';
		let thirdLine = '<h5 class="mb-1">' + articles[index][0] + '</h5>';
		let fourthLine = '<small class="text-muted"></small>';//add text between >< for badge
		let fifthLine = '</div><p class=mb-1">' + articles[index][2] + '</p>';
		let sixthline = '<small class="sms-articlepublication">' + articles[index][3] + '. ' + '</small>';
		let seventhLine = '<small class="text-muted">' + articles[index][4] + ' ' + articles[index][5] + '</small></a>';
		let finalLine = firstLine + secondLine + thirdLine + fourthLine + fifthLine + sixthline + seventhLine;

		//console.log(finalLine);
		let newEntry = document.getElementById('before');
		newEntry.insertAdjacentHTML('beforeend', finalLine);
	}
	let lastLine = '</div>';
	
}
articles.sort();//sorting this because this is the first displayed 'sort by' option
displayArticles();//call this to initially display the articles

function hideArticles(){
	let startPoint = document.getElementById('before');
	startPoint.remove();
	//let beginAgain = document.getElementById('beforeIndex');
	//beginAgain.insertAdjacentHTML('afterend', '<div id="articleIndex" class="list-group sms-articleindex"></div>');
}
//sort button stuff

//SINGLE ITEM BUTTON EXAMPLE
/*const button2 = document.getElementById('myButton');
button2.addEventListener('click', function() {
    console.log('button pressed');
    alphaSort();
});*/



//CODE THAT WORKS FOR THE FORM
document.querySelector('.form-group .form-control').dispatchEvent(new Event('change'));//make a custom event with this line.
                                                                                       //this fires an event when a menu
                                                                                       //item is clicked
const formOptions = document.querySelectorAll('.form-group .form-control');

//using a switch statement
//with the custom event in place, now you can read which item is being selected on the HTML side and implement the corresponding JavaScript
formOptions.forEach(option => option.addEventListener('change', function(){
    switch(option.value){
        case '1':
			hideArticles();//this works but only if the articles are already on display
			articles.sort();//sorts by title, alphabetically
			displayArticles();
			console.log('first');
			break;
        case '2':
			hideArticles();
			articles.sort(function([a,b, c, d, e, f],[g, h, i, j, k, l]){
			return f-l;})//sorts by date, oldest to newest
			displayArticles();
			console.log('second');
			break;
        case '3':
			hideArticles();
			articles.sort(function([a,b, c, d, e, f],[g, h, i, j, k, l]){
			return l-f;})//sorts by date, newest to oldest
			displayArticles();
			console.log('third');
			break;
        case '4':
			hideArticles();
			articles.sort(function([a,b, c, d, e, f],[g, h, i, j, k, l]){
			if (d < j) return -1;
			if (d > j) return 1;
			return 0;})//sorts by publisher
			displayArticles();
			console.log('fourth');
			break;
        case '5':
			hideArticles();
			articles.sort(function([a,b, c, d, e, f],[g, h, i, j, k, l]){
			if(c<i) return -1;
			if(c>i) return 1;
			return 0;})//sorts by author
			displayArticles();
			console.log('fifth');
			break;
    }
}))

//demo code
/*function toggleClass(elem,className){
	if (elem.className.indexOf(className) !== -1){
		elem.className = elem.className.replace(className,'');
	}
	else{
		elem.className = elem.className.replace(/\s+/g,' ') + 	' ' + className;
	}
	
	return elem;
}

function toggleDisplay(elem){
	const curDisplayStyle = elem.style.display;			
				
	if (curDisplayStyle === 'none' || curDisplayStyle === ''){
		elem.style.display = 'block';
	}
	else{
		elem.style.display = 'none';
	}
}


function toggleMenuDisplay(e){
	const dropdown = e.currentTarget.parentNode;
	const menu = dropdown.querySelector('.menu');
	const icon = dropdown.querySelector('.fa-angle-right');

	toggleClass(menu,'hide');
	toggleClass(icon,'rotate-90');
}
function handleOptionSelected(e){
	toggleClass(e.target.parentNode, 'hide');			

	const id = e.target.id;
	const newValue = e.target.textContent + ' ';
	const titleElem = document.querySelector('.dropdown .title');
	const icon = document.querySelector('.dropdown .title .fa');


	titleElem.textContent = newValue;
	titleElem.appendChild(icon);
	
	//trigger custom event
	document.querySelector('.dropdown .title').dispatchEvent(new Event('change'));
	//setTimeout is used so transition is properly shown
	setTimeout(() => toggleClass(icon,'rotate-90',0));
}

function handleTitleChange(e){
	const result = document.getElementById('result');

	result.innerHTML = 'The result is: ' + e.target.textContent;
}

//get elements
const dropdownTitle = document.querySelector('.dropdown .title');
const dropdownOptions = document.querySelectorAll('.dropdown .option');

//bind listeners to these elements
dropdownTitle.addEventListener('click', toggleMenuDisplay);
dropdownOptions.forEach(option => option.addEventListener('click',handleOptionSelected));
document.querySelector('.dropdown .title').addEventListener('change',handleTitleChange);*/