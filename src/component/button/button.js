// import "./button.css";
// import {Button} from "react-bootstrap";

// function Buttons({selectedData, onSelectBtn}) {
//   const buttons = selectedData.map((el, i) => {
//     return (
//       <Button
//         variant="primary"
//         size="lg"
//         active
//         className="Btns"
//         onClick={() => {
//           onSelectBtn(el);
//         }}
//         key={i}>
//         {el} x {el}
//       </Button>
//     );
//   });
//   return <div className="Btn">{buttons}</div>;
// }

// export default Buttons;

import "./button.css";
import {Button} from "react-bootstrap";
import {useState} from "react";

function Buttons({onSelectBtn}) {
    const [size, setSize] = useState("10")

    return <div className="Btns">
        <select
            value={size}
            onChange={(event) => {
                setSize(event.target.value)
            }}
        >
            <option selected={true} value={10}>10 x 10</option>
            <option value={20}>20 x 20</option>
            <option value={30}>30 x 30</option>
        </select>
        <Button
            variant="primary"
            size="lg"
            active
            className="Btns"
            onClick={() => {
                onSelectBtn(size);
            }}
        >
            Apply
        </Button>
    </div>;
}

export default Buttons;
