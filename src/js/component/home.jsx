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
	},);


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

	useEffect(() => {
		return setFormattedTime(SecsMinsHours(time));
	}, [time]);

	function handleClickReset () {
		setTime(0);
	}


	return (
	<div className=".container-fluid">
		<div className="time" id="counter">
			<span>{formattedTime.hours <= 9 ? `0${formattedTime.hours}`: formattedTime.hours} : </span>
			<span>{formattedTime.mins <= 9 ? `0${formattedTime.mins}`: formattedTime.mins} : </span>
			<span>{formattedTime.secs <= 9 ? `0${formattedTime.secs}`: formattedTime.secs}</span>
		</div>
 		<div className="buttons d-flex">
			<button className="btn-reset" onClick={handleClickReset}>Reset</button>
			
		</div>
	</div>
	)
}

export default Home;