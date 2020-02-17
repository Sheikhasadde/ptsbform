import React from 'react';
import CheckBox from './CheckBox'
import "./Style.css";
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
        }
    }

    getSplitInput = (boxCount, key) => {
        let inputs = [];
        for (let i = 0; i < boxCount; i++) {
            inputs.push(<input className="accountNumber mr-1 primary-input text-center" maxLength="1" key={i} />);
        }
        return inputs;
    }

    toggleCheckbox = (key) => {
        this.setState({
            [key]: !this.state.key
        });
    }

    render() {
        return (

            <div className="container-fluid p-5">
                <hr className="divider" />

                <h4 className="text-right color-primary"><span className="font-weight-bold">permanent tsb</span> Mortgage Application
            for Credit</h4>
                <hr className="divider-dotted" />

                <div className="d-flex flex-row w-100">
                    <div className="d-flex flex-column w-50 mr-5">
                        <h2 className="mt-1 font-weight-bold color-primary mb-2">Direct Marketing, Permanent TSB</h2>
                        <p>Permanent TSB will use your personal data to identify our products,
                    services and benefits which we believe may be of interest to you.<br />
                            Based on your indicated direct marketing preferences below we will
                            inform you on how you can avail of these products and services using
                    the following methods: </p>
                        <div className="">
                            <div className="d-flex flex-row w-100">

                                <div className="w-50 d-flex flex-row justify-content-end">
                                    <label className="mr-2">Applicant 1</label>
                                    <label>Applicant 2</label>
                                </div>
                                <div className="w-50 d-flex flex-row justify-content-end">
                                    <label className="mr-2">Applicant 1</label>
                                    <label>Applicant 2</label>
                                </div>

                            </div>


                            <div className="d-flex flex-row w-100">
                                <div className="w-50 d-flex flex-row justify-content-end">
                                    <div className="mr-4 w-25 d-flex flex-row justify-content-center">
                                        <label className="mr-4">Y</label>
                                        <label>N</label>
                                    </div>
                                    <div className="w-25 d-flex flex-row justify-content-center">
                                        <label className="mr-4">Y</label>
                                        <label>N</label>
                                    </div>
                                </div>

                                <div className="w-50 d-flex flex-row justify-content-end">
                                    <div className="mr-4 w-25 d-flex flex-row justify-content-center">
                                        <label className="mr-4">Y</label>
                                        <label>N</label>
                                    </div>
                                    <div className="w-25 d-flex flex-row justify-content-center">
                                        <label className="mr-4">Y</label>
                                        <label>N</label>
                                    </div>
                                </div>

                            </div>

                            <div className="d-flex flex-row w-100 align-items-center mt-4">
                                <div className="w-20 mr-3">
                                    <label>Post</label>
                                </div>

                                <div className="w-30 d-flex flex-row align-items-center">
                                    <div id="post1" value={this.state.post1} onClick={this.checkBoxpost1}>
                                        <CheckBox check={(e) => { this.toggleCheckbox('post1') }} page4={true} />
                                    </div>

                                    <div id="post2" value={this.state.post2} onClick={this.checkBoxpost2}>
                                        <CheckBox check={(e) => { this.toggleCheckbox('post2') }} page4={true} />
                                    </div>
                                </div>

                                <div className="w-20 ml-4">
                                    <label>Online</label>
                                </div>

                                <div className="w-30 d-flex flex-row align-items-center mr-1">
                                    <div id="online1" value={this.state.online1} onClick={this.checkBoxonline1}>
                                        <CheckBox check={(e) => { this.toggleCheckbox('online1') }} page4={true} />
                                    </div>

                                    <div id="online2" value={this.state.online2} onClick={this.checkBoxonline2}>
                                        <CheckBox check={(e) => { this.toggleCheckbox('online2') }} page4={true} />
                                    </div>

                                </div>
                            </div>

                            <div className="d-flex flex-row w-100 align-items-center">
                                <div className="w-20 mr-3">
                                    <label>Home Phone</label>
                                </div>

                                <div className="w-30 d-flex flex-row align-items-center">
                                    <div id="phone1" value={this.state.phone1} onClick={this.checkBoxphone1}>
                                        <CheckBox check={(e) => { this.toggleCheckbox('phone1') }} page4={true} />
                                    </div>
                                    <div id="phone2" value={this.state.phone2} onClick={this.checkBoxphone2}>
                                        <CheckBox check={(e) => { this.toggleCheckbox('phone2') }} page4={true} />
                                    </div>

                                </div>

                                <div className="w-20 ml-4">
                                    <label>Email</label>
                                </div>

                                <div className="w-30 d-flex flex-row align-items-center mr-1">
                                    <div id="email1" value={this.state.email1} onClick={this.checkBoxemail1}>
                                        <CheckBox check={(e) => { this.toggleCheckbox('email1') }} page4={true} />
                                    </div>
                                    <div id="email2" value={this.state.email2} onClick={this.checkBoxemail2}>
                                        <CheckBox check={(e) => { this.toggleCheckbox('email2') }} page4={true} />
                                    </div>
                                </div>
                            </div>

                            <div className="d-flex flex-row w-100 align-items-center">
                                <div className="w-20 mr-3">
                                    <label>Text Message</label>
                                </div>

                                <div className="w-30 d-flex flex-row align-items-center">
                                    <div id="text1" value={this.state.text1} onClick={this.checkBoxtext1}>
                                        <CheckBox check={(e) => { this.toggleCheckbox('text1') }} page4={true} />
                                    </div>

                                    <div id="text2" value={this.state.text2} onClick={this.checkBoxtext2}>
                                        <CheckBox check={(e) => { this.toggleCheckbox('text2') }} page4={true} />
                                    </div>

                                </div>

                                <div className="w-50"></div>

                                <div className="w-20 ml-4">
                                    <label></label>
                                </div>

                                <div className="w-30 d-flex flex-row align-items-center mr-1">
                                </div>

                            </div>

                        </div>
                        <br />
                        <p className="mb-1"><strong> Please indicate your consent to be contacted by mobile phone</strong></p>
                        <div className="d-flex flex-row align-items-center">
                            <div className="w-50 d-flex flex-row align-items-center">
                                <label className="mr-2">Applicant 1</label>
                                <div id="mobConsent1" value={this.state.mobConsent1} onClick={this.checkBoxmobConsent1}>
                                    <CheckBox check={(e) => { this.toggleCheckbox('mobConsent1') }} page4={true} />
                                </div>
                            </div>

                            <div className="w-50 d-flex flex-row align-items-center">
                                <label className="mr-2">Applicant 2</label>
                                <div id="mobConsent2" value={this.state.mobConsent2} onClick={this.checkBoxmobConsent2}>
                                    <CheckBox check={(e) => { this.toggleCheckbox('mobConsent2') }} page4={true} />
                                </div>
                            </div>

                        </div>
                        <p>If at any time you change your mind and you wish to amend your direct
                            marketing preferences, you may contact us by writing to FREEPOST
                            F4940, Customer Data Quality (Direct Marketing ), Permanent TSB p.l.c.,
                            56-59 St. Stephen’s Green, Dublin 2, by phone on 1890 500 121 or +353 1
                        212 4101 or go to your local branch.</p>
                    </div>


                    <div className="d-flex flex-column w-50 mr-5">
                        <h2 className="mt-1 font-weight-bold color-primary mb-2">Direct Marketing, Third Party Products</h2>
                        <p>Permanent TSB would like to use your personal data to provide you
                            with information about products, services or special offers (for example
                            rewards, discounts and cashback programmes) from carefully selected
                            third parties. Permanent TSB will never share your personal data with
                    these third parties for marketing purposes.<br />
                            I hereby consent to being contacted for direct marketing of third party
                    products and services using the methods selected across:</p>
                        <div className="d-flex flex-row w-100 my-1">

                            <div className="w-50 d-flex flex-row align-items-center">
                                <label className="mr-2">Applicant 1</label>
                                <div id="consent1" value={this.state.consent1} onClick={this.checkBoxconsent1}>
                                    <CheckBox check={(e) => { this.toggleCheckbox('consent1') }} page4={true} label={true} />
                                </div>

                            </div>

                            <div className="w-50 d-flex flex-row align-items-center">
                                <label className="mr-2">Applicant 2</label>
                                <div id="consent2" value={this.state.consent2} onClick={this.checkBoxconsent2}>
                                    <CheckBox check={(e) => { this.toggleCheckbox('consent2') }} page4={true} label={true} />
                                </div>

                            </div>

                        </div>
                        <p>If at any time you change your mind and you wish to amend your direct
                            marketing preferences, you may contact us by writing to FREEPOST
                            F4940, Customer Data Quality (Direct Marketing ), Permanent TSB
                            p.l.c., 56-59 St. Stephen’s Green, Dublin 2, by phone on 1890 500 121 or
                    +353 1 212 4101 or go to your local branch.</p>
                    </div>
                </div>
                <hr className="divider-dotted" />
                <h1 className="mb-4 font-light color-primary">Important Notices</h1>

                <h2 className="mt-1 font-weight-bold color-primary mb-2">Permanent TSB Credit Checking and Reporting</h2>
                <p>Under the Central Bank’s Consumer Protection Code we are not permitted to offer you a credit product that you
                    cannot afford. Therefore, in
                    advance, of granting you a credit product of any type, we will check your credit rating against the Central
                    Credit Register and the Irish Credit
            Bureau. This information supports a full and accurate assessment of your ability to repay.</p>
                <p>In addition, we are required by law to ensure that the Central Credit Register is kept up to date and we
                    report personal and credit information
                    to the Central Credit Register. We also report credit facilities to the Irish Credit Bureau (“ICB”) in the
                    legitimate interests of the Bank and the
                    ICB. Please see the ICB’s data protection notice, which is available at http://www.icb.ie/pdf/Fair
                    Processing Notice.pdf for details of how the
                    ICB will process your personal data, and how you may exercise your rights in respect of your personal data
            held by the ICB.</p>
                <p>Further information in relation to our disclosure of your personal data to the Central Credit Register and
                    the ICB can be found in our Data
            Protection Notice.</p>
                <h2 className="mt-1 font-weight-bold color-primary mb-2">Using your personal data</h2>
                <p>In providing personal banking services to you, we need to process personal data about you. This involves
                    asking you for specific personal
                    data, processing this personal data and storing it for a period of time. An explanation of how your personal
                    data is used in the provision of our
                    services to you, our running of the bank and your rights in relation to your personal data is provided in
                    the summary Data Protection Notice
            included with this pack. </p>
                <p>If you would like a copy of the full Data Protection Notice, please ask a branch staff member, call Open24 on
                    1890 500 121 or view it at
            www.permanenttsb.ie</p>
                <h2 className="mt-1 font-weight-bold color-primary mb-2">Sharing Information with your Broker / Intermediary</h2>

                <p>Permanent TSB will require your consent if you wish Permanent TSB to share personal data in relation to your
                    mortgage with your authorised
                    intermediary. Such information may include interest rate changes, loan completion date or redemption amounts
                    (where you have requested
            this information). Permanent TSB will not share information relating to the conduct of your mortgage. </p>
                <p>I/We hereby consent to Permanent TSB sharing my/our personal information (as described above) in relation to
                    this mortgage with my/our
            mortgage intermediary</p>

                <div className="d-flex flex-row w-75 justify-content-between">
                    <div className="w-60 d-flex flex-row justify-content-between">
                        <label >Signature of first applicant:</label>
                        <input type="text" className="primary-input form-control w-50" />
                    </div>
                    <div className="d-flex flex-row w-25 align-items-center`">
                        <label className="mr-2">Date:</label>
                        {this.getSplitInput(2, 'date')}
                        <p className="mr-1">/</p>
                        {this.getSplitInput(2, 'date')}
                        <p className="mr-1">/</p>
                        {this.getSplitInput(2, 'date')}
                    </div>
                </div>

                <div className="d-flex flex-row w-75 justify-content-between mt-3">
                    <div className="w-60 d-flex flex-row justify-content-between">
                        <label >Signature of second applicant:</label>
                        <input type="text" className="primary-input form-control w-50" />
                    </div>
                    <div className="d-flex flex-row w-25 align-items-center">
                        <label className="mr-2">Date:</label>
                        {this.getSplitInput(2, 'date')}
                        <p className="mr-1">/</p>
                        {this.getSplitInput(2, 'date')}
                        <p className="mr-1">/</p>
                        {this.getSplitInput(2, 'date')}
                    </div>
                </div>
                <br />
                <p><strong>Please note:</strong> You may withdraw your consent at any time. Your consent to share this
                    personal
                    information is not required for the application
            of this mortgage product.</p>

                <p className="text-right mt-5">BMK3069 (Rev07/18)</p>
            </div>

        );
    }
}
export default Page4;
