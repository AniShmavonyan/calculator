import React, { Component } from 'react';
import './App.css';
import Result from './components/Result';
import KeyPad from './components/KeyPad';


class App extends Component {
  state = {
    result: "",
  }

  onClick = button => {
    if (button === "=") {
      this.calculate();
    }

    else if (button === "C") {
      this.reset();
    }

    else if (button === "CE") {
      this.backspace();
    }
    else if (button === "%") {
      this.setState({
        result: parseFloat(this.state.result) / 100
      });
    }
    else if (button === "+/-") {
      this.setState({
        result: parseInt(this.state.result) * -1
      });
    }
    else if (button === "√") {
      this.setState({
        result: Math.sqrt(this.state.result)
      });
    }
    else if (button === "x²") {
      this.setState({
        result: Math.pow(this.state.result, 2)
      });
    }
  
    else {
      this.setState({
        result: this.state.result + button
      })
    }
  };

  calculate = () => {
    let checkResult = '';
    if (this.state.result.includes('--')) {
      checkResult = this.state.result.replace('--', '+')
    } else {
      checkResult = this.state.result;
    }

    try {
      this.setState({
        result: (eval(checkResult) || "") + ""
      })
    } catch (e) {
      this.setState({
        result: "error"
      })
    }
  };

  reset = () => {
    this.setState({
      result: ""
    })
  };

  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1)
    })
  };

  render() {
    return (
        <div className="calculator">
          <Result result={this.state.result} />
          <KeyPad onClick={this.onClick} />
        </div>
    )
  }
}

export default App;
