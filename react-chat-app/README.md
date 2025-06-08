# React Chat App with AWS Amplify (Errors Demonstration)

This project is a minimal chat UI built with Vite and React. AWS Amplify imports are included but commented out so the app works without any backend.

## Setup

1. Install dependencies:
   ```bash
   npm install
   # optional: npm install aws-amplify
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Open `http://localhost:5173` in your browser.

To enable Amplify later, uncomment the imports and `Amplify.configure` lines in `src/index.js` and the API calls in `src/App.js`.

## Simulated Errors

The code intentionally contains examples of common React mistakes. Each has inline comments explaining the issue.

- **Syntax Error** – see the commented `broken` function in `App.js`.
- **Deprecated Lifecycle Method** – `componentWillMount` in `DeprecatedComponent` shows a console warning.
- **Direct State Mutation** – `messages.push(newMessage)` in `sendMessage` mutates state directly.
- **Missing Key Prop** – `MessageItem` components use the array index as the key.
- **Uninitialized State** – `useState()` without a default value leads to runtime errors when mapping messages.
- **Referencing Undefined Variable** – `console.log(notDefinedVariable)` demonstrates a runtime ReferenceError.
- **Infinite Loop Example** – commented `useEffect` hook updates state on every render.
- **PropTypes Mismatch** – `MessageItem.propTypes` deliberately expects the wrong type.

These snippets are commented or placed so the project still runs, but they illustrate issues commonly encountered during development.

