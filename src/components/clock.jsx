import { useState, useEffect } from "react";
function Clock(props) {
  const [date, setDate] = useState(new Date());

  function refreshClock() {
    setDate(new Date());
  }
  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);
  return <h1 className={props.className} value = {date.toLocaleString()}>{date.toLocaleString()}</h1>;
}
export default Clock;
