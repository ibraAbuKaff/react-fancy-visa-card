# react-fancy-visa-card
React js implementation for visa credit card  -  Payment Form

Examples:

![https://imgur.com/a/a8LCn0x](./example-pics/ss2.png)
![https://imgur.com/a/mdU2Qdd](./example-pics/ss1.png)

<h1>How to use it ? </h1>

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







