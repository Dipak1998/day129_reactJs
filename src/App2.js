import React, { Component } from 'react'
// import './App.css';
import Image from './Images/bgImage.jpg';
import FirstPage from './FirstPage';
import Props from './Props.js';
const pTagStyling = {
  color: "red",
  backgroundColor: "aqua",
  padding : "40px 80px",
  margin: "80px"
} 
 
const user = {
  name: "Dipak Garai",
  id:3,
  position: "Fullstack Developer"
}
const message = <div> <p>Hello Everyone, we are learning reactjs</p> </div>
export default class App2 extends Component {
  render() {
    return (
      <div className="app">
        <h1 style={{color:"green",border:"2px solid blue"}}>Welcome to codethunder</h1>
        {message}
        <p style= {pTagStyling}>We are learning React Js ...</p>
        <Props user = {user}/>
      </div>
    )
  }
}
