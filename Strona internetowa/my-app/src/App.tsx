import React from 'react';
import './App.css';
import Header from "./components/Header"
import Home from "./components/Home"
import Footer from './components/Footer'
import styled from "styled-components"
import Login from './components/Login'
import About from './components/About'
import Scripts from './components/Scripts'
import {Route, Routes} from "react-router-dom"
import Navigation from './components/Navigation'

function App() {

  return (
  <>
    <Menu>
      {/* <Navigation/> */}
      <Header/>
    </Menu>
    <Routes>
      <Route path="/"  element={<Home/>}></Route>
      <Route path="/Home" element={<Home/>}></Route>
      <Route path="/Login" element={<Login/>}></Route>
      <Route path="/About" element={<About/>}></Route>
      <Route path="/Scripts" element={<Scripts/>}></Route>
    </Routes>
    
    
  </>
  );
}

export default App;

const Menu = styled.div`
position: sticky;


`

