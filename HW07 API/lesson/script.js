// console.log("Hello");

// function hello(){
// 	console.log("Hello");
// }

// hello();

// console.log(el.parentNode);
// el.style.background = "#000";

// let sel = document.querySelector('select');
// console.log(sel.childnodes);

// Get element Let el = document. querySelector

let el = document.querySelector('.hw-item');
let btn = document.querySelector("#btn");

btn.addEventListener('click', function() {

	// Global API request
	// fetch ('https://api.github.com/repos/azamtau/p5game/commits')
	// 	.then(response => response.json())
	// 	.then(data => console.log(data[0].author.login))
	// 	.catch(); 

	// Local file .json
	// fetch ('./data.json')
	// 	.then(response => response.json())
	// 	.then(data => console.log(data))
	// 	.catch(error => console.log(error));

	// Function for homework data
	fetch ('./data.json')
		.then(response => response.json())
		.then(data => {
			for (let hw of data.homeworks) 
			{
				let hwHolder = document.querySelector('.hw-holder');

				let hwItem = document.createElement('div');
				hwItem.setAttribute('class', 'hw-item');

				let hwP = document.createElement('p');
				let cmp = getCMP(hw.deadline, hw.points);
				hwP.textContent = `${hw.name} CMP:${cmp}`;

				hwHolder.appendChild(hwItem);
				hwItem.appendChild(hwP);
			}	
		})
		.catch(error => console.log(error));
});

function calcCurrPoint(maxPoints, hoursLate) {

	let currMaxPoints = maxPoints; 

	while(hoursLate > 0) {
		currMaxPoints = currMaxPoints * 0.99; 
		hoursLate--;
	}
return Math.round((currMaxPoints + Number.EPSILON) * 100) / 100;
}

function getCMP(deadline, maxPoints) {
let currDate = Date. now(); 
let hoursLate = Math.floor((currDate - Date.parse(deadline)) / 3600000);
let cmp = calcCurrPoint(maxPoints, hoursLate); 
return cmp;
}


