import React from "react";
import "./styles/index.css";
import VisaCardLogo from "./svg/CreditCardVisaLogo.svg";
import _ from "lodash";

class VisaCreditCard extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

            creditCardNumber: "",
            creditCardHolderName: "",
            creditCardExpMonth: "",
            creditCardExpYear: "",
            creditCardCvv: "",
            creditCardYearRangeArr: [],
            shouldFlipCreditCardOnCvv: false,

            //Props
            frontCardColor: props.frontCardColor || "",
            backCardColor: props.backCardColor || "",
            submitBtnColor: props.submitBtnColor || "",
            submitBtnTxt : props.submitBtnTxt || "",
        };

        //event handlers
        this.cardNumberOnChange = this.cardNumberOnChange.bind(this);
        this.cardHolderNameOnChange = this.cardHolderNameOnChange.bind(this);
        this.monthOnChange = this.monthOnChange.bind(this);
        this.yearOnChange = this.yearOnChange.bind(this);
        this.cvvOnChange = this.cvvOnChange.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleSubmit = (eventOfSubmission) => {
        eventOfSubmission.stopPropagation();
        eventOfSubmission.preventDefault();

        let creditCardData = {
            creditCardNumber: this.state.creditCardNumber,
            creditCardHolderName: this.state.creditCardHolderName,
            creditCardExpMonth: this.state.creditCardExpMonth,
            creditCardExpYear: this.state.creditCardExpYear,
            creditCardCvv: this.state.creditCardCvv,
        };

        _.invoke(this.props, 'onSubmit', eventOfSubmission, creditCardData);


    };

    componentWillMount = () => {
        this.getExpYearRange();
    };


    /**
     *get Exp Year Range : example: current year is 2018, so it will add 10 years as a range [2018,....,2028]
     */
    getExpYearRange = () => {
        let currentYear = new Date().getUTCFullYear();
        let yearRangeArr = [];

        yearRangeArr.push(currentYear);
        for (let i = 1; i <= 10; i++) {
            yearRangeArr[i] = currentYear + i;
        }

        this.setState({
            creditCardYearRangeArr: yearRangeArr,
        });

    };


    cardNumberOnChange = (eventCreditCardNumberChangeEvent) => {
        let creditCardNumber = eventCreditCardNumberChangeEvent.target.value || "";

        this.setState({creditCardNumber});
    };


    cardHolderNameOnChange = (eventCreditCardHolderNameChangeEvent) => {
        let creditCardHolderName = eventCreditCardHolderNameChangeEvent.target.value || "";

        this.setState({creditCardHolderName});
    };

    monthOnChange = (eventCreditCardMonthChangeEvent) => {
        let creditCardExpMonth = eventCreditCardMonthChangeEvent.target.value || "";

        this.setState({creditCardExpMonth});
    };

    yearOnChange = (eventCreditCardYearChangeEvent) => {
        let creditCardExpYear = eventCreditCardYearChangeEvent.target.value || "";

        this.setState({creditCardExpYear});
    };

    cvvOnChange = (eventCreditCardCvvChangeEvent) => {
        let creditCardCvv = eventCreditCardCvvChangeEvent.target.value || "";

        let shouldFlipCreditCardOnCvv = true;
        this.setState({creditCardCvv, shouldFlipCreditCardOnCvv});

    };

    cvvOnBlur = (eventCreditCardCvvBlurEvent) => {
        let shouldFlipCreditCardOnCvv = false;
        this.setState({shouldFlipCreditCardOnCvv});

    };


    render() {
        return (

            <div className="checkout react-fancy-visa-card">
                <div className={this.state.shouldFlipCreditCardOnCvv ? "credit-card-box hover" : "credit-card-box" }>
                    <div className="flip">
                        <div className="front" style={{background: this.state.frontCardColor}}>
                            <div className="chip"></div>

                            <div className="logo">
                                <VisaCardLogo />
                            </div>

                            <div className="number">
                                {this.state.creditCardNumber.replace(/(\d{4})/g, '$1 ').replace(/(^\s+|\s+$)/, '')}
                            </div>

                            <div className="card-holder">
                                <label>Card holder</label>
                                <div>
                                    {this.state.creditCardHolderName}
                                </div>
                            </div>
                            <div className="card-expiration-date">
                                <label>Expires</label>
                                <div>
                                    {this.state.creditCardExpMonth}/{this.state.creditCardExpYear.slice(-2)}
                                </div>
                            </div>
                        </div>
                        <div className="back" style={{background: this.state.backCardColor}}>
                            <div className="strip"></div>
                            <div className="logo">


                                <VisaCardLogo/>


                            </div>
                            <div className="ccv">
                                <label>CCV</label>
                                <div>
                                    {this.state.creditCardCvv}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <form className="form" autoComplete="off" noValidate onSubmitCapture={this.handleSubmit}>
                    <fieldset>
                        <label htmlFor="card-number">Card Number</label>
                        <input onChange={this.cardNumberOnChange} type="text" id="card-number" className="input-cart-number" maxLength="16"/>

                    </fieldset>
                    <fieldset>
                        <label htmlFor="card-holder">Card holder</label>
                        <input onChange={this.cardHolderNameOnChange} type="text" id="card-holder"/>
                    </fieldset>
                    <fieldset className="fieldset-expiration">
                        <label className="expiration" htmlFor="card-expiration-month">Expiration Month / Year</label>
                        <div className="select">
                            <select onChange={this.monthOnChange} id="card-expiration-month">
                                <option></option>
                                <option>01</option>
                                <option>02</option>
                                <option>03</option>
                                <option>04</option>
                                <option>05</option>
                                <option>06</option>
                                <option>07</option>
                                <option>08</option>
                                <option>09</option>
                                <option>10</option>
                                <option>11</option>
                                <option>12</option>
                            </select>
                        </div>
                        <div className="select">
                            <select onChange={this.yearOnChange} id="card-expiration-year">
                                <option key={0}></option>
                                {this.state.creditCardYearRangeArr.map((year, index) => {
                                    return (<option key={index}>{year}</option>);
                                })}
                            </select>
                        </div>
                    </fieldset>
                    <fieldset className="fieldset-ccv">
                        <label htmlFor="card-ccv">CCV</label>
                        <input onChange={this.cvvOnChange} onBlur={this.cvvOnBlur} type="text" id="card-ccv" maxLength="3"/>
                    </fieldset>
                    <button className="btn" style={{background: this.state.submitBtnColor}}><i className="fa fa-lock"></i>{(this.state.submitBtnTxt!=="") ? this.state.submitBtnTxt   : 'Pay now'}</button>
                </form>
            </div>

        );
    }

}
export {VisaCreditCard};