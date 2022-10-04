import "./button.css";
import {Button} from "react-bootstrap";

function Buttons({selectedData, onSelectBtn}) {
  const buttons = selectedData.map((el, i) => {
    return (
      <Button
        variant="primary"
        size="lg"
        active
        className="Btns"
        onClick={() => {
          onSelectBtn(el);
        }}
        key={i}>
        {el} x {el}
      </Button>
    );
  });
  return <div className="Btn">{buttons}</div>;
}

export default Buttons;
