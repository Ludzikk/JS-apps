const hourLeft = document.querySelector(".time__timehour--left");
const hourRight = document.querySelector(".time__timehour--right");
const minLeft = document.querySelector(".time__timemin--left");
const minRight = document.querySelector(".time__timemin--right");
const secLeft = document.querySelector(".time__timesec--left");
const secRight = document.querySelector(".time__timesec--right");

let date = new Date();
let dateHour;
let dateMin;
let dateSec;

const updateTime = () => {
	date = new Date();
	dateHour = date.getHours();
	dateMin = date.getMinutes();
	dateSec = date.getSeconds();

	updateHour();
	updateMin();
	updateSec();
};

const updateHour = () => {
	if (dateHour < 10) {
		hourLeft.textContent = 0;
		hourRight.textContent = dateHour;
	} else {
		hourLeft.textContent = dateHour.toString().slice(0, -1);
		hourRight.textContent = dateHour.toString().slice(1);
	}
};

const updateMin = () => {
	if (dateMin < 10) {
		minLeft.textContent = 0;
		minRight.textContent = dateMin;
	} else {
		minLeft.textContent = dateMin.toString().slice(0, -1);
		minRight.textContent = dateMin.toString().slice(1);
	}
};

const updateSec = () => {
	if (dateSec < 10) {
		secLeft.textContent = 0;
		secRight.textContent = dateSec;
	} else {
		secLeft.textContent = dateSec.toString().slice(0, -1);
		secRight.textContent = dateSec.toString().slice(1);
	}
};

updateTime();

setInterval(() => {
	updateTime();
}, 1000);
