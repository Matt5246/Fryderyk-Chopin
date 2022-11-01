import React from 'react'
import styled from "styled-components"
import '../styles.css'
import {useState, useEffect} from "react";

function Login() {
    const [name, setname] = useState<string>('')
    const [showText, setShowText] = useState<boolean>(false)
    
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
    <Content>
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
    </Content>
    
  )
}
const Form = styled.form`
margin-top: 20%;

margin-bottom: 25%;
`
const Input = styled.input`
margin:5px;

`
const Select = styled.select`
min-width: 150px;

`
const Content = styled.div`


`
export default Login;