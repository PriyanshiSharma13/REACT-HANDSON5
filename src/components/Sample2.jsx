import React, { Component } from 'react'
import HoC from './HoC';

class Sample2 extends Component {
  render() {
    return (
        <div>
            <h1 className='text2'>Participant: {this.props.participant}</h1>
            <div className='box2'>
                <h3 onMouseOver={this.props.hocHandleCount}>DOE {this.props.hocNum} Counts: {this.props.hocCount}</h3>
            </div>
        </div>
    )
  }
}

export default HoC(Sample2, 20);