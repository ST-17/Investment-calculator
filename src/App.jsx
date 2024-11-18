import { useState } from "react";
import Header from "./components/Header";
import Inputs from "./components/Inputs";
import Results from "./components/Results";
import { calculateInvestmentResults } from "./util/investment";

const INITIAL_INPUT_VALUES = {
  initialInvestment: 10000,
  annualInvestment: 300,
  expectedReturn: 5.5,
  duration: 12,
};

function App() {
  const [inputValues, setInputValues] = useState(INITIAL_INPUT_VALUES);

  const handleChangeInputValues = (input, value) => {
    setInputValues((prevInputValues) => {
      return { ...prevInputValues, [input]: +value };
    });
  };

  const inputDurationValueIsValid = inputValues.duration > 0;

  return (
    <>
      <Header />
      <main>
        <Inputs
          values={inputValues}
          onInputValuesChange={handleChangeInputValues}
        />
        {!inputDurationValueIsValid && <p className="center">Please enter a duration greater than 0.</p>}
        {inputDurationValueIsValid && <Results values={inputValues} />}
      </main>
    </>
  );
}

export default App;
