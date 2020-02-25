import React from "react";
import page3_1 from "../../assets/p3_1.png";
import page3_2 from "../../assets/p3_2.png";
import page3_3 from "../../assets/p3_3.png";
import page3_4 from "../../assets/p3_4.png";

class Page3 extends React.Component {
  getSplitInput = (boxCount, key) => {
    let inputs = [];
    for (let i = 0; i < boxCount; i++) {
      inputs.push(
        <input
          className="accountNumber mr-1 primary-input text-center"
          maxLength="1"
          key={i}
        />
      );
    }
    return inputs;
  };

  render() {
    return (
      <div className="container-fluid p-5">
        <img src={page3_1} width="700"></img>
        <img src={page3_2} width="700" className="mt-3"></img>
        <img src={page3_3} width="700"></img>
        <p
          className="text-right mt-5"
          style={{ fontSize: "9px", position: "relative", bottom: "20px" }}
        >
          BMK3069 (Rev07/18)
        </p>
      </div>
    );
  }
}

export default Page3;
