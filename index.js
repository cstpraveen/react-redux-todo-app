import React from 'react';
import ReactDOM from 'react-dom';
import Home from './src/components/HomePage'
import logo from './src/logo.svg';
import './src/App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Hello React & Reduct Project</h1>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Home name="Praveen Srinivasan"/>
      </div>
    )
  }
}
ReactDOM.render(
  <App/>,
  document.getElementById('app')
)
