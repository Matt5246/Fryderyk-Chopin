import React from 'react'
import styled from "styled-components"
import Section from "./Section"
import Footer from './Footer'


function Home() {
  return (
    <>
    <Section/>
    <Container/>
    <Footer/>
    </>
    
  )
}

export default Home

const Container = styled.div`
    color: grey;

`