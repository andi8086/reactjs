// React is default export and useState is another export
import React, { useState } from "react";
import './counter.css'

function Counter() {
    // current value and setter for the value are returned from useState
    const [count, setCount] = useState(0);

    return (
    <div className={"counter " + (count > 10 ? "high": "low")}>
        <button onClick={() => {setCount(count + 1)}}>{count}</button>
        <button onClick={() => {setCount(0)}}>Reset</button>
    </div>);
}

export default Counter;