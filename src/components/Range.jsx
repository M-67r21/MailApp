import React from "react";
import { useState } from "react";

const Range = () => {
  const [range, setRange] = useState(50);

  const handleRange = (e) => {
    setRange(e.target.value);
  };
  return (
    <div className="scale" style={{display:'flex'}}>
      <input
        type="range"
        id="rangeInput"
        name="rangeInput"
        min="0"
        max="100"
        value={range}
        onChange={handleRange}
      />

      <p>{range}%</p>
    </div>
  );
};

export default Range;
