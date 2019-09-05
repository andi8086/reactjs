// React is default export and useState is another export
import React, { useState } from "react";

function Counter() {
    // current value and setter for the value are returned from useState
    const [count, setCount] = useState(0);

    return (<div>
        <button onClick={() => {setCount(count + 1)}}>{count}</button>
        <button onClick={() => {setCount(0)}}>Reset</button>
    </div>);
}

export default Counter;