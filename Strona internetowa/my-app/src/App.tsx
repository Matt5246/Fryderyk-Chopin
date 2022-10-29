import React from 'react';
import './App.css';
import Header from "./components/Header"
import Home from "./components/Home"
import Footer from './components/Footer'
import styled from "styled-components"


function App() {
  return (
  <>
    <Menu>
      <Header/>
    </Menu>
    <Home/>
     <Footer/>
  </>
  );
}

export default App;

const Menu = styled.div`
position: sticky;


`

