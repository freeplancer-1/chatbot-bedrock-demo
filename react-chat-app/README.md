# React Chat App with AWS Amplify

This is a simple ReactJS chat UI integrated with AWS Amplify. It uses Vite for development.

## Setup

1. Install dependencies:
   ```bash
   npm install
   npm install aws-amplify
   ```

2. Initialize Amplify (follow the prompts):
   ```bash
   npx amplify init
   npx amplify add auth
   npx amplify add api # choose GraphQL or REST
   npx amplify push
   ```
   These commands generate `src/aws-exports.js` automatically and create backend resources.

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open `http://localhost:5173` in your browser.

## Deploy to Amplify Hosting

1. Commit your code to a Git repository (e.g., GitHub).
2. In the AWS Amplify console, connect your repository and follow the steps to set up continuous deployment.

