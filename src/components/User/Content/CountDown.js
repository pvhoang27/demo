import { useState, useEffect } from "react";

const CountDown = (props) =>{
    const[count,setCount] = useState(10);

    useEffect( () =>{
        setCount(count -1)
        setInterval( () => {
            console.log('run bts')
        }, 1000)
    }, [])
    return(
        <div className="countdown-container">
            {count}
        </div>
    )
}

export default CountDown;