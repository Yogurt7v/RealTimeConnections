import './App.css';
import Countdown from './test.jsx';
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
      <Countdown initialSeconds={12} />
    </div>
  );
}

export default App;
