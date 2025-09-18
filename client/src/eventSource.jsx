import { useEffect, useState } from 'react';
import axios from 'axios';

const EventSource = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    subscribe();
  }, []);

  const subscribe = () => {
    const eventSource = new EventSource(`http://localhost:4000/connect`);
    console.log('subscribe', eventSource);
    eventSource.onmessage = function (event) {
      const message = JSON.parse(event.data);
      setMessages((prev) => [message, ...prev]);
    };
  };

  const sendMessage = async () => {
    await axios.post('http://localhost:4000/new-messages', {
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

export default EventSource;
