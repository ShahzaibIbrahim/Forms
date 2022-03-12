import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameWasTouched, setenteredNameWasTouched] = useState(false);

  const enteredNameValid = enteredName.trim() !== '';

  const nameChangeInputHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const nameBlurHandler = (event) => {
    setenteredNameWasTouched(true);
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();
    setenteredNameWasTouched(true);
  };

  const enteredNameInvalid = enteredNameWasTouched && !enteredNameValid;

  const nameInputClasses = !enteredNameInvalid
    ? "form-control"
    : "form-control invalid";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeInputHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        {enteredNameInvalid && (
          <p className="error-text">Entered name must not be empty</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
