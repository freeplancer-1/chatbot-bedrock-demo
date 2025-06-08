import React from 'react';
import ReactDOM from 'react-dom/client';
// AWS Amplify imports are included but commented out
// import { Amplify } from 'aws-amplify';
// import awsExports from './aws-exports';
import App from './App';

// Amplify.configure(awsExports); // Uncomment when Amplify is set up

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

