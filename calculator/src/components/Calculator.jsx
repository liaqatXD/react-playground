import { useState } from "react";
import "../styles.css";
const buttons = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  ".",
  "C",
  "/",
  "*",
  "+",
  "-",
  "00",
  "=",
];

const Calculator = () => {
  const [userInput, setUserInput] = useState("");

  const handleClick = (id) => {
    if (id === "C") return setUserInput("");
    if (id === "=") {
      try {
        const result = eval(userInput);
        setUserInput(result !== undefined ? result.toString() : "");
      } catch (error) {
        setUserInput("Syntax Error");
      }
      return;
    }
    if (userInput === "Syntax Error") return setUserInput(id);
    setUserInput(userInput + id);
  };
  return (
    <div className="container">
      <div className="calculator">
        <input type="text" value={userInput} disabled={true} />
        <div className="buttons-grid">
          {buttons.map((button) => (
            <button
              key={button}
              className={
                button === "/"
                  ? "btn-divide"
                  : button === "C"
                  ? "btn-clear"
                  : button === "="
                  ? "btn-equal"
                  : ""
              }
              onClick={() => handleClick(button)}
            >
              {button}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
