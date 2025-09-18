import './App.css';
import EventSource from './eventSource';
// import LongPulling from './longPulling';

function App() {
  return (
    <div className="App">
      {/* <p>LongPulling</p>
      <LongPulling /> */}
      <p>EventSource</p>
      <EventSource />
    </div>
  );
}

export default App;
