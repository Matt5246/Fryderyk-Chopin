import React from 'react'
import styled from "styled-components"
import '../styles.css'

function About() {
  return (
    <Span>
      Strona została stworzona w oparciu o informacje historyczne zawarte w wiekszosci na wikipedi.
    </Span>
  )
}
const Span = styled.span`
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
font-size: 23px;
margin:20px;
`
export default About
