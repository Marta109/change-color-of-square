import Squares from "../squares/square";
import "./area.css";

function Area({arr, onChgeColor, clazz}) {
  if (!arr) {
    return null;
  }

  return (
    <div className={clazz}>
      <Squares arr={arr} onChgeColor={onChgeColor}></Squares>
    </div>
  );
}

export default Area;
