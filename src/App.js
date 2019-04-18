import React, { Component } from 'react';
import './App.css';
import GreetingPanel from './components/greetingPanel'
class App extends Component {
  
  render() {
    const { t, i18n } = this.props;
    
    return (
      <div align="center">
      <GreetingPanel t= {t}/>
      <select onChange={(e) => i18n.changeLanguage(e.target.value)}>
        <option value="en">English</option>
        <option value="es">Spanish</option>
        <option value="bg">Bulgaro</option>
      </select>
      </div>
    );
  }
}

export default App;
