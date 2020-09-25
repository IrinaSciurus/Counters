import React, { useState } from 'react';

function Counter() {

    const [count, setCount] = useState(0);

    const buttonPlusOne = () => {
        setCount(count + 1);
    }
    const buttonPlusTwo = () => {
        setCount(count + 2);
    }
    const buttonPlusThree = () => {
        setCount(count + 3);
    }
    const buttonMinusOne = () => {
        setCount(count - 1);
    }
    const buttonMinusTwo = () => {
        setCount(count - 2);
    }
    const buttonMinusThree = () => {
        setCount(count - 3);
    }
    const btnReset = () => {
        setCount(0);
    }

    return (
        <div>
            <button className='btn' onClick={buttonMinusThree}>-3</button>
            <button className='btn' onClick={buttonMinusTwo}>-2</button>
            <button className='btn' onClick={buttonMinusOne}>-1</button>
            <span>{count}</span>
            <button className='btn' onClick={buttonPlusOne}>+1</button>
            <button className='btn' onClick={buttonPlusTwo}>+2</button>
            <button className='btn' onClick={buttonPlusThree}>+3</button>
            <button className='btn' onClick={btnReset}>Reset</button>
        </div>

    );
}

export default Counter;
