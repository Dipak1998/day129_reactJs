import React, { Component } from 'react'
// import './App.css';
import Image from './Images/bgImage.jpg';
import FirstPage from './FirstPage';
const pTagStyling = {
  color: "red",
  backgroundColor: "aqua",
  padding : "40px 80px",
  margin: "80px"
} 
const message = <div> <p>Hello Everyone, we are learning reactjs</p> </div>
export default class App extends Component {
  render() {
    return (
      <div className="app">
        <h1 style={{color:"green",border:"2px solid blue"}}>Welcome to codethunder</h1>
        {message}
        {/* <img src={Image} /> */}
        <p style= {pTagStyling}>We are learning React Js ...</p>
        <FirstPage/>
      </div>
    )
  }
}
