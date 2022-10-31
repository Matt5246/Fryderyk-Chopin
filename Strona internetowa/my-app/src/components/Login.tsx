import React from 'react'
import styled from "styled-components"
import './styles.css'
import {useState, useRef, useEffect} from "react";

function Login() {
    const [name, setname] = useState<string>('')
    const [showText, setShowText] = useState<boolean>(false)
    const inputRef = useRef()
    function onSubmit(){
        //preventDefault()
        //const value = inputRef.current.value
        
        
    }
    let onChange = (event: React.ChangeEvent<HTMLInputElement>)=>{
        const newValue =event.target.value;
        setname(newValue);
        
        
        
    }
    useEffect(()=>{
        if(name===''){
            setShowText(false);
        }else{
            setShowText(true);
        }
    })
  return (
    <Form onSubmit={onSubmit}>
        <table className="form_tab">
            <label>Login:</label>
            <tr>
                <td><Input name="name" type="text" value={name} onChange={onChange}></Input></td>
            </tr>
            hasło:
            <tr>
                <td><Input type="text" ></Input></td>
            </tr>
            
            <tr>
                <td><button type="submit" >Sign in</button></td>
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
height: 1000px;
`
const Input = styled.input`
margin:5px;

`
const Select = styled.select`
min-width: 150px;

`

export default Login;