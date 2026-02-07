import { useState, useEffect } from "react";

const CountDown = (props) => {
  const [count, setCount] = useState(10);

  useEffect(() => {
    if (count === 0) return;
    setCount(count - 1);
    const timer = setInterval(() => {
      console.log("run bts");
    }, 1000);

    // setTimeout(() => {
    //   clearInterval(timer);
    // }, 5000);

    return () => {
        clearInterval(timer);
    }

  }, [count]);
  return <div className="countdown-container">{count}</div>;
};

export default CountDown;
