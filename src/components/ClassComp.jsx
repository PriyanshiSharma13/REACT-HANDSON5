import React from "react";

class ClassComp extends React.Component {

    constructor(){
        super();
        this.state = {
            isHuman : false,
            isGraduate : false
        };
    }

    ChangeCont = (e) => {
        if(e.target.type === "checkbox"){
            this.setState({[e.target.name] : e.target.checked});
        }
        else{
            this.setState({[e.target.name] : e.target.value});
        }
    }

    render() {
        const {isHuman,isGraduate} = this.state;
        return(
            <form>
                <h1 className="humanText">Are you a Human : {isHuman ? "Yes" : "No"}</h1><br />
                <h1 className="gradText">Are you a Graduate : {isGraduate ? "Yes" : "No"}</h1><br />
                <label htmlFor="" className="label1">
                    Are you a Human ?
                    <input type="checkbox"
                           className="cls"
                           checked={isHuman}
                           name="isHuman"
                           onChange={this.ChangeCont} />
                </label>
                <br /><br />
                <label htmlFor="" className="label1">
                    Are you a Graduate ?
                    <input type="checkbox"
                           className="cls"
                           checked={isGraduate}
                           name="isGraduate"
                           onChange={this.ChangeCont} />
                </label>
            </form>
        )
    }
}

export default ClassComp;