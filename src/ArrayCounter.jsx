import React, { useState } from 'react'

function ArrayCounter() {
	const [counter, setCounter] = useState([0, 0, 0, 0, 0])

	const buttonMinus = (item) => {
		const updateCounter = [...counter];
		updateCounter[item] -= 1;
		setCounter(updateCounter);
	};

	const buttonPlus = (item) => {
		const updateCounter = [...counter];
		updateCounter[item] += 1;
		setCounter(updateCounter);
	};

	const buttonReset = (item) => {
		const updateCounter = [...counter];
		updateCounter[item] = 0;
		setCounter(updateCounter);
	};

	return (
		<div>
			{counter.map((el, index) =>
				<div key={index}>
					<button className='btn' onClick={() => buttonMinus(index)}>-1</button>
					<span>{el}</span>
					<button className='btn' onClick={() => buttonPlus(index)}>+1</button>
					<button className='btn' onClick={() => buttonReset(index)}>Reset</button>
				</div>
			)}
		</div>
	)
}
export default ArrayCounter;