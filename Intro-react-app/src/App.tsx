import React from 'react';
import Alert from './components/Alert';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Alert Demo</h1>
        <Alert message="You have been ALERTED!" />
      </header>
    </div>
  );
}

export default App;
