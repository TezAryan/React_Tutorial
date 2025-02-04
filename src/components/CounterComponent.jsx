import React, {useState , useEffect} from "react";

const CounterComponent = () => {
    const [count , setCount] = useState(15);
    

  
useEffect( () => {
    console.log("count is updated");

} , [count]);
    return (
        <div>
            <p> Count Component - {count}</p>
            <h4>Number is {count % 2 == 0 ? "even" : "odd"}</h4>
            <button onClick={() => setCount(count + 1)}>Increament</button>
            <button onClick={() => setCount(count - 1)}>Decreament</button>
        </div>
    );
};

export default CounterComponent;