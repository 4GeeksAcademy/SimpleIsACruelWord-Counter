import React, { useState, useEffect } from "react";

function Home () {
	const [time, setTime] = useState(0);
	const [formattedTime, setFormattedTime] = useState({
		hours: 0, mins: 0, secs: 0});

	useEffect(() => {
		let interval = setInterval(() => {
			setTime(time + 1);
		}, 1000);

		return () => {
			clearInterval(interval);
		}
	});

	useEffect(() => {
		return setFormattedTime(SecsMinsHours(time));
	}, [time]);

	function SecsMinsHours (time){
		let hours = Math.floor(time/3600);
		let mins = Math.floor((time % 3600) / 60);
		let secs = time % 60;

		return {
			hours: hours,
			mins: mins,
			secs: secs, 
		};
	};

	return (
	<div className=".container-fluid">
		<div className="time">
			<span>{formattedTime.hours <= 9 ? `0${formattedTime.hours}`: formattedTime.hours} : </span>
			<span>{formattedTime.mins <= 9 ? `0${formattedTime.mins}`: formattedTime.mins} : </span>
			<span>{formattedTime.secs <= 9 ? `0${formattedTime.secs}`: formattedTime.secs}</span>
		</div>
{/* 		<div className="buttons d-flex">
			<button className="btn-start">Start</button>
			<button className="btn-stop">Stop</button>
			<button className="btn-resume">Resume</button>
			<button className="btn-reset">Reset</button>
		</div> */}
	</div>)
}

export default Home;