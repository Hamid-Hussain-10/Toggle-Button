import React, { useState } from "react";

function ToggleSwitch() {
  const [isOn, setIsOn] = useState(false);

  const ToggleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <div className="container1" onClick={ToggleSwitch}>
      <div className={`sub-container ${isOn ? "on" : "off"}`}>
        <span>{isOn ? "on" : "off"}</span>
      </div>
    </div>
  );
}

export default ToggleSwitch;
