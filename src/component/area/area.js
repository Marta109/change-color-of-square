// import Squares from "../squares/square";
// import "./area.css";

// function Area({arr, onChgeColor, clazz}) {
//   if (!arr) {
//     return null;
//   }

//   return (
//     <div className={clazz}>
//       <Squares arr={arr} onChgeColor={onChgeColor}></Squares>
//     </div>
//   );
// }

// export default Area;

import "./area.css";

function Area({matrix, handleChange}) {
    if (!matrix.length) {
        return null;
    }

    return (
        <div className="area">
            {matrix.map((column, columnIndex) => (
                <div
                    className="column"
                    key={columnIndex}
                >{column.map((row, rowIndex) => (
                    <div
                        key={rowIndex}
                        className={`square ${row}`}
                        onMouseEnter={() => {
                            handleChange(columnIndex, rowIndex)
                        }}
                    >
                    </div>
                ))}</div>
            ))}
        </div>
    );
}

export default Area;
