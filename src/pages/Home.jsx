import React, { useState } from 'react'

const Home = () => {
    let [count, setCount] = useState(0);
    let [error, setError] = useState("");
    let handleIncrement = ()=>{
        setError("");
        count++;
        setCount(count);
    }

    let handleDecrement = ()=>{
        if(count > 0){
            count--;
            setCount(count);
        }else{
            setError("Negative value not Allow");
        }
    }
    return (
        <>
            <button onClick={handleIncrement}>Increment</button>
            <h1>{count}</h1>
            {
                count >= 10 && <p>10 than geater and equal</p>
            }
            <p>{error}</p>
            <button onClick={handleDecrement}>Decrement</button>
        </>
    )
}

export default Home