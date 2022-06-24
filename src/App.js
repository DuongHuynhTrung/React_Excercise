import './App.css';
import React from 'react';
import Main from './components/MainComponent';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='App'>
        <Main />
      </div>
    )
  }
}

export default App;
