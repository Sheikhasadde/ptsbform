import React from "react";
import logo from "../../assets/logo.png";
import test from "../../assets/test.png";
import test1 from "../../assets/test1.png";

class Page1 extends React.Component {
  constructor(props) {
    super(props);

    const form = this.props.form;

    const getApplicantName = (keys) => {
      console.log(keys)
      let toReturn = '';
      keys.forEach(key => {
        if (key) {
          toReturn += `${key}, `;
        }
      });
      return toReturn.substring(0, toReturn.length - 2);
    }

    const pd1 = form.personalDetails;
    const pd2 = form.applicant2.personalDetails;

    const applicantOneName = getApplicantName([pd1.firstName, pd1.lastName, pd1.surname, pd1.middleName, pd1.maidenName]);
    const applicantTwoName = getApplicantName([pd2.firstName, pd2.lastName, pd2.surname, pd2.surnamem, pd2.maidenName]);

    this.state = {
      accountNumber:
        Array.from(
          String(form.additionalProperties[0].accNumber),
          Number
        ) || new Array(14).fill(""),
      fullName: applicantOneName,
      fullName2: applicantTwoName,
      addressProperty: form.propAddress,
      ppsn1: Array.from(form.declarations.ppsNum),
      ppsn2: Array.from(form.applicant2.declarations.ppsNum),
      purchasePrice: form.mortDetails.purchasePrice,
      mortgageType: form.mortDetails.currentPropType,
      loanReq: form.mortDetails.estimatedLoan,
      repaymentTerm: form.mortDetails.borrowingYears,
      addressArr: [],
      form
    };
  }

  splitInputChange = (event, key, index) => {
    this.state[key][index] = event.target.value;
    this.setState({
      ...this.state
    });
  };

  getSplitInput = (boxCount, key) => {
    let inputs = [];
    for (let i = 0; i < boxCount; i++) {
      const classes = `accountNumber mr-${
        i === 5 && key === "accountNumber" ? 4 : 1
      } primary-input text-center`;
      inputs.push(
        <input
          className={classes}
          maxLength="1"
          onChange={e => {
            this.splitInputChange(e, key, i);
          }}
          value={this.state[key][i]}
          key={i}
        />
      );
    }
    return inputs;
  };

  inputChange = (event, index) => {
    this.setState({
      [event.target.id]: event.target.value
    });
    this.state.form.additionalProperties[0].accNumber = this.state.accountNumber;
  };

  getApplicantOneName = (form) => {

  }

  render() {
    return (
      <div className="container-fluid px-5 py-3">
        <div className="d-flex flex-row w-100">
          <div className="w-65 mt-5">
            <h1 className="color-primary headings">
              Mortgage Application for Credit
            </h1>
            <hr className="divider" />
          </div>
          <div className="w-35 d-flex justify-content-end">
            <img src={logo} height="90" className="ml-2" />
          </div>
        </div>

        <p style={{ fontSize: "12px" }} className="mb-3">
          Intermediary Mortgage Centre, permanent tsb Corporate Centre, Third
          floor, <br />
          Carysfort Avenue, Blackrock, Co Dublin.
        </p>

        <div className="d-flex flex-row w-87 align-items-center">
          <label className="w-30">Account Number</label>
          <div className="d-flex flex-row w-65">
            {this.getSplitInput(14, "accountNumber")}
          </div>
        </div>

        <h2 className="my-3 font-weight-bold color-primary">
          Personal Details
        </h2>

        <div className="d-flex flex-column w-87">
          <div className="d-flex flex-row align-items-center">
            <div className="w-30">
              <label>Applicant’s name(s):</label>
            </div>
            <div className="w-65">
              <input
                type="text"
                id="fullName"
                className="primary-input form-control"
                value={this.state.fullName}
                onChange={this.inputChange}
              />
            </div>
          </div>

          <div className="d-flex flex-row align-items-center mt-2">
            <div className="w-30"></div>
            <div className="w-65">
              <input
                type="text"
                id="fullName2"
                className="primary-input form-control"
                value={this.state.fullName2}
                onChange={this.inputChange}
              />
            </div>
          </div>

          <div className="d-flex flex-row align-items-center mt-2">
            <div className="w-30">
              <label>Address of property to be mortgaged:</label>
            </div>
            <div className="w-65">
              <input
                type="text"
                className="primary-input form-control"
                id="addressProperty"
                value={this.state.addressProperty}
                onChange={this.inputChange}
              />
            </div>
          </div>

          <div className="d-flex flex-row align-items-center mt-2">
            <div className="w-30"></div>
            <div className="w-65">
              <input type="text" className="primary-input form-control" />
            </div>
          </div>

          <div className="d-flex flex-row align-items-center mt-2">
            <div className="w-30"></div>
            <div className="w-65">
              <input type="text" className="primary-input form-control" />
            </div>
          </div>

          <div className="d-flex flex-row align-items-center mt-2">
            <label className="w-30">Applicant 1 PPSN:</label>
            <div className="d-flex flex-row w-65">
              {this.getSplitInput(8, "ppsn1")}
            </div>
          </div>

          <div className="d-flex flex-row align-items-center mt-2">
            <label className="w-30">Applicant 2 PPSN:</label>
            <div className="d-flex flex-row w-65">
              {this.getSplitInput(8, "ppsn2")}
            </div>
          </div>
        </div>

        <h2 className="my-3 font-weight-bold color-primary">
          Details of Mortgage Required
        </h2>

        <div className="d-flex flex-column w-87">
          <div className="d-flex flex-row align-items-center">
            <div className="w-30">
              <label>Purchase price/value of property:</label>
            </div>
            <div className="w-65">
              <div className="input-group mb-1">
                <div className="input-group-prepend">
                  <span className="input-group-text primary-input no-right-border input-placeholder">
                    €
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control primary-input no-left-border"
                  id="purchasePrice"
                  value={this.state.purchasePrice}
                  onChange={this.inputChange}
                />
              </div>
            </div>
          </div>

          <div className="d-flex flex-row align-items-center mt-2">
            <div className="w-30">
              <label>Mortgage type:</label>
            </div>
            <div className="w-65">
              <input
                type="text"
                className="primary-input form-control"
                id="mortgageType"
                value={this.state.mortgageType}
                onChange={this.inputChange}
              />
            </div>
          </div>

          <div className="d-flex flex-row align-items-center mt-2">
            <div className="w-30">
              <label>Amount of loan required:</label>
            </div>
            <div className="w-65">
              <div className="input-group mb-1">
                <div className="input-group-prepend">
                  <span className="input-group-text primary-input no-right-border input-placeholder">
                    €
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control primary-input no-left-border"
                  id="loanReq"
                  value={this.state.loanReq}
                  onChange={this.inputChange}
                />
              </div>
            </div>
          </div>

          <div className="d-flex flex-row align-items-center mt-2">
            <div className="w-30">
              <label>Repayment term required:</label>
            </div>
            <div className="w-65">
              <input
                type="text"
                className="primary-input form-control"
                id="repaymentTerm"
                value={this.state.repaymentTerm}
                onChange={this.inputChange}
              />
            </div>
          </div>
        </div>

        <h2 className="mt-3 font-weight-bold color-primary">Valuation</h2>
        <img src={test1} width="700" alt="" />

        <h2 className="mt-3 font-weight-bold color-primary mb-2">Insurance</h2>
        <img src={test} width="700" alt="" />

        <p className="text-right mt-2" style={{ fontSize: "9px" }}>
          BMK3069 (Rev07/18)
        </p>
      </div>
    );
  }
}

export default Page1;
