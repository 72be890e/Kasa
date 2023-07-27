import React, { useState } from "react";
import { ReactComponent as Arrow } from "../../assets/images/icons/collapse.svg";

function Collapse({ description, content }) {
  const [rotated, setRotated] = useState(true);

  function rotate() {
    setRotated(!rotated);
  }

  return (
    <div
      className={rotated ? "collapse-container active" : "collapse-container"}
    >
      <div className="description-container" onClick={rotate}>
        <span>{description}</span>
        <Arrow className={rotated ? "arrow rotated" : "arrow"} />
      </div>

      <div className="collapse-content-container">
        {!Array.isArray(content) ? (
          <p className="collapse-content">{content}</p>
        ) : (
          <ul className="collapse-content">
            {content.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Collapse;
