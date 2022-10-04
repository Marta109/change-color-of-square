import React from "react";
import "./square.css";

function Squares({arr, onChgeColor}) {
  const rendersquare = (arr) => {
    const square = arr.map((item) => {
      return (
        <div
          key={item.key}
          className="square"
          style={{backgroundColor: `${item.color}`}}
          onClick={() => {
            onChgeColor(item.key);
          }}></div>
      );
    });

    return square;
  };

  let squares = "";
  if (arr.length > 0) {
    squares = rendersquare(arr);
  } else {
    return null;
  }

  return <>{squares}</>;
}

export default Squares;
