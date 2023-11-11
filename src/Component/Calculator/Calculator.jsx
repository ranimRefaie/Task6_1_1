import "./Calculator.css";
import { useState } from "react";
import Container from "react-bootstrap/Container";
const Calculator = () => {
  const [input, setInput] = useState("");

  const handleInput = (e) => {
    setInput(input + e.target.value);
  };

  const calculateResult = () => {
    try {
      setInput(eval(input));
    } catch (error) {
      setInput("Error");
    }
  };

  const clearInput = () => {
    setInput("");
  };
  const deletInput = () => {
    setInput(input.toString().slice(0, -1));
  };

  return (
    <Container className="calculator">
      <div className="form">
        <div>
          <input type="text" placeholder="0" value={input} readOnly />
        </div>
        <div className="buttons">
          <button onClick={clearInput} className="operator">
            C
          </button>
          <button onClick={deletInput} className="operator">
            <i className="delete fa-solid fa-delete-left fa-rotate-180"></i>
          </button>
          <button onClick={handleInput} value="/" className="operator">
            ÷
          </button>
          <button onClick={handleInput} value="*" className="operator">
            x
          </button>

          <button onClick={handleInput} value="7" className="number">
            7
          </button>
          <button onClick={handleInput} value="8" className="number">
            8
          </button>
          <button onClick={handleInput} value="9" className="number">
            9
          </button>
          <button onClick={handleInput} value="-" className="operator">
            -
          </button>
          <button onClick={handleInput} value="4" className="number">
            4
          </button>
          <button onClick={handleInput} value="5" className="number">
            5
          </button>
          <button onClick={handleInput} value="6" className="number">
            6
          </button>
          <button onClick={handleInput} value="+" className="operator">
            +
          </button>
          <button onClick={handleInput} value="1" className="number">
            1
          </button>
          <button onClick={handleInput} value="2" className="number">
            2
          </button>
          <button onClick={handleInput} value="3" className="number">
            3
          </button>

          <button onClick={calculateResult} className="equal">
            =
          </button>

          <button onClick={handleInput} value="0" className="zero number">
            0
          </button>

          <button onClick={handleInput} value="." className="number">
            .
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Calculator;
