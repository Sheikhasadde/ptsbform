import React from "react";
import page5_1 from "../../assets/p5_1.png";
import page5_2 from "../../assets/p5_2.png";
import page5_3 from "../../assets/p5_3.png";
import page5_4 from "../../assets/p5_4.png";

function Page5() {
  return (
    <div className="container-fluid p-5 page5">
      <hr className="divider" />

      <h4 className="text-right color-primary header">
        <span className="font-weight-bold ">permanent tsb</span> Mortgage
        Application for Credit
      </h4>
      <hr className="divider-dotted" />
      <img src={page5_1} width="700"></img>
      <img src={page5_2} width="700"></img>
      <img src={page5_3} width="700"></img>
      <img src={page5_4} width="700"></img>
      <p className="text-right mt-5" style={{fontSize: '9px', position:'relative', bottom: '50px'}}>BMK3069 (Rev07/18)</p>

      {/* 
            <div className="d-flex flex-row w-100 mt-5">
                <div className="d-flex flex-column w-50 mt-5 mr-5">

                    <h2 className="font-weight-bold color-primary mb-2" style={{fontSize: '16px'}}>Important regulatory information concerning
                        Consumer Credit Act 1995 Consumer Credit Act
                        1995, Distance Marketing, Consumer Protection
                        Code 2012 and European Union (Consumer
                        Mortgage Credit Agreements) Regulations 2016.
                </h2>
                    <p className="mb-2">Please note carefully the following information relating to Housing
                    Loans.</p>
                    <p>The following warning applies in the case of fixed rate loans:</p>
                    <h2 className="font-weight-bold black-box" style={{fontSize: '12px', lineHeight:'15px'}} >WARNING: YOU MAY HAVE TO PAY CHARGES IF YOU PAY
                    OFF A FIXED RATE LOAN EARLY.</h2>
                    <p className="font-weight-bold mb-2" style={{fontSize: '10px'}}>Fixed Rate Loans</p>
                    <p className="mb-2" style={{fontSize: '10px'}}>Whenever (i) repayment of a loan in full or in part is made or (ii) with the
                        agreement of permanent tsb, the loan is switched to a variable rate loan or
                        other fixed rate loan, before expiry of the Fixed Rate period (hereinafter called
                        the “Early Termination”), the applicant shall, in addition to all other sums
                        payable as a condition of and at the time of the Early Termination, pay a sum
                        equal to the permanent tsb’s estimate of the loss (if any) arising from the Early
                        Termination. In the calculation of the said loss, permanent tsb shall endeavour
                    to apply in so far as it is fair and practicable.</p>
                    <p className="mb-2" style={{fontSize: '10px'}}>This is how the fee is calculated;</p>
                    <p className="mb-2" style={{fontSize: '10px'}}>C = (I-S) x R x (M-T)/12</p>
                    <p className="mb-2" style={{fontSize: '10px'}}>“C” is the charge to compensate for the loss (if greater than 0),</p>
                    <p className="mb-2" style={{fontSize: '10px'}}>“I” is the swap/market fixed interest rate for the term of the Fixed Rate Period
                    at the date of its commencement,</p>
                    <p className="mb-2" style={{fontSize: '10px'}}>“S” is the swap/market interest rate for the remaining fixed period,</p>
                    <p className="mb-2" style={{fontSize: '10px'}}>“R” is the amount of the Fixed Rate loan balance paid or switched at the date of
                    Early Termination,</p>
                    <p className="mb-2" style={{fontSize: '10px'}}>“M” is the fixed Rate Period (in months) and,</p>
                    <p className="mb-2" style={{fontSize: '10px'}}>“T” is the time expired of the Fixed Rate Period at the date of Early Termination
                    (in months).</p>
                    <p className="mb-2" style={{fontSize: '10px'}}>Here is a worked example; “I” = 5%, “S” = 5%, “R” = €100,000, “M” = 24
                    months, “T” = 12 months.</p>
                    <p className="mb-2" style={{fontSize: '10px'}}>C = (5%-5%) x €100,000 x (24-12) / 12</p>
                    <p className="mb-2" style={{fontSize: '10px'}}>So, C = 2% x €100,000 x 12 / 12</p>
                    <p className="mb-2" style={{fontSize: '10px'}}>C = €2,000</p>
                    <p className="font-weight-bold mb-2" style={{fontSize: '10px'}}>Valuation</p>
                    <p className="mb-2" style={{fontSize: '10px'}}>A valuation must be carried out on the property you intend buying and a
                        valuation fee must be paid. The maximum valuation fee is e150 which includes
                        VAT but excludes valuer’s travel expenses. The valuer’s travel expenses are:
                        1-10 miles = Nil; 11-20 miles = 6; 21-25 miles = 8. Properties incomplete at
                        the time of the original valuation will require, on completion, a final valuation,
                        the fee for which is €65 which includes VAT but excludes travel expenses.
                        Additional loans will require an Opinion of Value (“drive by” valuation) the
                        fee for which is €65 which includes VAT but excludes travel expenses. The
                    valuation fee is refunded if the application is not accepted.</p>
                    <p className="font-weight-bold mb-2" style={{fontSize: '10px'}}>Legal Fees</p>
                    <p className="mb-2" style={{fontSize: '10px'}}>You will need a solicitor to act on your behalf when buying your new home.
                        There’s no set fee for handling the purchase of a property, so check out the
                        professional fees and property registration fees applicable with yours. A bank
                        solicitor is required, for all Resident and Non-Resident Buy-to-Let mortgages,
                        for loan amounts greater than €75,000. The amount payable, for a standard
                        Buy-to-Let mortgage, is €1,000 plus 25% VAT and outlay. This amount is
                        payable by the Borrower(s) and must be paid directly to the banks solicitor
                        prior to the release of the loan cheque. The amount payable by the Borrower(s)
                    is in addition to the borrower(s) solicitor fees.’</p>

                    <p className="font-weight-bold mb-2"  style={{fontSize: '10px'}}>Other</p>
                    <p className="mb-2" style={{fontSize: '10px'}}>Lending criteria, terms & conditions will apply. Mortgage approval is subject to
                        assessment of suitability and affordability. Applicants must be aged 18 or over.
                    Security is required and credit agreement will be secured by a mortgage or</p>
                </div>
                <div className="d-flex flex-column w-50 mt-5">
                    <p className="mb-2" style={{fontSize: '10px'}}>by a right related to residential immovable property. Life and Home Insurance
                        are also required. Subject to current lending criteria and terms and conditions.
                        Please note that if you require your Solicitor to take up your title deeds on
                        Accountable Trust Receipt in the future (unless you are taking out a new
                        mortgage with permanent tsb) there is a fee of €55. There is also a fee of €55
                    for vacating or releasing your mortgage.</p>
                    <p className="font-weight-bold mb-2"style={{fontSize: '10px'}}>Arrears</p>
                    <p className="mb-2" style={{fontSize: '10px'}}>Arrears are any element of a mortgage repayment that have not been made
                        and remain outstanding. Interest at the mortgage rate will be applied to the
                        outstanding balance of your loan which includes any payments missed. This
                    may result in increased cost of credit.</p>
                    <h2 className="font-weight-bold black-box" style={{fontSize: '12px', lineHeight:'15px'}}>WARNING: IF YOU DO NOT KEEP UP YOUR REPAYMENTS
                    YOU MAY LOSE YOUR HOME.</h2>
                    <h2 className="font-weight-bold black-box" style={{fontSize: '12px', lineHeight:'15px'}}>WARNING: IF YOU DO NOT MEET THE REPAYMENTS ON
                        YOUR LOAN, YOUR ACCOUNT WILL GO INTO ARREARS.
                        THIS MAY AFFECT YOUR CREDIT RATING WHICH MAY
                    LIMIT YOUR ABILITY TO ACCESS CREDIT IN THE FUTURE.</h2>
                    <h2 className="font-weight-bold mb-2" style={{fontSize: '12px', lineHeight:'15px'}}>WARNING: YOUR HOME IS AT RISK IF YOU DO NOT KEEP UP
                        PAYMENTS ON A MORTGAGE OR ANY OTHER LOAN SECURED<br/>
                    ON IT.</h2>
                    <p>The following warning applies in the case of variable rate loans:</p>
                    <h2 className="font-weight-bold black-box" style={{fontSize: '12px', lineHeight:'15px'}}>WARNING: THE COST OF YOUR MONTHLY REPAYMENTS
                    MAY INCREASE.</h2>
                    <h2 className="font-weight-bold" style={{fontSize: '12px', lineHeight:'15px'}}>WARNING: THE PAYMENT RATES ON THIS HOUSING LOAN<br/>
                    MAY BE ADJUSTED BY THE LENDER FROM TIME TO TIME.</h2>
                    <h2 className="font-weight-bold black-box" style={{fontSize: '12px', lineHeight:'15px'}}>NOTICE: UNDER THE CREDIT REPORTING ACT 2015
                        LENDERS ARE REQUIRED TO PROVIDE PERSONAL AND
                        CREDIT INFORMATION FOR CREDIT APPLICATIONS<br/>
                        AND CREDIT AGREEMENTS OF €500 AND ABOVE TO <br/>
                        THE CENTRAL CREDIT REGISTER. THIS INFORMATION<br/>
                        WILL BE HELD ON THE CENTRAL CREDIT REGISTER<br/>
                        AND MAY BE USED BY OTHER LENDERS WHEN MAKING<br/>
                        DECISIONS ON YOUR CREDIT APPLICATIONS AND CREDIT<br/>
                    AGREEMENTS.</h2>
                    <i><p className="font-style-italic mb-2">The Central Credit Register is owned and operated by the Central
                    Bank of Ireland.</p>
                    <p className="font-style-italic">For more information see www.centralcreditregister.ie</p>
                </i>
                </div>

            </div>
            */}
    </div>
  );
}

export default Page5;
