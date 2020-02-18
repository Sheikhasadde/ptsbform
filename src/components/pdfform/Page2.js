import React from 'react';

import CheckBox from './CheckBox';

class Page2 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            checkLoan: true,
            checkSavings: true,
            checkPrevLoan: true,
            checkOthercommit: true,
            checkFuture: true,
            futureChanges: this.props.form.declarations.futureChanges,
            creditCommitments: this.props.form.creditCommitments,
            savingsAccounts: this.props.form.savingsAccounts,
        }
    }

    getSplitInput = (boxCount, key) => {

        let inputs = [];

        for (let i = 0; i < boxCount; i++) {
            const classes = `accountNumber mr-${i === 6 && key === 'accountNumber' ? 4 : 1} primary-input text-center`;
            inputs.push(<input className={classes} maxLength="1" key={i} />);
        }

        return inputs;
    }

    inputChange = (event, index, key = null, subkey = null, keyToUpdate = null) => {
        if (key) {
            this.state[key][subkey][keyToUpdate][index] = event.target.value;
            this.setState({
                ...this.state
            });
        } else {
            this.setState({
                [event.target.id]: event.target.value
            });
        }

        this.props.form.additionalProperties[0].accNumber = this.state.accountNumber
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

                <h2 className="mt-1 font-weight-bold color-primary">Responsible Lending – Our Approach</h2>
                <p className="mb-0">Whether you are borrowing by way of Term Loan to fund that special purchase, looking for a Mortgage to assist
                    in the purchase of a
                    property, or would like to avail of an overdraft or credit card facility, we have a responsibility to you to
                    act as a prudent and responsible
                    lender. That means that we will be open and honest with you in the manner in which we promote and offer our
                    products. We will provide
                    clear information on the cost of your borrowing and we will provide sufficient details in relation to fees,
                    charges, and terms and conditions
            to enable you make an informed decision before entering into the transaction. <br />
                    Before advancing any facility, an assessment of your ability to meet the required repayments will be
                    completed and any advance will be
                    limited to the amount we believe will ensure you can meet repayments comfortably while still meeting other
                    essential financial and lifestyle
            commitments. <br />
                    To assist us in this regard it is important that you provide us with a complete record of your financial
                    affairs, particularly in relation to any
                    non-bank commitments. It is therefore important that you complete the following brief questionnaire
                    carefully, as the information will be
            used to determine the appropriateness of our product offering to you.</p>

                <div className="d-flex flex-column">

                    <div className="d-flex flex-row justify-content-between align-items-center">
                        <div className="w-60"></div>
                        <div className="w-40 d-flex justify-content-end">
                            <div className="input-group mb-3 radio-group d-flex justify-content-end mr-3">
                                <label className="mr-4">Yes</label>
                                <label className="mr-3">No</label>
                            </div>
                        </div>
                    </div>

                    <div className="d-flex flex-row justify-content-between align-items-center">
                        <div className="w-60">
                            <label>a) Do you or your spouse / partner have any savings or shares in a Credit Union?</label>
                        </div>
                        <div className="w-40 d-flex justify-content-end">
                            <div id="checkSavings" value={this.state.checkSavings} onClick={this.checkBoxSavings}>
                                <CheckBox check={(e) => { this.toggleCheckbox('checkSavings') }} />
                            </div>
                        </div>
                    </div>

                    <div className="d-flex flex-row justify-content-between align-items-center mt-1">
                        <div className="w-60">
                            <label>b) Do you or your spouse / partner currently hold loan account(s) in a Credit Union?</label>
                        </div>
                        <div className="w-40 d-flex justify-content-end">
                            <div id="checkLoan" value={this.state.checkLoan} onClick={this.checkBoxLoan}>
                                <CheckBox check={(e) => { this.toggleCheckbox('checkLoan') }} />
                            </div>
                        </div>
                    </div>

                    <div className="d-flex flex-row justify-content-between align-items-center mt-1">
                        <div className="w-60">
                            <label>c) Have you or your spouse / partner previously held loan account(s) with a Credit
                        Union?</label>
                        </div>
                        <div className="w-40 d-flex justify-content-end">
                            <div id="checkPrevLoan" value={this.state.checkPrevLoan} onClick={this.checkBoxPrevLoan}>
                                <CheckBox check={(e) => { this.toggleCheckbox('checkPreviousLoan') }} />
                            </div>
                        </div>
                    </div>

                    <div className="d-flex flex-row justify-content-between align-items-center mt-1">
                        <div className="w-60">
                            <label>d) Do you or your spouse / partner have any other Non-Bank repayment commitments? <br />
                                <span>&nbsp;&nbsp;&nbsp;&nbsp;(for example - Occupational Loan Scheme, Money Lender, Family Member</span></label>
                        </div>
                        <div className="w-40 d-flex justify-content-end mt-n2">
                            <div id="checkOtherCommit" value={this.state.checkOthercommit} onClick={this.checkBoxOtherCommit}>
                                <CheckBox check={(e) => { this.toggleCheckbox('checkOtherCommit') }} />
                            </div>
                        </div>
                    </div>

                </div>

                <p className="mt-1">Note : If the answer to any of (a) to (d) above if “Yes” , please provide full details of each facility in
            the box provided below.</p>

                <table className="table-sm">
                    <tbody>
                        <tr className="border-1">
                            <th className="border-right-1">Name of Credit Union / Other Lender</th>
                            <th className="border-right-1">Savings Balance</th>
                            <th className="border-right-1">Loan Balance</th>
                            <th>Monthly Commitment</th>
                        </tr>

                        <tr className="border-left-1 border-right-1 border-bottom-1">
                            <td className="border-right-1">
                                <div className="input-group">
                                    <input type="text" className="form-control primary-input border-0" onChange={(e) => {
                                        this.inputChange(e, 'O')
                                    }} value={this.state['creditCommitments']['loanOrOverdraftCosts'][0]['lenderName']} />
                                </div>
                            </td>

                            <td className="border-right-1">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text primary-input border-0 input-placeholder">€</span>
                                    </div>
                                    <input type="text" className="form-control primary-input border-0" value={this.state['savingsAccounts'][0]['currentBal']} onChange={(e) => {
                                        this.inputChange(e, '0')
                                    }} />
                                </div>
                            </td>


                            <td className="border-right-1">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text primary-input border-0 input-placeholder">€</span>
                                    </div>
                                    <input type="text" className="form-control primary-input border-0" value={this.state['creditCommitments']['loanOrOverdraftCosts'][0]['maxOutstandingBal']} onChange={(e) => {
                                        this.inputChange(e, '0')
                                    }} />
                                </div>
                            </td>

                            <td>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text primary-input border-0 input-placeholder">€</span>
                                    </div>
                                    <input type="text" className="form-control primary-input border-0" value={this.state['creditCommitments']['loanOrOverdraftCosts'][0]['monthlyRepayments']} onChange={(e) => {
                                        this.inputChange(e, '0')
                                    }} />
                                </div>
                            </td>
                        </tr>

                        <tr className="border-left-1 border-right-1 border-bottom-1">
                            <td className="border-right-1">
                                <div className="input-group">
                                    <input type="text" className="form-control primary-input border-0" onChange={(e) => {
                                        this.inputChange(e, 'O')
                                    }} value={this.state['creditCommitments']['loanOrOverdraftCosts'][1]['lenderName']} />
                                </div>
                            </td>

                            <td className="border-right-1">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text primary-input border-0 input-placeholder">€</span>
                                    </div>
                                    <input type="text" className="form-control primary-input border-0" value={this.state['savingsAccounts'][1]['currentBal']} onChange={(e) => {
                                        this.inputChange(e, '0')
                                    }} />
                                </div>
                            </td>


                            <td className="border-right-1">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text primary-input border-0 input-placeholder">€</span>
                                    </div>
                                    <input type="text" className="form-control primary-input border-0" value={this.state['creditCommitments']['loanOrOverdraftCosts'][1]['maxOutstandingBal']} onChange={(e) => {
                                        this.inputChange(e, '0')
                                    }} />
                                </div>
                            </td>

                            <td>

                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text primary-input border-0 input-placeholder">€</span>
                                    </div>
                                    <input type="text" className="form-control primary-input border-0" value={this.state['creditCommitments']['loanOrOverdraftCosts'][1]['monthlyRepayments']} onChange={(e) => {
                                        this.inputChange(e, '0')
                                    }} />
                                </div>
                            </td>
                        </tr>

                        <tr className="border-left-1 border-right-1 border-bottom-1">
                            <td className="border-right-1">
                                <div className="input-group">
                                    <input type="text" className="form-control primary-input border-0" onChange={(e) => {
                                        this.inputChange(e, 'O')
                                    }} value={this.state['creditCommitments']['loanOrOverdraftCosts'][1]['lenderName']} />
                                </div>
                            </td>

                            <td className="border-right-1">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text primary-input border-0 input-placeholder">€</span>
                                    </div>
                                    <input type="text" className="form-control primary-input border-0" value={this.state['savingsAccounts'][0]['currentBal']} onChange={(e) => {
                                        this.inputChange(e, '0')
                                    }} />
                                </div>
                            </td>


                            <td className="border-right-1">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text primary-input border-0 input-placeholder">€</span>
                                    </div>
                                    <input type="text" className="form-control primary-input border-0" value={this.state['creditCommitments']['loanOrOverdraftCosts'][0]['maxOutstandingBal']} onChange={(e) => {
                                        this.inputChange(e, '0')
                                    }} />
                                </div>
                            </td>

                            <td>

                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text primary-input border-0 input-placeholder">€</span>
                                    </div>
                                    <input type="text" className="form-control primary-input border-0" value={this.state['creditCommitments']['loanOrOverdraftCosts'][0]['monthlyRepayments']} onChange={(e) => {
                                        this.inputChange(e, '0')
                                    }} />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>


                <h2 className="mt-2 font-weight-bold color-primary">Known Future Changes in your Circumstances</h2>

                <div className="d-flex flex-row align-items-center">
                    <p className="w-90">
                        Are you aware of any possible changes to your future circumstances that may affect your ability to meet
                        your repayments on this facility?
                    </p>

                    <div className="justify-content-end w-10 d-flex flex-row pl-2">
                        <div id="checkFuture" value={this.state.checkFuture} onClick={this.checkBoxFuture}>
                            <CheckBox label="true" reducedMargin="true" check={(e) => { this.toggleCheckbox('checkFuture') }} />
                        </div>
                    </div>
                </div>

                <p>
                    If yes, please give details:
                </p>

                <textarea name="" className="primary-input w-100" id="futureChanges" value={this.state.futureChanges} onChange={this.inputChange}></textarea>

                <h2 className="mt-2 font-weight-bold color-primary">Customer Consent - Special Category Data - Health Related
            Information (If Provided) </h2>

                <p>I/We have provided specific health-related information in the form above which <u>I/We feel is relevant to the
            application for this product.</u> </p>
                <p>I/We understand that Permanent TSB will only use this information in the decision process for my/our mortgage
        </p>

                <p>I/We understand that Permanent TSB will retain this information as part of the record of this decision as
            Permanent TSB is obliged to do under the Consumer Protection Code.</p>

                <p>I/We hereby consent to Permanent TSB using my/our personal health information in the decision process.</p>


                <div className="d-flex flex-row w-80 justify-content-between mt-3">
                    <div className="w-70 d-flex flex-row justify-content-between align-items-center">
                        <label className="w-40">Signature of first applicant:</label>
                        <input type="text" className="primary-input form-control w-60" />
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

                <div className="d-flex flex-row w-80 justify-content-between mt-3">
                    <div className="w-70 d-flex flex-row justify-content-between align-items-center">
                        <label className="w-40">Signature of second applicant:</label>
                        <input type="text" className="primary-input form-control w-60" />
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

                <h3 className="font-weight-bold mt-3"><i className="special-note">* Only applicable where health-related personal data is disclosed.*</i>
                </h3>

                <h2 className="mt-2 font-weight-bold color-primary">Consent under the Consumer Credit Act 1995</h2>

                <p>Under the Consumer Credit Act 1995 a customer’s consent is required if the customer wishes permanent tsb to
                    be able to telephone
                    him/her at his/her place of employment/business in connection with a Credit Agreement. From time to time
                    permanent tsb may need to
                    contact you during working hours in connection with the Account. Should you wish to give your consent you
            should sign this part.</p>

                <p className="mt-1">I/we hereby consent to permanent tsb contacting me/us by telephone at my/our place of employment/business.
        </p>

                <div className="d-flex flex-row w-80 justify-content-between mt-3">
                    <div className="w-70 d-flex flex-row justify-content-between align-items-center">
                        <label className="w-40" style={{fontSize: '12px'}}>Signature of first applicant:</label>
                        <input type="text" className="primary-input form-control w-60" />
                    </div>
                    <div className="d-flex flex-row w-25 align-items-center">
                        <label className="mr-2" style={{fontSize: '12px'}}>Date:</label>
                        {this.getSplitInput(2, 'date')}
                        <p className="mr-1">/</p>
                        {this.getSplitInput(2, 'date')}
                        <p className="mr-1">/</p>
                        {this.getSplitInput(2, 'date')}
                    </div>
                </div>

                <div className="d-flex flex-row w-80 justify-content-between mt-3">
                    <div className="w-70 d-flex flex-row justify-content-between">
                        <label className="w-40" style={{fontSize: '12px'}}>Signature of second applicant:</label>
                        <input type="text" className="primary-input form-control w-60" />
                    </div>
                    <div className="d-flex flex-row w-25 align-items-center">
                        <label className="mr-2" style={{fontSize: '12px'}}>Date:</label>
                        {this.getSplitInput(2, 'date')}
                        <p className="mr-1">/</p>
                        {this.getSplitInput(2, 'date')}
                        <p className="mr-1">/</p>
                        {this.getSplitInput(2, 'date')}
                    </div>
                </div>

                <p className="text-right mt-2">BMK3069 (Rev07/18)</p>

            </div>

        );
    }
}

export default Page2;
