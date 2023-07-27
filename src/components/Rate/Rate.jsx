import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const star = <FontAwesomeIcon icon={faStar} />;

function Rate({ value }) {
  const range = [1, 2, 3, 4, 5];
  return (
    <div className="rate-container">
      {range.map((v) =>
        value >= v ? (
          <span key={v.toString()} className="rate-star">
            {star}
          </span>
        ) : (
          <span key={v.toString()} className="rate-star star-grey">
            {star}
          </span>
        )
      )}
    </div>
  );
}

export default Rate;
