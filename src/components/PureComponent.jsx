import React from 'react'

class PureComponent extends React.PureComponent {
    constructor(){
        super();
        this.state = {
            num: 0
        }
    }

    updateNum = () => {
        this.setState({num:1})
    }

    render() {
        console.log("See I am Pure Component");
    return (
      <div className='btnBox'>
        <h2 className='numText'>Number is: {this.state.num}</h2>
        <button className='btn' onClick={() => this.updateNum()}>Change Count</button>
      </div>
    )
  }
}

export default PureComponent;