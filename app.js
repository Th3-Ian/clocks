// app.js

const secondHand = document.querySelectorAll('.second-hand');
const minHand = document.querySelectorAll('.min-hand');
const hourHand = document.querySelectorAll('.hour-hand');

function setDate() {
	const now = new Date();
	const seconds = now.getSeconds();
	const minute = now.getMinutes();
	const hour = now.getHours();
	const secondsDegrees = ((seconds / 60) * 360) + 90;
	const minuteDegrees = ((minute / 60) * 360) + 90;


	secondHand.forEach(hand => {
		hand.style.transform = `rotate(${secondsDegrees}deg)`;
	});

	minHand.forEach(hand => {
		hand.style.transform = `rotate(${minuteDegrees}deg)`;
	});

	setHour(hour);
}


function setHour(hour) {

	const hourDegrees = ((hour / 12) * 360) + 90;
	const cstHourDegrees = (((hour - 1) / 12) * 360) + 90;
	const mstHourDegrees = (((hour - 2) / 12) * 360) + 90;
	const pstHourDegrees = (((hour - 3) / 12) * 360) + 90;

	hourHand.forEach(hand => {
		if(hand.classList.contains("est")) {
			hand.style.transform = `rotate(${hourDegrees}deg)`;
		}else if(hand.classList.contains("cst")) {
			hand.style.transform = `rotate(${cstHourDegrees}deg)`;
		}else if(hand.classList.contains("mst")) {
			hand.style.transform = `rotate(${mstHourDegrees}deg)`;
		}else if(hand.classList.contains("pst")) {
			hand.style.transform = `rotate(${pstHourDegrees}deg)`;
		}
	})
};


setInterval(setDate, 1000);