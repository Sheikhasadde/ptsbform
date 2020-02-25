import React from "react";

class CheckBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      check: this.props.check
    };
  }

  inputChange = (event, limit) => {
    if (limit) {
      event.target.value = event.target.value.substring(0, limit - 1);
    }
    this.setState({
      check: !this.state.check
    });
    //this.props.form.additionalProperties[0].accNumber = this.state.accountNumber
  };

  render() {
    const marg = `checkbox-div ${
      this.props.page4 || this.props.reducedMargin ? "mr-1" : "mr-3"
    }`;
 
    const class2 = `checkbox-div ${this.props.noMarginRight && !this.props.page4 ? "mr-0" : "mr-3"}`;
     //class1 = `checkbox-div ${this.props.noMarginRight && this.props.page4 ? "mr-2" : "mr-4"}`;

    return (
      <div className="d-flex flex-row align-items-center ">
        {this.props.label && (
          <label className="mr-1">{this.props.lowercase ? "Yes" : "YES"}</label>
        )}
        <div className={marg} onClick={this.inputChange}>
          {this.state.check && <div className="checkbox-div-checked"></div>}
        </div>
        {this.props.label && (
          <label className="mr-1">{this.props.lowercase ? "No" : "NO"}</label>
        )}

        <div className={class2} onClick={this.inputChange}>
          {!this.state.check && <div className="checkbox-div-checked"></div>}
        </div>
      </div>
    );
  }
}

export default CheckBox;
