import React, { Component } from 'react'
import HoC from './HoC';

class Sample extends Component {
  render() {
    return (
        <div>
            <h1 className='text1'>Participant: {this.props.participant}</h1>
            <div className='box'>
            <h3 onMouseOver={this.props.hocHandleCount}>JOHN {this.props.hocNum} Counts: {this.props.hocCount}</h3>
            </div>
        </div>
    )
  }
}

export default HoC(Sample, 10)