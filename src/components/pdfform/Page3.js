import React from 'react';


class Page3 extends React.Component {

    getSplitInput = (boxCount, key) => {
        let inputs = [];
        for (let i = 0; i < boxCount; i++) {
            inputs.push(<input className="accountNumber mr-1 primary-input text-center" maxLength="1" key={i}/>);
        }
        return inputs;
    }

    render() {
        return (

            <div className="container-fluid p-5">

                <hr className="divider" />
                <h4 className="text-right color-primary"><span className="font-weight-bold">permanent tsb</span> Mortgage Application
            for Credit</h4>
                <hr className="divider-dotted" />

                <h1 className="mt-3 font-light color-primary lead" style={{fontSize: '20px'}}>Important Declarations</h1>

                <h2 className="mt-3 font-weight-bold color-primary mb-2" style={{fontSize: '16px'}}>1. Declarations regarding Disclosure and
            verification of consumer information</h2>
                <p style={{fontSize: '12px', lineHeight:'15px'}}>I/we declare that the information declared in this form is a fair reflection of any non-bank savings or loan commitments held in my/our
                    name(s). I/we understand that knowingly withheld or falsified information provided may result in a withdrawal of credit. I/we understand
                    that credit cannot be granted if I/we choose not to provide the information or verification as specified by permanent tsb in order to carry out
                an assessment of creditworthiness.</p>

                <h2 className="mt-3 font-weight-bold color-primary mb-2" style={{fontSize: '16px'}}>2. Product Information</h2>
                <h4 className="font-weight-bold mb-2" style={{fontSize: '12px', lineHeight:'15px'}}>I \we confirm we have received the following</h4>
                <ul style={{fontSize: '12px', lineHeight:'15px'}}>
                    <li style={{fontSize: '12px', lineHeight:'20px'}}>Permanent TSB Mortgage Product Brochure</li>
                    <li style={{fontSize: '12px', lineHeight:'20px'}}>Variable Rate Mortgage Policy - Summary Statement</li>
                    <li style={{fontSize: '12px', lineHeight:'20px'}}>Terms & Conditions and Personal and Business Banking Charges booklet</li>
                    <li style={{fontSize: '12px', lineHeight:'20px'}}>Terms of Business</li>
                    <li style={{fontSize: '12px', lineHeight:'20px'}}>Summary Data Protection Notice</li>
                </ul>

                <h2 className="mt-3 font-weight-bold color-primary mb-2" style={{fontSize: '16px'}}>3. Status of advice and suitability assessment</h2>
                <p style={{fontSize: '12px', lineHeight:'15px'}}>For the purposes of European Union (Consumer Mortgage Credit Agreements) Regulations 2016, permanent tsb will
                    not provide advisory service in respect of mortgages. Your Intermediary will assess product suitability and
                    provide you with a Statement of Suitability setting out the reasons why the product(s) or service(s) offered
                    is/are considered suitable, or the most suitable for your particular needs, objectives
            <br />and circumstances.</p>

                <h2 className="mt-3 font-weight-bold color-primary mb-2" style={{fontSize: '16px'}}>4. Signature & Declaration</h2>
                <p className="mb-2" style={{fontSize: '12px', lineHeight:'15px'}}>I/We declare that I/we am/are of full age and I/we hereby make application for an advance with permanent tsb
                    upon mortgage of the property described above. I/we declare that the foregoing statements and particulars
                    and
                    any other information I/we have given to permanent tsb to be strictly true, to the best of my/our knowledge
            and belief.</p>
                <p className="mb-2" style={{fontSize: '12px', lineHeight:'15px'}}>I/We acknowledge that, in order to process this loan application, permanent tsb its servants and agents will
                    hold and process information<br/>
                    in connection with this application (together with such other information supplied to or obtained by
                    permanent tsb separately) and will<br/> 
                    hold and process same for administrative, customer care and service purposes and the statistical purposes of
                    the Department of the
                    Environment, Community and Local Government where required by that Department. permanent tsb may also pass
                    this information to
            other companies within the permanent tsb group in connection with those purposes.</p>
                <p className="mb-2" style={{fontSize: '12px', lineHeight:'15px'}}>I/We further acknowledge that permanent tsb will supply such information as I/we have given to permanent tsb
                    to an insurance company,<br />
            if it is necessary, to obtain a suitable Mortgage Indemnity Policy.</p>
                <p className="mb-2" style={{fontSize: '12px', lineHeight:'15px'}}>I/we have read the section above headed “Valuation” and I/we understand that I/we should not rely on the
                    valuation report in any way in
                    deciding whether or not to purchase the property. I/We understand that if, contrary to the permanent tsb
                    recommendation, I/we do not
                    request or obtain an independent structural survey for my/our own purposes, I/we run the risk that the
                    property may suffer from serious
                    defects which are not mentioned in the Valuation Report and that the Report may be defective, or may be
                    inadequate for my/ our purposes.
                    I/We further understand that should permanent tsb grant a loan, this does not signify an assurance or
                    guarantee that the property is
            soundly constructed and free from defects.</p>
                <p className="mb-2" style={{fontSize: '12px', lineHeight:'15px'}}>I/We note that if I/we are approved by permanent tsb for a loan that at any time before the completion of the
                    mortgage transaction
                    permanent tsb has the right to withdraw or vary the approval subject to applicable law. In the event that
                    I/we wish to change any of the
                    details on the application, the changes will be recorded on the loan approval (this refers to the Credit
                    Agreement) without the necessity of
            re-signing a further application form.</p>
                <p className="mb-2" style={{fontSize: '12px', lineHeight:'15px'}}>I/We have had the necessary time to consider and query the information provided to me in relation to my
            application.</p>
                <p className="mb-2" style={{fontSize: '12px', lineHeight:'15px'}}>I/We hereby acknowledge that permanent tsb may transfer the benefit of the mortgage to any other person for
                    the purposes of
            securitisation or other reason for which permanent tsb believes such a transfer should take place.</p>


                <h2 className="mt-3 font-weight-bold color-primary" style={{fontSize: '16px'}}>**By signing below you are agreeing 1-4 as outlined above**</h2>

               
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
                <p className="text-right mt-5" style={{fontSize: '9px'}}>BMK3069 (Rev07/18)</p>

            </div>
        );
    }
}

export default Page3;
