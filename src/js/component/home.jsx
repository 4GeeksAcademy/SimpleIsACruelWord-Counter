import React, { useState, useEffect } from "react";

function Home () {
	const [time, setTime] = useState(0);

	useEffect(() => {
		let interval = setInterval(() => {
			setTime(time + 1);
		}, 1000);

		return () => {
			clearInterval(interval);
		}
	}, [time])

	return (
	<div className="container-fluid">
		<span>{time} seconds</span>
	</div>)
}

export default Home;