import React, { useState } from 'react';
import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';
import { CognitoConfig } from './cognitoConfig';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const userPool = new CognitoUser({
        Username: username,
        Pool: new AmazonCognitoIdentity.CognitoUserPool(CognitoConfig),
      });

      const attributeList = [
        new AmazonCognitoIdentity.Attribute({
          Name: 'email',
          Value: email,
        }),
      ];

      const signUpData = {
        Username: username,
        Password: password,
        AttributeList: attributeList,
      };

      await userPool.signUp(signUpData, null, (err, data) => {
        if (err) {
          setErrorMessage(err.message);
          console.error(err);
        } else {
          console.log(data);
          // Handle successful signup (e.g., redirect)
        }
      });
    } catch (error) {
      console.error(error);
      setErrorMessage('An error occurred during signup');
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSignup}>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Signup</button>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      </form>
    </div>
  );
};

export default Signup;
