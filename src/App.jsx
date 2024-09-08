import { useState } from "react";
import idGenerator from "./services/idgenerator";
import Fields from "./components/statics";
import InputButtons from "./components/inputbuttons";
import HistoryList from "./components/historyList";

/**
 * COMPLETE: handle input events
 * Complete: Handle the operation
 * Complete: Show the results
 * Complete: Put every operation into a history
 * Complete: Restore function implementation
 * Complete: Implement Clear history function
 */

export default function App() {
  const [inputs, setInputs] = useState({ a: 30, b: 20 });
  const [result, setResult] = useState(50);
  const [operatorInPlace, setOperatorInPlace] = useState("+");
  const [histories, setHistories] = useState([]);
  const [restoredHistoryId, setRestoredHistoryId] = useState(null);

  const operation = (operator) => {
    const valA = Number(inputs.a);
    const valB = Number(inputs.b);
    const ops = {
      "+": (a, b) => a + b,
      "-": (a, b) => a - b,
      "*": (a, b) => a * b,
      "/": (a, b) => (b !== 0 ? a / b : "Division by 0 error"),
      "%": (a, b) => a % b,
    };

    const newResult = ops[operator](valA, valB);
    if (!isNaN(newResult)) {
      setResult(newResult);

      setOperatorInPlace(operator);
      const history = {
        id: idGenerator.next(),
        a: valA,
        b: valB,
        result: newResult,
        operator: operator,
        createdAt: new Date().toLocaleTimeString(),
      };
      setHistories([history, ...histories]);
    } else {
      alert("invalid operation");
    }
  };

  const inputChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };
  const clearHistory = () => {
    setHistories([]);
  };

  const restoreOperation = (id) => {
    const history = histories.find((history) => history.id === id);
    if (history) {
      setInputs({ a: history.a, b: history.b });
      setResult(history.result);
      setOperatorInPlace(history.operator);
      setRestoredHistoryId(history.id);
    }
  };

  return (
    <div style={{ margin: "2rem 5rem" }}>
      <Fields
        inputs={inputs}
        result={result}
        inputChange={inputChange}
        operatorInPlace={operatorInPlace}
      />
      <InputButtons
        operation={operation}
        histories={histories}
        clearHistory={clearHistory}
      />
      <div>
        <h3>History</h3>
        {histories.length > 0 ? (
          <ul>
            {histories.map((history) => {
              return (
                <HistoryList
                  history={history} key={history.id.value}
                  restoreOperation={restoreOperation}
                  restoredHistoryId={restoredHistoryId}
                />
              );
            })}
          </ul>
        ) : (
          <p>No history found or history got cleared</p>
        )}
      </div>
    </div>
  );
}
