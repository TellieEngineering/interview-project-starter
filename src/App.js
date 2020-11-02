import { useEffect, useState } from 'react';

import logo from './logo.svg';
import './App.css';

function App() {
  const [connected, setConnected] = useState(false);
  useEffect(() => {
    fetch('http://localhost:8080/health').then(() => setConnected(true));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <p>
          {
            connected
            ? 'You are connected to the backend server 🚀'
            : 'You are NOT connected to the backend server ❌'
          }
        </p>
      </header>
    </div>
  );
}

export default App;
