import React from 'react'
import styled from "styled-components"
import '../styles.css'
import {useState, useEffect} from "react";

function Login() {
    const [name, setname] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [password1, setPassword1] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [showText, setShowText] = useState<boolean>(false)
    const [showSubmit, setShowSubmit] = useState<boolean>(false)
    const [error, setError] = useState<string>();

    function onSubmit(){
        //preventDefault()
        //const value = inputRef.current.value
    }
    let onChangeName = (event: React.ChangeEvent<HTMLInputElement>)=>{
        const newValue =event.target.value;
        setname(newValue);        
    }
    function isValidEmail(email:string) {
        return /\S+@\S+\.\S+/.test(email);
    }
    useEffect(()=>{
        if(name===''){
            setShowText(false);
        }else{
            setShowText(true);
        }
        if(name.length>=5 && (password.length>=5 && password1.length>=5 && password==password1)){
            if (!isValidEmail(email)) {
                setError('Email is invalid');
              } else {
                setError("");
              }
            setShowSubmit(true);
        }else{
            setShowSubmit(false);
        }
    },[password,name,password1,email])
  return (
    <Form onSubmit={onSubmit}>
        <table className="form_tab">
            <label>Login:</label>
            <tr>
                <td><Input  placeholder="podaj login" name="name" type="text" onChange={onChangeName}></Input></td>
            </tr>
            Password:
            <tr>
                <td><Input  placeholder="podaj haslo" type="password" onChange={(e)=>{setPassword(e.target.value);}}></Input></td>
            </tr>
            <tr>
                <td><Input  placeholder="podaj haslo" type="password" onChange={(e)=>{setPassword1(e.target.value);}}></Input></td>
            </tr>
            <label>Email:</label>
            <tr>
                <td><Input onChange={(e)=>{setEmail(e.target.value);}} placeholder="podaj email" type="email"></Input></td>
            </tr>
            <tr>
                <td>{showSubmit && (<button type="submit" >Sign in</button>) || (name=="" || <Warning>login and password <br/>need to be 5 <br/>character length</Warning>)} </td>
            </tr>
            <tr>
                <td>{error && <Warning style={{color: 'red'}}>{error}</Warning>}</td>
            </tr>
            <tr><p>{showText &&(<p>login: {name}</p>) }</p></tr>
            <tr>
            
                <td></td>
            </tr>
        </table>
    </Form>
    
    
  )
}
const Form = styled.form`
margin-top: 10%;

margin-bottom: 25%;
`
const Input = styled.input`
margin:5px;

`
const Select = styled.select`
min-width: 150px;

`
const Warning = styled.p`
font-size: 12px;
color:red;
`
export default Login;