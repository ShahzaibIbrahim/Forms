import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeInputHandler: nameChangeInputHandler,
    inputBlurHandler: nameBlurHandler,
    resetValue: resetName
  } = useInput(value => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeInputHandler: emailChangeInputHandler,
    inputBlurHandler: emailBlurHandler,
    resetValue: resetEmail
  } = useInput(value => value.trim() !== "" && value.includes('@'));

  let formIsValid = enteredEmailIsValid && enteredNameIsValid;

  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log(enteredEmail, enteredName);
    resetName();
    resetEmail();
  };

  const formValidClass = !formIsValid
    ? "form-control"
    : "form-control invalid";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={formValidClass}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeInputHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        {nameInputHasError && (
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
        {emailInputHasError && <p className="error-text">Email is Invalid</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
