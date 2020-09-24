import React, { Component } from "react";
import "./App.css";
import { evaluate } from "mathjs";

class App extends Component {
  constructor() {
    super();
    this.state = {
      total: "",
      err: "",
    };
  }

  handleClick = (data) => {
    this.setState({ total: this.state.total + data });
    this.setState({ err: "" });
  };
  handleEquals = () => {
    try {
      this.setState({ total: evaluate(this.state.total) });
    } catch (err) {
      this.setState({ err: "Enter valid input" });
      this.setState({ total: "" });
    }
  };

  render() {
    var error = "";
    if (this.state.err) {
      error = this.state.err;
    }
    return (
      <div className="App">
        <h1>Calculator</h1>
        <div className="wrapper">
          <div className="conatiner">
            <div className="zero" colSpan="4">
              <input type="text" value={this.state.total} />
            </div>
            <table>
              <tbody>
                <tr>
                  <td>
                    <button onClick={() => this.handleClick(1)}>1</button>
                  </td>
                  <td>
                    <button onClick={() => this.handleClick(2)}>2</button>
                  </td>
                  <td>
                    <button onClick={() => this.handleClick(3)}>3</button>
                  </td>
                  <td>
                    <button onClick={() => this.handleClick("+")}>+</button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <button onClick={() => this.handleClick(4)}>4</button>
                  </td>
                  <td>
                    <button onClick={() => this.handleClick(5)}>5</button>
                  </td>
                  <td>
                    <button onClick={() => this.handleClick(6)}>6</button>
                  </td>
                  <td>
                    <button onClick={() => this.handleClick("-")}>-</button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <button onClick={() => this.handleClick(7)}>7</button>
                  </td>
                  <td>
                    <button onClick={() => this.handleClick(8)}>8</button>
                  </td>
                  <td>
                    <button onClick={() => this.handleClick(9)}>9</button>
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        this.handleClick("*");
                      }}
                    >
                      x
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <button onClick={() => this.handleClick(0)}>0</button>
                  </td>
                  <td>
                    <button onClick={() => this.handleClick(".")}>.</button>
                  </td>
                  <td>
                    <button onClick={this.handleEquals}>=</button>
                  </td>
                  <td>
                    <button onClick={() => this.handleClick("/")}>/</button>
                  </td>
                </tr>
                <tr>
                  <td colSpan="4">
                    <button
                      onClick={() => {
                        this.setState({ total: "" });
                        this.setState({ err: "" });
                      }}
                    >
                      Clear
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            <h3>{error}</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
