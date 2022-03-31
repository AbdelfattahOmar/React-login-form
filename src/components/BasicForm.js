import useInput from '../hooks/use-input';

const isValidName = (value) => value.length > 3;
const isValidPassword = (value) => value.length > 8;
const isEmail = (value) => value.includes('@');

const BasicForm = (props) => {
  const {
    value: userNameValue,
    isValid: userNameIsValid,
    hasError: userNameHasError,
    valueChangeHandler: userNameChangeHandler,
    inputBlurHandler: userNameBlurHandler,
    reset: resetuserName,
  } = useInput(isValidName);
  const {
    value: passwordValue,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetpassword,
  } = useInput(isValidPassword);
  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(isEmail);

  let formIsValid = false;

  if (userNameIsValid && passwordIsValid && emailIsValid) {
    formIsValid = true;
  }

  const submitHandler = event => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    console.log('Submitted!');
    console.log(userNameValue, passwordValue, emailValue);

    resetuserName();
    resetpassword();
    resetEmail();
  };

  const userNameClasses = userNameHasError ? 'form-control invalid' : 'form-control';
  const passwordClasses = passwordHasError ? 'form-control invalid' : 'form-control';
  const emailClasses = emailHasError ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={submitHandler}>
      <div className='control-group'>
        <div className={userNameClasses}>
          <label>Username</label>
          <input
            type='text'
            id='name'
            value={userNameValue}
            onChange={userNameChangeHandler}
            onBlur={userNameBlurHandler}
          />
          {userNameHasError && <p className="error-text">Username must be at least 3 characters.</p>}
        </div>
      </div>
      <div className={emailClasses}>
        <label>E-Mail</label>
        <input
          type='email'
          id='name'
          value={emailValue}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailHasError && <p className="error-text">Please enter a valid email address.</p>}
      </div>
      <div className={passwordClasses}>
          <label>Password</label>
          <input
            type='password'
            id='name'
            value={passwordValue}
            onChange={passwordChangeHandler}
            onBlur={passwordBlurHandler}
          />
          {passwordHasError && <p className="error-text">Password must be at least 8 characters.</p>}
        </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Login</button>
      </div>
    </form>
  );
};

export default BasicForm;