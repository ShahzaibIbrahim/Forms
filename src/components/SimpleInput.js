import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredNameWasTouched, setenteredNameWasTouched] = useState(false);
  const [enteredEmailWasTouched, setEnteredEmailWasTouched] = useState(false);

  const enteredNameValid = enteredName.trim() !== '';
  const enteredEmailValid = enteredEmail.trim() !== '' && enteredEmail.includes('@');

  const nameChangeInputHandler = (event) => {
    setEnteredName(event.target.value);
  };
  
  const emailChangeInputHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const nameBlurHandler = (event) => {
    setenteredNameWasTouched(true);
  }

  const emailBlurHandler = (event) => {
    setEnteredEmailWasTouched(true);
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();
    setenteredNameWasTouched(true);
    setEnteredEmailWasTouched(true);
  };

  const enteredNameInvalid = enteredNameWasTouched && !enteredNameValid;
  const enteredEmailInvalid = enteredEmailWasTouched && !enteredEmailValid;

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
        <label htmlFor="name">Your Email</label>
        <input
          type="text"
          id="email"
          onChange={emailChangeInputHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {enteredEmailInvalid && (
          <p className="error-text">Email is Invalid</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
