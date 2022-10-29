import React from 'react'
import styled from "styled-components"
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';

function Footer() {
  return (
    <Space>
		<ContactPhoneIcon/>
    	<Text>Kontakt poprzez email: FryderykChopin@gmail.com</Text>
      
    </Space>
  )
}
const Text = styled.div`
	padding-top:3px;
	padding-left:15px;
`
const Space = styled.div`
	height: 25px;
	padding: 15px;
	background-color: #333;
	color: white;
	font-family:Arial;
	margin-top: 20px;
	margin-bottom: 20px;
	justify-content:left;
	display: flex;
	width: 100%;
`

export default Footer