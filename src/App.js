import React from "react";
import "./App.css";
import Buttons from "./component/button/button";
import Area from "./component/area/area";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  state = {
    selectedData: [10, 20, 30],
    areaArrData: [],
    clazz: "sector__line",
  };
  generetArr = (to) => {
    const arr = [];
    for (let i = 0; i < to * to; i++) {
      arr.push(i);
    }
    return arr;
  };

  setClass = (data) => {
    console.log(data);
    if (data.length === 100) {
      console.log(data.length);
      console.log("work100");
      this.setState({clazz: "sector__line"});
    } else if (data.length === 400) {
      this.setState({clazz: "sector__line1"});
    } else {
      this.setState({clazz: "sector__line2"});
    }
  };
  setData = (arr) => {
    const newData = arr.map((el) => {
      return {
        el,
        color: "#00b4d8",
        key: String(Math.random()),
      };
    });
    this.setState({areaArrData: newData});
    this.setClass(newData);
  };

  onSelectBtn = (size) => {
    if (!size) {
      return null;
    }
    const arr = this.generetArr(size);
    this.setData(arr);
  };

  onChgeColor = (key) => {
    console.log(key);
    this.setState(({areaArrData}) => ({
      areaArrData: areaArrData.map((el) => {
        if (el.key === key) {
          let changedColor =
            el.color === "#00b4d8" ? "white" : "#00b4d8";
          console.log(changedColor);
          return {...el, color: changedColor};
        }
        return el;
      }),
    }));
  };

  render() {
    const {selectedData, areaArrData, clazz} = this.state;

    return (
      <div className="App">
        <Buttons
          selectedData={selectedData}
          onSelectBtn={this.onSelectBtn}
        />
        <Area
          arr={areaArrData}
          onChgeColor={this.onChgeColor}
          clazz={clazz}
        />
      </div>
    );
  }
}

export default App;
