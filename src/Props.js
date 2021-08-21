import React, { Component } from 'react';
import './Props.css';



export default class Props extends Component {
    constructor(props){
        super(props);
        console.log(props);
        this.state={
            // isClick : false,
            bg_color: 'white',
            title: "ReactJs",
            isClick: false
        }
        // this.changeTitle.bind(this)


    }
    changeTitle = () =>{
        this.setState(
            {title:"Frontend"}
        )
    }
    changeBgColor =()=>{
        this.setState({bg_color:"black"});
        console.log(this.state.bg_color)
    }
    toggle = () => {
        this.setState({
            isClick : !this.state.isClick
        })
    }
    
    render() {
        return (
            <>  <h1>{this.state.title}</h1>
                <div className="card">
                    <h2>{this.props.user.name}</h2>
                    <p>{this.props.user.id}</p>
                    <p>{this.props.user.position}</p>
                </div>
                <div className={
                      this.state.isClick ? 'dark text' : "light text"  
                    } >
                    We learn state in React
                </div>
                <div className="toggle">
                    <button onClick={this.changeBgColor} >Click to change the clor</button>
                    <button onClick={this.changeTitle}>Click Here to chnage the name</button>
                    <button onClick={this.toggle}>Click to change Dark/Light</button>
                </div>
            </>
            
        )
    }
}
