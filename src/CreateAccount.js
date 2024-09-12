import React from 'react';
import './CreateAccount.css'; // Estilos separados

function CreateAccount() {
  return (
    <div className="create-account-container">
      <div className="step-box">
        <h2>Create an Account</h2>
        <ol className="steps-list">
          <li>Go to the registration page.</li>
          <li>Click on "Register".</li>
          <li>Fill in your details (username, email, etc.).</li>
          <li>Agree to the terms and conditions.</li>
          <li>Click the "Create Account" button.</li>
          <li>Check your email for a verification link.</li>
          <li>Click the verification link to activate your account.</li>
          <li>Login with your new account.</li>
        </ol>
        <p>Already have an account? <a href="#login">Login here</a></p>
      </div>
    </div>
  );
}

export default CreateAccount;
