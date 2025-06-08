import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// Basic AWS Amplify setup is shown here but commented out so the app runs without it
// import { Amplify, API, graphqlOperation } from 'aws-amplify';
// import awsExports from './aws-exports';
// Amplify.configure(awsExports);

// Example GraphQL queries that would be used with Amplify
// const listMessages = `query ListMessages { listMessages { items { id user content createdAt } } }`;
// const createMessage = `mutation CreateMessage($input: CreateMessageInput!) { createMessage(input: $input) { id user content createdAt } }`;

// Syntax Error Example: missing closing parenthesis
// const broken = () => console.log('This line is missing a )'

function DeprecatedComponent extends React.Component {
  // Deprecated lifecycle method example
  componentWillMount() {
    console.log('componentWillMount is deprecated');
  }
  render() {
    return null;
  }
}

function MessageItem({ msg }) {
  // Anti-pattern: mutating props directly
  // msg.content = msg.content.toUpperCase();
  return (
    <div style={{ marginBottom: '0.5rem' }}>
      <div
        style={{
          display: 'inline-block',
          background: '#e5e5ea',
          borderRadius: '12px',
          padding: '0.5rem 1rem',
        }}
      >
        <strong>{msg.user}</strong>: {msg.content}
      </div>
      <div style={{ fontSize: '0.8rem', color: '#999' }}>
        {new Date(msg.createdAt).toLocaleTimeString()}
      </div>
    </div>
  );
}

// PropTypes warning: wrong type declared on purpose
MessageItem.propTypes = {
  msg: PropTypes.string,
};

function App() {
  // Runtime error: messages is undefined until set
  const [messages, setMessages] = useState();
  const [input, setInput] = useState('');

  // Infinite loop example: uncommenting the next line will cause re-renders forever
  // useEffect(() => { setInput(Math.random()); });

  // Fetch messages (mocked since Amplify code is commented)
  useEffect(() => {
    // fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      // const result = await API.graphql(graphqlOperation(listMessages));
      // setMessages(result.data.listMessages.items);
    } catch (err) {
      console.error('Error fetching messages', err);
    }
  };

  const sendMessage = async () => {
    if (!input.trim()) return;
    const newMessage = {
      user: 'User1',
      content: input,
      createdAt: new Date().toISOString(),
    };
    try {
      // Runtime error example: referencing undefined variable
      console.log(notDefinedVariable);

      // await API.graphql(graphqlOperation(createMessage, { input: newMessage }));

      // Direct state mutation anti-pattern
      messages.push(newMessage);
      setMessages(messages);
      setInput('');
    } catch (err) {
      console.error('Error sending message', err);
    }
  };

  return (
    <div style={{ maxWidth: 600, margin: '0 auto', padding: '1rem' }}>
      <DeprecatedComponent />
      <h2>Chat UI</h2>
      <div
        style={{
          border: '1px solid #ccc',
          padding: '1rem',
          height: '400px',
          overflowY: 'auto',
          marginBottom: '1rem',
        }}
      >
        {/* Missing key prop warning */}
        {messages && messages.map((msg, index) => (
          <MessageItem key={index} msg={msg} />
        ))}
      </div>
      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <input
          style={{ flex: 1 }}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message"
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default App;

