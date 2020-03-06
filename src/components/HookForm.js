import React, { useState } from "react";
import styles from "./HookForm.module.css";

const HookForm = props => {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    submitted: false
  });

  const onChangeHandler = event => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value
    });
  };

  const onSubmitHandler = event => {
    event.preventDefault();
    setFormState({
      ...formState,
      submitted: true
    });
  };

  const {
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
    submitted
  } = formState;

  let firstNameMessage;
  if (firstName.length < 2) {
    firstNameMessage = <p>First name must be at least 2 characters</p>;
  }

  let lastNameMessage;
  if (lastName.length < 2) {
    lastNameMessage = <p>Last name must be at least 2 characters</p>;
  }

  let emailMessage;
  if (email.length < 2) {
    emailMessage = <p>Email name must be at least 2 characters</p>;
  }

  let passwordMessage;
  if (password.length < 8) {
    passwordMessage = <p>Password must be at least 8 characters</p>;
  }

  let confirmPasswordMessage;
  if (confirmPassword !== password) {
    confirmPasswordMessage = <p>Passwords must match</p>;
  }

  return (
    <>
      <div className={styles.container}>
        <form onSubmit={onSubmitHandler}>
          <div className={styles.formElements}>
            <label>First Name</label>
            <input type="text" name="firstName" onChange={onChangeHandler} />
            <p className={styles.errorMessage}>{firstNameMessage}</p>
          </div>
          <div className={styles.formElements}>
            <label>Last Name</label>
            <input type="text" name="lastName" onChange={onChangeHandler} />
            <p className={styles.errorMessage}>{lastNameMessage}</p>
          </div>
          <div className={styles.formElements}>
            <label>Email</label>
            <input type="email" name="email" onChange={onChangeHandler} />
            <p className={styles.errorMessage}>{emailMessage}</p>
          </div>
          <div className={styles.formElements}>
            <label>Password</label>
            <input type="password" name="password" onChange={onChangeHandler} />
            <p className={styles.errorMessage}>{passwordMessage}</p>
          </div>
          <div className={styles.formElements}>
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              onChange={onChangeHandler}
            />
            <p className={styles.errorMessage}>{confirmPasswordMessage}</p>
          </div>
          <input className={styles.submitButton} type="submit" />
        </form>
        <div className={styles.formData}>
          <h2>Your Form Data</h2>
          <p>
            <span>First Name:</span> {formState.firstName}
          </p>
          <p>
            <span>Last Name:</span> {formState.lastName}
          </p>
          <p>
            <span>Email:</span> {formState.email}
          </p>
          <p>
            <span>Password:</span> {formState.password}
          </p>
          <p>
            <span>Confirm Password:</span> {formState.confirmPassword}
          </p>
        </div>
      </div>
    </>
  );
};

export default HookForm;
