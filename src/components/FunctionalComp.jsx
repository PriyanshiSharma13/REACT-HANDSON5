import React,{useState} from "react";

const FunctionalComp = () => {
    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("");

    const [firstNameErr,setFirstNameErr] = useState({});
    const [lastNameErr,setLastNameErr] = useState({});


    const onSubmit = (e) => {
        e.preventDefault();
        const isValid = formValidation();
        if(isValid){
            setFirstName("");
            setLastName("");
        }
    }

    const formValidation = () => {
        const firstNameErr = {};
        const lastNameErr = {};
        let isValid = true;

        if(firstName.trim().length < 5){
            firstNameErr.firstNameShort = "First name is too short";
            isValid = false;
        }

        if(firstName.trim().length > 12){
            firstNameErr.firstNameLong = "First name is too long";
            isValid = false;
        }

        if(!lastName.includes("1,2,3,4,5,6,7,8,9,0")){
            lastNameErr.lastNameWrong = "Last name cannot contain numbers";
            isValid = false;
        }

        setFirstNameErr(firstNameErr);
        setLastNameErr(lastNameErr);
        return isValid;
    }

    return(
        <form onSubmit={onSubmit}>
        <hr />
            <label htmlFor="fname" className="fn">First Name : </label>
            <input type="text"
                   className="des"
                   value={firstName}
                   onChange={(e) => {setFirstName(e.target.value)}}/>
            <br />
            {Object.keys(firstNameErr).map((key)=>{
                return <div style={{color: "white"}}>{firstNameErr[key]}</div>
            })}
            <label htmlFor="lname" className="ln">Last Name : </label>
            <input type="text"
                   className="des"
                   value={lastName}
                   onChange={(e) => {setLastName(e.target.value)}}/>
            <br />
            {Object.keys(lastNameErr).map((key)=>{
                return <div style={{color: "white"}}>{lastNameErr[key]}</div>
            })}
            <button type="submit">Submit</button>
        </form>
    )

}

export default FunctionalComp;