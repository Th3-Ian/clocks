// app.js

const secondHand = document.querySelectorAll('.second-hand');
const minHand = document.querySelectorAll('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
	const now = new Date();
	const seconds = now.getSeconds();
	const minute = now.getMinutes();
	const hour = now.getHours();
	const secondsDegrees = ((seconds / 60) * 360) + 90;
	const minuteDegrees = ((minute / 60) * 360) + 90;
	const hourDegrees = ((hour / 12) * 360) + 90;

	secondHand.forEach(hand => {
		hand.style.transform = `rotate(${secondsDegrees}deg)`;
	});
	//secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
	minHand.forEach(hand => {
		hand.style.transform = `rotate(${minuteDegrees}deg)`;
	});

	hourHand.style.transform = `rotate(${hourDegrees}deg)`;

}


function setHour() {

}

setInterval(setDate, 4);