import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameValid,
    hasError: nameHasError,
    valueChangeInputHandler: nameChangeInputHandler,
    inputBlurHandler: nameBlurHandler,
    resetValue: nameReset,
  } = useInput((input) => input.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailValid,
    hasError: emailHasError,
    valueChangeInputHandler: emailChangeInputHandler,
    inputBlurHandler: emailBlurHandler,
    resetValue: emailReset,
  } = useInput((input) => input.trim() !== "" && input.includes('@'));

  let formIsValid = enteredNameValid && enteredEmailValid;

  const submitFormHandler = (event) => {
    event.preventDefault();

    console.log(formIsValid);
    if (formIsValid) {
      console.log("Entered Data");
      console.log(enteredName);
      console.log(enteredEmail);

      nameReset();
      emailReset();
    }
  };

  const nameClass = !nameHasError ? "form-control" : "form-control invalid";
  const emailClass = !emailHasError ? "form-control" : "form-control invalid";

  return (
    <form onSubmit={submitFormHandler}>
      <div className="control-group">
        <div className={nameClass}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={nameChangeInputHandler}
            onBlur={nameBlurHandler}
            value={enteredName}
          />
          {nameHasError && <p className="error-text">Invalid Name</p>}
        </div>
        <div className="form-control">
          <label htmlFor="name">Last Name</label>
          <input type="text" id="lastName" />
        </div>
      </div>
      <div className={emailClass}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="email"
          onChange={emailChangeInputHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailHasError && <p className="error-text">Email is Invalid</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
