import styled from "styled-components"
import { Button } from '@mui/material'
import React, {useState, useEffect} from 'react'
import Switch from '@mui/material/Switch'

function Scripts() {
const [color, setColor] = useState("white");
useEffect(()=>{
  document.body.style.backgroundColor= color;

})
  return (
    <>
    <Button onClick={()=>{setColor("yellow")}}>Zmiana koloru tła</Button>
    <Switch onClick={()=>{setColor("grey")}}/>
    </>
  )
}
const Span = styled.button`
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
font-size: 23px;
margin-top:40px;
`
export default Scripts

