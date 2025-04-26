import { useState, useEffect } from "react";
// Renders a digital time that updates every second
function Clock() {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    // first arg is usually an arrow function
    setInterval(() => tick(), 1000);
    console.log("Clock component mounted");
  }, []); // second arg is an array of dependencies
  const tick = () => {
    setDate(new Date());
    console.log("tick"); // track the effect frequency
  };
  return (
    <div className="Clock">
      <h3>Digital Clock</h3>
      {date.toLocaleTimeString()}
    </div>
  );
}

export default Clock;
// ++ Try removing the dependency array from useEffect
// and notice the difference in ‘tick’ log messages
// ++ Why do the console messages appear double?
