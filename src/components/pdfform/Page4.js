import React from "react";
import CheckBox from "./CheckBox";
import page4_1 from "../../assets/p4_1.png";
import page4_2 from "../../assets/p4_2.png";

class Page4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post1: true,
      post2: true,
      home1: true,
      home2: true,
      phone1: true,
      phone2: true,
      text1: true,
      text2: true,
      message1: true,
      message2: true,
      online1: true,
      online2: true,
      email1: true,
      email2: true,
      mobConsent1: true,
      mobConsent2: true,
      consent1: true,
      consent2: true
    };
  }

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

  toggleCheckbox = key => {
    this.setState({
      [key]: !this.state.key
    });
  };

  render() {
    return (
      <div className="container-fluid p-5 page4 px-5 py-3">
        <hr className="divider" />

        <h4 className="text-right color-primary header">
          <span className="font-weight-bold">permanent tsb</span> Mortgage
          Application for Credit
        </h4>
        <hr className="divider-dotted" />
        <div className="d-flex flex-column w-100">
          <div className="d-flex flex-row w-100 h-40">
            <div className="d-flex flex-column w-50 mr-4">
              <h2 className="mt-1 font-weight-bold color-primary mb-2">
                Direct Marketing, Permanent TSB
              </h2>
              <p className="mb-1">
                Permanent TSB will use your personal data to identify our
                products, services and benefits which we believe may be of
                interest to you.
              </p>
              <p className="mb-1">
                {" "}
                Based on your indicated direct marketing preferences below we
                will inform you on how you can avail of these products and
                services using the following methods:{" "}
              </p>

              <div className="p4-checkbox">
                <div className="d-flex flex-row w-100 ml-2">
                  <div className="w-50 d-flex flex-row justify-content-end ml-2">
                    <label className="mr-2">Applicant 1</label>
                    <label>Applicant 2</label>
                  </div>
                  <div className="w-50 d-flex flex-row justify-content-end">
                    <label className="mr-2">Applicant 1</label>
                    <label>Applicant 2</label>
                  </div>
                </div>

                <div className="d-flex flex-row w-100 mb-1 ml-2">
                  <div className="w-50 d-flex flex-row justify-content-end">
                    <div className="mr-4 w-25 d-flex flex-row justify-content-center">
                      <label className="mr-3">Y</label>
                      <label className="">N</label>
                    </div>
                    <div className="w-25 d-flex flex-row justify-content-center mr-2">
                      <label className="mr-3">Y</label>
                      <label>N</label>
                    </div>
                  </div>

                  <div className="w-50 d-flex flex-row justify-content-end">
                    <div className="mr-4 w-25 d-flex flex-row justify-content-center">
                      <label className="mr-3">Y</label>
                      <label>N</label>
                    </div>
                    <div className="w-25 d-flex flex-row justify-content-center">
                      <label className="mr-3">Y</label>
                      <label>N</label>
                    </div>
                  </div>
                </div>

                <div className="d-flex flex-row w-100 align-items-center mb-1">
                  <div className="w-65">
                    <label>Post</label>
                  </div>

                  <div className="w-30 d-flex flex-row align-items-center">
                    <div
                      id="post1"
                      value={this.state.post1}
                      onClick={this.checkBoxpost1}
                    >
                      <CheckBox
                        check={e => {
                          this.toggleCheckbox("post1");
                        }}
                        page4={true}
                        noMarginRight = {true}
                      />
                    </div>

                    <div
                      id="post2"
                      value={this.state.post2}
                      onClick={this.checkBoxpost2}
                    >
                      <CheckBox
                        check={e => {
                          this.toggleCheckbox("post2");
                        }}
                        page4={true}
                      />
                    </div>
                  </div>

                  <div className="w-40 ml-4 ">
                    <label>Online</label>
                  </div>

                  <div className="w-30 d-flex flex-row align-items-center">
                    <div
                      id="online1"
                      value={this.state.online1}
                      onClick={this.checkBoxonline1}
                    >
                      <CheckBox
                        check={e => {
                          this.toggleCheckbox("online1");
                        }}
                        page4={true}
                      />
                    </div>

                    <div
                      id="online2"
                      value={this.state.online2}
                      onClick={this.checkBoxonline2}
                    >
                      <CheckBox
                        check={e => {
                          this.toggleCheckbox("online2");
                        }}
                        page4={true}
                      />
                    </div>
                  </div>
                </div>

                <div className="d-flex flex-row w-100 align-items-center mb-1">
                  <div className="w-65">
                    <label>Home Phone</label>
                  </div>

                  <div className="w-30 d-flex flex-row align-items-center">
                    <div
                      id="phone1"
                      value={this.state.phone1}
                      onClick={this.checkBoxphone1}
                    >
                      <CheckBox
                        check={e => {
                          this.toggleCheckbox("phone1");
                        }}
                        page4={true}
                      />
                    </div>
                    <div
                      id="phone2"
                      value={this.state.phone2}
                      onClick={this.checkBoxphone2}
                    >
                      <CheckBox
                        check={e => {
                          this.toggleCheckbox("phone2");
                        }}
                        page4={true}
                      />
                    </div>
                  </div>

                  <div className="w-40 ml-4">
                    <label>Email</label>
                  </div>

                  <div className="w-30 d-flex flex-row align-items-center">
                    <div
                      id="email1"
                      value={this.state.email1}
                      onClick={this.checkBoxemail1}
                    >
                      <CheckBox
                        check={e => {
                          this.toggleCheckbox("email1");
                        }}
                        page4={true}
                      />
                    </div>
                    <div
                      id="email2"
                      value={this.state.email2}
                      onClick={this.checkBoxemail2}
                    >
                      <CheckBox
                        check={e => {
                          this.toggleCheckbox("email2");
                        }}
                        page4={true}
                      />
                    </div>
                  </div>
                </div>

                <div className="d-flex flex-row w-100 align-items-center">
                  <div className="w-70">
                    <label>Text Message</label>
                  </div>

                  <div className="w-35 d-flex flex-row align-items-center ">
                    <div
                      id="text1"
                      value={this.state.text1}
                      onClick={this.checkBoxtext1}
                    >
                      <CheckBox
                        check={e => {
                          this.toggleCheckbox("text1");
                        }}
                        page4={true}
                      />
                    </div>

                    <div
                      id="text2"
                      value={this.state.text2}
                      onClick={this.checkBoxtext2}
                    >
                      <CheckBox
                        check={e => {
                          this.toggleCheckbox("text2");
                        }}
                        page4={true}
                      />
                    </div>
                  </div>

                  <div className="w-40 ml-5">
                    <label></label>
                  </div>
                  <div className="w-30 d-flex flex-row align-items-center"><label></label></div>


                  <div className="w-30 d-flex flex-row align-items-center mr-1"></div>
                </div>
              </div>
              <p className="mb-1 mt-3">
                <strong>
                  {" "}
                  Please indicate your consent to be contacted by mobile phone
                </strong>
              </p>
              <div className="d-flex flex-row align-items-center">
                <div className="w-50 d-flex flex-row align-items-center">
                  <label className="mr-2">Applicant 1</label>
                  <div
                    id="mobConsent1"
                    value={this.state.mobConsent1}
                    onClick={this.checkBoxmobConsent1}
                  >
                    <CheckBox
                      check={e => {
                        this.toggleCheckbox("mobConsent1");
                      }}
                      page4={true}
                      label={true}
                    />
                  </div>
                </div>

                <div className="w-50 d-flex flex-row align-items-center mb-1">
                  <label className="mr-2">Applicant 2</label>
                  <div
                    id="mobConsent2"
                    value={this.state.mobConsent2}
                    onClick={this.checkBoxmobConsent2}
                  >
                    <CheckBox
                      check={e => {
                        this.toggleCheckbox("mobConsent2");
                      }}
                      page4={true}
                      label={true}
                    />
                  </div>
                </div>
              </div>
              <p className="mt-1" style={{ fontSize: "10.4px" }}>
                If at any time you change your mind and you wish to amend your
                direct marketing preferences, you may contact us by writing to
                FREEPOST F4940, Customer Data Quality (Direct Marketing ),
                Permanent TSB p.l.c., 56-59 St. Stephen’s Green, Dublin 2, by
                phone on 1890 500 121 or +353 1 212 4101 or go to your local
                branch.
              </p>
            </div>

            <div className="d-flex flex-column w-50 mr-4 p4-right" >
              <h2 className="mt-1 font-weight-bold color-primary mb-2">
                Direct Marketing, Third Party Products
              </h2>
              <p className="mb-1" >
                Permanent TSB would like to use your personal data to provide
                you
                <br />
                with information about products, services or special offers (for
                example rewards, discounts and cashback programmes) from
                carefully selected third parties. Permanent TSB will never share
                your personal data with these third parties for marketing
                purposes.
              </p>
              <p className="mb-1">
                {" "}
                I hereby consent to being contacted for direct marketing of
                third party products and services using the methods selected
                across:
              </p>
              <div className="d-flex flex-row w-100 my-1">
                <div className="w-50 d-flex flex-row align-items-center">
                  <label className="mr-2">Applicant 1</label>
                  <div
                    id="consent1"
                    value={this.state.consent1}
                    onClick={this.checkBoxconsent1}
                  >
                    <CheckBox
                      check={e => {
                        this.toggleCheckbox("consent1");
                      }}
                      page4={true}
                      label={true}
                    />
                  </div>
                </div>

                <div className="w-50 d-flex flex-row align-items-center">
                  <label className="mr-2">Applicant 2</label>
                  <div
                    id="consent2"
                    value={this.state.consent2}
                    onClick={this.checkBoxconsent2}
                  >
                    <CheckBox
                      check={e => {
                        this.toggleCheckbox("consent2");
                      }}
                      page4={true}
                      label={true}
                    />
                  </div>
                </div>
              </div>
              <p >
                If at any time you change your mind and you wish to amend your
                direct marketing preferences, you may contact us by writing to
               <span className="p4-textchange"> FREEPOST F4940, Customer Data Quality (Direct Marketing ),
                Permanent TSB p.l.c., 56-59 St. Stephen’s Green, Dublin 2, by
                phone on 1890 500 121 or +353 1 212 4101 or go to your local
                branch.
                </span>
              </p>
            </div>
          </div>
          <div className="d-flex flex-column w-100 mt-2">
            <img src={page4_1} width="700"></img>
            <img src={page4_2} width="700"></img>
          </div>
        </div>
        <p className="text-right mb-2" style={{ fontSize: "9px", position:'relative', bottom:'10px' }}>
          BMK3069 (Rev07/18)
        </p>
      </div>
    );
  }
}
export default Page4;
