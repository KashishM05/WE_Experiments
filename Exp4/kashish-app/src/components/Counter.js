import React, {useState} from "react";

function Counter() {
    const[count,setCount]=useState(0);
    return (
        <div className="counter">
            <h1>Count: {count}</h1>
            <button onClick={()=>setCount(count+1)}>Increment</button>
            <button onClick={()=>setCount(count-1)}>Decrement</button>
            <button onClick={()=>setCount(0)}>Reset</button>
        </div>
    );
}
export default Counter;