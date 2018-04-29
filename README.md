# react-fancy-visa-card
React js implementation for visa credit card  -  Payment Form

How to use it?

```
import React, {Component} from "react";
import "./App.css";
//import {VisaCreditCard} from "react-fancy-component";
import {VisaCreditCard as VisaCard} from "react-fancy-visa-card";


class App extends Component {

    pay = (e, data) => {
        console.log(data);

    };

    render() {
        return (
            <div className="App">
            
                <VisaCard onSubmit={this.pay} />

            </div>
        );
    }
}

export default App;

```


![alt CreditCard Front](https://www.dropbox.com/s/ruo6x2iu3b49yoa/ss2.png?dl=1)

![alt CreditCard Back](https://www.dropbox.com/s/0170o689uqsk552/ss1.png?dl=1)


