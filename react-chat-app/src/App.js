import React, { useState, useEffect } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
// Example GraphQL queries and mutations (these would be created by Amplify codegen)
// They are placeholders here for demonstration purposes.
const listMessages = /* GraphQL */ `query ListMessages {\n  listMessages {\n    items {\n      id\n      user\n      content\n      createdAt\n    }\n  }\n}`;
const createMessage = /* GraphQL */ `mutation CreateMessage($input: CreateMessageInput!) {\n  createMessage(input: $input) {\n    id\n    user\n    content\n    createdAt\n  }\n}`;

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  // Fetch messages when component mounts
  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const result = await API.graphql(graphqlOperation(listMessages));
      const items = result.data.listMessages.items;
      setMessages(items);
    } catch (err) {
      console.error('Error fetching messages', err);
    }
  };

  const sendMessage = async () => {
    if (!input.trim()) return;
    const newMessage = {
      user: 'User1', // In a real app, replace with the authenticated username
      content: input,
      createdAt: new Date().toISOString(),
    };
    try {
      await API.graphql(graphqlOperation(createMessage, { input: newMessage }));
      setMessages([...messages, newMessage]);
      setInput('');
    } catch (err) {
      console.error('Error sending message', err);
    }
  };

  return (
    <div style={{ maxWidth: 600, margin: '0 auto', padding: '1rem' }}>
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
        {messages.map((msg) => (
          <div key={msg.id} style={{ marginBottom: '0.5rem' }}>
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
