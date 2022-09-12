import React from 'react';
import './App.css';
import ClassComp from './components/ClassComp';
import FunctionalComp from './components/FunctionalComp';
import './components/Style.css';

class App extends React.Component {
  render(){
    return(
      <div className='App'>
      <ClassComp />
      <FunctionalComp />
      </div>
    )
  }
}

export default App;
