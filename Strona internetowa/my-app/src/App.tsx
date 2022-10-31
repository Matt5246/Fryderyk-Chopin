import React from 'react';
import './App.css';
import Header from "./components/Header"
import Home from "./components/Home"
import Footer from './components/Footer'
import styled from "styled-components"
import Login from './components/Login'
import {Route, Routes} from "react-router-dom"

function App() {

  return (
  <>
    <Menu>
      <Header/>
    </Menu>
    <Routes>
      <Route path="/"  element={<Home/>}></Route>
      <Route path="/Home" element={<Home/>}></Route>
      <Route path="/Login" element={<Login/>}></Route>
      <Route path="/About" ></Route>
    </Routes>
    
     <Footer/>
  </>
  );
}

export default App;

const Menu = styled.div`
position: sticky;


`

