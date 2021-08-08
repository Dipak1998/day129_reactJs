import React,{Component} from 'react';

const imageLink1 = "https://picsum.photos/200/300";
const imageLink2 = "https://picsum.photos/300/300";
const imageLink3 = "https://picsum.photos/240/300";

export default class FirstPage extends Component {
    render(){
        return(
            <>
                <h2>Random Images</h2>
                <img src={imageLink1}  alt="randomImage"/>
                <img src={imageLink2}  alt="randomImage"/>
                <img src={imageLink3}  alt="randomImage"/>
            </>
        )
    }
} 