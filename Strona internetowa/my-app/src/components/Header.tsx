import styled from "styled-components"
import React, {useState} from 'react'
import { Link } from "react-router-dom";
//import ReactDOM from 'react-dom/client';
import '../styles.css'

function Header() {
	const [showDropDown, setShowDropDown] = useState<boolean>(false);
	const [showDropDown1, setShowDropDown1] = useState<boolean>(false);
	const toggleDropDown = ()=> {
		setShowDropDown(!showDropDown);
		if(showDropDown1=== true){
			toggleDropDown1();
		}
	}
	const toggleDropDown1 = ()=> {
		setShowDropDown1(!showDropDown1);
		if(showDropDown=== true){
			toggleDropDown();
		}
		
	}
	const DropDownoff= ()=>{
		setShowDropDown(false);
		setShowDropDown1(false);
	}
	const path = window.location.pathname
return (
	<Navbar>
	<StyledButton style={{backgroundColor:"lightblue", height:49}}>Chopin</StyledButton>
	<Link to={"/"}><StyledButton>Home</StyledButton></Link>
	<StyledButton onClick={toggleDropDown}>Menu{showDropDown &&
		<DropDown onMouseLeave={DropDownoff}>
			<DropDownContent href="#example">Twórczość</DropDownContent>
			<DropDownContent href="#example1">Historia Chopina</DropDownContent>
			<DropDownContent href="#example2">Utwory</DropDownContent>
			<DropDownContent href="#example3">Rozpoczęcie kariery</DropDownContent>
			<DropDownContent href="#example4">Geneaologia</DropDownContent>
			<DropDownContent href="#example5">Znaczenie twórczości</DropDownContent>
			<DropDownContent href="#example6">Międzynarodowy konkurs pianistyczny</DropDownContent>
			<DropDownContent href="#example7">Ochrona prawna</DropDownContent>
			<DropDownContent href="#example8">Pomnik Chopina</DropDownContent>
			<DropDownContent href="#example9">Bibliografia</DropDownContent>
		</DropDown>}
	</StyledButton>
	<StyledButton onClick={toggleDropDown1}>News{showDropDown1 && 
		<DropDown onMouseLeave={DropDownoff}>
			<DropDownContent href="https://www.douglas.pl/productbrand_428731.html?trac=pl.01psh.goo.3915227426.%7Bproduct_id%7D.%7Badgroupid%7D.000000&cpkey=A-Pww7CDJF6uQ3M-sBPx6G7ky_gH59ww9KPENEgkOn6f-qsVgt2Ze5YRK1Q0L7lK&gclid=Cj0KCQjwl8XtBRDAARIsAKfwtxAcVKWkuPy8UnCSblOaMQUVQMxQGf78uLZhZoJ2ZFkrVRi2gcAarH0aAvFvEALw_wcB">Chopin w 2019</DropDownContent>
			<DropDownContent href="http://www.sztukawina.pl/wodka-chopin-rye">Chopin na wieczór</DropDownContent>
		</DropDown>}
	</StyledButton>
	<Link to={"/About"}><StyledButton>About us</StyledButton></Link>
	<Link to={"/Scripts"}><StyledButton>Scripts</StyledButton></Link>
	<RightMenu>
		<StyledInput></StyledInput>
		<StyledButton>Szukaj</StyledButton>
		<Link to={"/Logowanie"}><StyledButton>Logowanie</StyledButton></Link>
	</RightMenu>
	</Navbar>
 	   )
}
const DropDown = styled.div`
	position: absolute;
	background-color: #f9f9f9;
	min-width: 160px;
	box-shadow: 1px 8px 16px 0px rgba(0,0,0,0.2);
	z-index: 1;
	float: left;
	margin-top: 14px;
`
const DropDownContent =styled.a`
	float: none;
	color: black;
	padding: 12px 16px;
	text-decoration: none;
	display: block;
	text-align: left;
`
const Navbar = styled.div`
	
	list-style-type: none;
	color: black ;
	background-color: #333;
	text-align:left;
	text-decoration: none;	
	top: 0;
	bottom: 2;
	margin-top: 0px;
	padding: 0px;
	height: 49px;
`
const RightMenu = styled.div`
	float: right;
`
const StyledButton = styled.button`
	font-size: 16px;  
	border: none;
	outline: none;
	color: white;
	padding: 12px 17px;
	background-color: inherit;
	font-family: inherit;
	margin: 0;
	
`

const StyledInput = styled.input`

`

export default Header

