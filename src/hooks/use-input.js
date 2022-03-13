import { useState } from "react";

const useInput = (validateValue) => {
  const [enteredValue, setenteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const enteredValueValid = validateValue(enteredValue);
  const hasError = isTouched && !enteredValueValid;

  const valueChangeInputHandler = (event) => {
    setenteredValue(event.target.value);
  };

  const inputBlurHandler = (event) => {
    setIsTouched(true);
  }

  const reset = () => {
      setIsTouched(false);
      setenteredValue('');
  }

  return {
      value: enteredValue, 
      isValid: enteredValueValid,
      hasError: hasError,
      valueChangeInputHandler : valueChangeInputHandler,
      inputBlurHandler: inputBlurHandler,
      resetValue: reset
  }
}

export default useInput;