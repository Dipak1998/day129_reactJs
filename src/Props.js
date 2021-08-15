import React, { Component } from 'react';
import './Props.css';



export default class Props extends Component {
    constructor(props){
        super(props);
        console.log(props);
        this.state={
            // isClick : false,
            bg_color: 'white'
        }
    }
    changeBgColor(){
        this.setState({bg_color:"black"});
        console.log(this.state.bg_color)
    }
    
    render() {
        return (
            <>
                <div className="card">
                    <h2>{this.props.user.name}</h2>
                    <p>{this.props.user.id}</p>
                    <p>{this.props.user.position}</p>
                </div>
                <div className="text" style={{background:this.state.bg_color}}>
                    We learn state in React
                </div>
                <div className="toggle">
                    <button onClick={this.changeBgColor} >Click to change the clor</button>
                </div>
            </>
            
        )
    }
}
