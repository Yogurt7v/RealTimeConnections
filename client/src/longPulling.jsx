import { useState } from 'react';
import axios from 'axios';

const LongPulling = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const sendMessage = async () => {
    await axios.post('http://localhost:4000/new-message', {
      message: inputValue,
      id: Date.now(),
    });
  };

  return (
    <div className="container">
      <div className="form">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={sendMessage}>Send</button>
      </div>

      <div className="messages">
        {messages.map((mes) => (
          <div key={mes.id}>{mes.message}</div>
        ))}
      </div>
    </div>
  );
};

export default LongPulling;
