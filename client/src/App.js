import './App.css';
import Counter from './test';
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
      {/* <p>Web Socket</p>
      <WebSock /> */}
      <Counter />
    </div>
  );
}

export default App;
