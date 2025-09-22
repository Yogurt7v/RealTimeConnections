import './App.css';
import WebSock from './webSocket';
// import EventSource from './eventSource';
// import LongPulling from './longPulling';

function App() {
  return (
    <div className="App">
      {/* <p>LongPulling</p>
      <LongPulling /> */}
      {/* <p>EventSource</p>
      <EventSource /> */}
      <p>Web Socket</p>
      <WebSock />
    </div>
  );
}

export default App;
