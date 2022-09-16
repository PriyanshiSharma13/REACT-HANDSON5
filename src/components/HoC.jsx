import React, { Component } from 'react'

const HoC = (People, increment) => {
    class NewPerson extends Component {
        constructor(){
            super();
            this.state = {
                count : 0
            }
        };
    
        handleCount = () => {
            this.setState({count : this.state.count + increment});
        }

        render(){
            return(
                <div>
                    <People
                        hocNum="increased"
                        hocCount={this.state.count}
                        hocHandleCount={this.handleCount}
                        {...this.props}
                     />
                </div>
            )
        }
    }
    return NewPerson;
}

export default HoC;