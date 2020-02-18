import React from "react";
import logo from "../../assets/logo.png";

class Page1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      accountNumber:
        Array.from(
          String(this.props.form.additionalProperties[0].accNumber),
          Number
        ) || new Array(14).fill(""),
      fullName: this.props.form.personalDetails.peopleOver17[0].fullName,
      fullName2: this.props.form.applicant2.personalDetails.peopleOver17[0]
        .fullName,
      addressProperty: this.props.form.propAddress,
      ppsn1: Array.from(this.props.form.declarations.ppsNum),
      ppsn2: Array.from(this.props.form.applicant2.declarations.ppsNum),
      purchasePrice: this.props.form.mortDetails.purchasePrice,
      mortgageType: this.props.form.mortDetails.currentPropType,
      loanReq: this.props.form.mortDetails.estimatedLoan,
      repaymentTerm: this.props.form.mortDetails.borrowingYears,
      addressArr: []
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
        i === 6 && key === "accountNumber" ? 4 : 1
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
    this.props.form.additionalProperties[0].accNumber = this.state.accountNumber;
  };

  render() {
    return (
      <div className="container-fluid p-5">
        <div className="d-flex flex-row w-100">
          <div className="w-60 mt-5">
            <h1 className="color-primary headings">
              Mortgage Application for Credit
            </h1>
            <hr className="divider" />
          </div>
          <div className="w-40 d-flex justify-content-end">
            <img src={logo} height="100" />
          </div>
        </div>

        <p style={{ fontSize: "12px" }} className="mb-3">
          Intermediary Mortgage Centre, permanent tsb Corporate Centre, Third
          floor, <br />
          Carysfort Avenue, Blackrock, Co Dublin.
        </p>

        <div className="d-flex flex-row w-75 justify-content-between align-items-center">
          <label>Account Number</label>
          <div className="d-flex flex-row">
            {this.getSplitInput(14, "accountNumber")}
          </div>
        </div>

        <h2 className="mt-3 font-weight-bold color-primary">
          Personal Details
        </h2>

        <div className="d-flex flex-column w-75">
          <div className="d-flex flex-row justify-content-between align-items-center">
            <div className="w-40">
              <label>Applicant’s name(s):</label>
            </div>
            <div className="w-60">
              <input
                type="text"
                id="fullName"
                className="primary-input form-control"
                value={this.state.fullName}
                onChange={this.inputChange}
              />
            </div>
          </div>

          <div className="d-flex flex-row justify-content-between align-items-center mt-3">
            <div className="w-40"></div>
            <div className="w-60">
              <input
                type="text"
                id="fullName2"
                className="primary-input form-control"
                value={this.state.fullName2}
                onChange={this.inputChange}
              />
            </div>
          </div>

          <div className="d-flex flex-row justify-content-between align-items-center mt-3">
            <div className="w-40">
              <label>Address of property to be mortgaged:</label>
            </div>
            <div className="w-60">
              <input
                type="text"
                className="primary-input form-control"
                id="addressProperty"
                value={this.state.addressProperty}
                onChange={this.inputChange}
              />
            </div>
          </div>

          <div className="d-flex flex-row justify-content-between align-items-center mt-3">
            <div className="w-40"></div>
            <div className="w-60">
              <input type="text" className="primary-input form-control" />
            </div>
          </div>

          <div className="d-flex flex-row justify-content-between align-items-center mt-3">
            <div className="w-40"></div>
            <div className="w-60">
              <input type="text" className="primary-input form-control" />
            </div>
          </div>

          <div className="d-flex flex-row justify-content-between align-items-center mt-3">
            <label className="w-40">Applicant 1 PPSN:</label>
            <div className="d-flex flex-row w-60">
              {this.getSplitInput(8, "ppsn1")}
            </div>
          </div>

          <div className="d-flex flex-row justify-content-between align-items-center mt-3">
            <label className="w-40">Applicant 2 PPSN:</label>
            <div className="d-flex flex-row w-60">
              {this.getSplitInput(8, "ppsn2")}
            </div>
          </div>
        </div>

        <h2 className="mt-3 font-weight-bold color-primary">
          Details of Mortgage Required
        </h2>

        <div className="d-flex flex-column w-75">
          <div className="d-flex flex-row justify-content-between align-items-center">
            <div className="w-40">
              <label>Purchase price/value of property:</label>
            </div>
            <div className="w-60">
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

          <div className="d-flex flex-row justify-content-between align-items-center mt-3">
            <div className="w-40">
              <label>Mortgage type:</label>
            </div>
            <div className="w-60">
              <input
                type="text"
                className="primary-input form-control"
                id="mortgageType"
                value={this.state.mortgageType}
                onChange={this.inputChange}
              />
            </div>
          </div>

          <div className="d-flex flex-row justify-content-between align-items-center mt-3">
            <div className="w-40">
              <label>Amount of loan required:</label>
            </div>
            <div className="w-60">
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

          <div className="d-flex flex-row justify-content-between align-items-center mt-3">
            <div className="w-40">
              <label>Repayment term required:</label>
            </div>
            <div className="w-60">
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
        <p style={{ fontSize: "12px" }}>
          permanent tsb will require a valuation of and certain other
          information about the property you wish to buy and/or mortgage. The
          valuation report, of which you will obtain a copy, is designed
          specially for the needs of permanent tsb to help us decide if the
          property represents adequate security for the loan you require. The
          valuation report will be based on a limited inspection and is not
          intended to be a structural survey nor a condition report. It is
          important that you should not rely in anyway on the valuation report.
          It is possible that there are defects in the property which are not
          reported but which a more detailed inspection would reveal. This means
          that the valuation report may not make you aware of defects which
          could affect your decision to buy. permanent tsb recommends that you
          obtain a more comprehensive report or structural survey.
        </p>

        <h2 className="mt-3 font-weight-bold color-primary mb-2">Insurance</h2>
        <h4 className="font-weight-bold">Life Assurance</h4>
        <p className="mb-2" style={{ fontSize: "11.8px" }}>
          It is a condition on all repayment loans that Mortgage Protection
          Cover is effected before the loan cheque issues, permanent tsb can
          arrange this and the premiums may be incorporated in the monthly
          repayments for the duration of the loan. Alternatively applicants can
          make their own arrangements but the cover must meet permanent tsb
          requirements. Independent cover must be in place before the loan
          cheque is issued.
        </p>

        <h4 className="font-weight-bold">Property Insurance</h4>
        <p style={{ fontSize: "11.8px" }}>
          <span style={{ fontSize: "10px" }}>
            It is a condition on all loans
          </span>
          that property insurance is effected before the loan cheque issues.
          permanent tsb can arrange this and the premiums may be incorporated in
          the monthly repayments for the duration of the loan. Borrowers have
          the right to effect and maintain such insurance as is required by
          permanent tsb with any recognised insurer or through any authorised
          agency of their choice. If you wish to exercise this right, you must
          notify permanent tsb on acceptance of a loan offer (if any) and on
          receipt of said notification permanent tsb shall inform you of its
          detailed insurance requirements. The loan will not be issued until
          permanent tsb’s insurance requirements
          <span style={{ fontSize: "10.3px" }}>
            have been complied with to permanent tsb’s reasonable satisfaction.
            Where the borrower ceases to maintain adequate insurance cover for
            the property at any time during the period of the loan agreement,
            permanent tsb may insure the property through its agency for not
            less than the estimated cost of reinstatement. The borrower will be
            liable for the premium monthly / annually for the duration of the
            loan.
          </span>
        </p>

        <p className="text-right mt-2" style={{ fontSize: "9px" }}>
          BMK3069 (Rev07/18)
        </p>
      </div>
    );
  }
}

export default Page1;
