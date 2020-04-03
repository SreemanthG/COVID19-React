import React,{ useState,useEffect } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';

export default class Maps extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      count:[],
      isHovering:false,
      stateName: ""
    };
    this.hoverUpdate = this.hoverUpdate.bind(this);
  }


hoverUpdate = (e)=>{
//  var user= e.target.getAttribute("name");
//   this.setState({
//     stateName: user,
//     isHovering: true,
//   })
//   console.log(this.state);  

}
componentDidMount(){
  axios.get('https://covid19-india-adhikansh.herokuapp.com/state/Telengana').then(res=>{
    this.setState({count : res.data.data })
    console.log(this.state);  

  });
  // this.hoverUpdate();

}



render(){
  return(
    <ul>
    {/* {this.state.count.name ? <p>StateName: {this.state.count.name}</p>: <p>Hover over the state</p>} */}
  </ul>
  )
}
}
