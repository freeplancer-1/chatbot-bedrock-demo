import React from 'react';
import ReactDOM from 'react-dom/client';
import Amplify from 'aws-amplify';
import awsExports from './aws-exports';
import App from './App';

// Configure AWS Amplify using the generated aws-exports.js file
Amplify.configure(awsExports);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
