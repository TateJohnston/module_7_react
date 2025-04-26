import { useState } from "react";

// NAME OF COMPONENT IS A ARROW FUNCTION

const PureComponent = () => {
  // VARIABLES/STATE LIVE HERE

  // FUNCTIONS/EFFECTS LIVE HERE

  // RETURN LIVES HERE
  return (
    <div>
      <p>This is a pure component</p>
    </div>
  );
};

const StatefulComponent = () => {
  const [on, setOn] = useState(false);

  return (
    <div>
      <label>
        <input type="checkbox" checked={on} onChange={() => setOn(!on)} />
        {on ? "On" : "Off"}
      </label>
    </div>
  );
};
