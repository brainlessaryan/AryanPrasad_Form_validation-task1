import React, { useState } from 'react'

function Validation() {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [phonelError, setPhoneError] = useState(false);


    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    const handleName = (e) => {
        let name = e.target.value;
        if(name.length < 3)
        {
            setNameError(true);
        }else{
            setNameError(false);
        }
        setName(name);
    }


    const handleEmail = (e) =>{
        let email = e.target.value;
        if(!email.match(emailRegex)){
            setEmailError(true);
        }else{
            setEmailError(false);
        }
        setEmail(email);
    }

    const handlePhone = (e) => {
        let phone = e.target.value;
        if(phone.length < 10 || phone.length > 10){
            setPhoneError(true);
        }else{
            setPhoneError(false);
        }
        setPhone(phone);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let name = e.target[0].value;
        if(name.length < 3)
        {
            setNameError(true);
        }else{
            setNameError(false);
        }

        let email = e.target[1].value;
        if(!email.match(emailRegex)){
            setEmailError(true);
        }else{
            setEmailError(false);
        }

        let phone = e.target[2].value;
        if(phone.length < 10 || phone.length > 10){
            setPhoneError(true);
        }else{
            setPhoneError(false);
        }

        if((!name.length < 3) && (email.match(emailRegex)) && (!(phone.length < 10 || phone.length > 10))){
            alert("THE FORM HAS BEEN SUBMITTED SUCCESSFULLY");
            alert("Name: " + e.target[0].value + " Email: " + e.target[1].value + " Mobile No: " + e.target[2].value);
        }
    }
  return (
    <div align='center'>
    <h1> Form validation</h1>
    <form onSubmit={handleSubmit}>
        <label htmlFor=''>Enter Name: </label>
        <input type='text' name='name' onChange={handleName} value={name} required/>
        <br/>
        {nameError ?  <span style={{color:'red'}}>Too short for a name</span> : ""}
        <br/>
        <label htmlFor=''>Enter Email: </label>
        <input type='text' name='email' onChange={handleEmail} value={email} required/>
        <br/>
        {emailError ? <span style={{color:'red'}}>Invalid format</span> : ""}
        <br/>
        <label htmlFor=''>Enter PhoneNo: </label>
        <input type='text' name='phone' onChange={handlePhone} value={phone} required/>
        <br/>
        {phonelError ? <span style={{color:'red'}}>Please use the correct format</span> : ""}
        <br/>
        <input type='submit' value="Submit"></input>
    </form>
    
    </div>
  )
}

export default Validation