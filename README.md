# react-fancy-visa-card
React js implementation for visa credit card  -  Payment Form

How to use it?

```
import React, {Component} from "react";
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

[alt credit card front](https://imgur.com/a/a8LCn0x)
[alt credit card back](https://imgur.com/a/mdU2Qdd)






