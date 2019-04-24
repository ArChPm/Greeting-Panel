import React, { Component } from 'react';
import './App.css';
import GreetingPanel from './containers/greetingPanel'
class App extends Component {
  
  render() {
    const { t, i18n } = this.props;
    
    return (
      <div align="center">
        <GreetingPanel t= {t} i18n={i18n}/>
      </div>
    );
  }
}

export default App;
