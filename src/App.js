import React from 'react';
import './App.css';
import Sample from './components/Sample';
import Sample2 from './components/Sample2';
import PureComponent from './components/PureComponent';
import './components/Style.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1 className='hoc'>Higher Order Component</h1>
        <hr/>
        <div className='content1'>
          <h3>A higher-order component (HOC) is an advanced technique in React for reusing component logic. HOCs are not part of the React API, per se. They are a pattern that emerges from React’s compositional nature.</h3>
          <h3>Concretely, a higher-order component is a function that takes a component and returns a new component.</h3>
          <pre style={{color: "purple", fontSize: "1.5rem"}}>const EnhancedComponent = higherOrderComponent(WrappedComponent);</pre>
          <p>Whereas a component transforms props into UI, a higher-order component transforms a component into another component.</p>
          <p>HOCs are common in third-party React libraries, such as Redux’s connect and Relay’s createFragmentContainer.</p>
        </div>
        <h1 className='pc'>Pure Component</h1>
        <div className='content2'>
          <h3>A React component is considered pure if it renders the same output for the same state and props. For this type of class component, React provides the PureComponent base class. Class components that extend the React.PureComponent class are treated as pure components.</h3>
          <p>Pure components have some performance improvements and render optimizations since React implements the "shouldComponentUpdate() "method for them with a shallow comparison for props and state.</p>
        </div>
        <h2>Hello Pure Component </h2>
        <Sample participant="1" />
        <Sample2 participant="2" />
        <PureComponent />
      </div>
    )
  }
}

export default App;