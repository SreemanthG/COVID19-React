import React,{ Component } from 'react';
import axios from 'axios';


export default class Maps extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      count:[],
      isMount:false,
      stateName: ""
    };

    // this.check = this.check.bind( this);
    // this.hoverUpdate = this.hoverUpdate.bind(this);

  }


// hoverUpdate = (e)=>{
//     // this.hoverUpdate = this.hoverUpdate.bind(this);
//   e.preventDefault();
//  var user= e.target.getAttribute("name");
//  axios.get('https://covid19-india-adhikansh.herokuapp.com/state/'+user).then(res=>{
//   this.setState({count : res.data.data,isHovering : true,stateName : user},() => {
//     // only now the state was updated
//     console.log("Data is here", this.state); 
//   })
// });
//  console.log(this.state)
// }

// hoverUpdate = (e)=>{
//   this.check(e.target.getAttribute("name"));
// }

componentDidMount(){
  // this.setState({stateName:this.props.name});
  this.setState({stateName:this.props.name},()=>{
    console.log(this.state)
  });
  axios.get('https://covid19-india-adhikansh.herokuapp.com/state/'+this.state.stateName).then(res=>{
    this.setState({count : res.data.data,stateName : this.props.name});
console.log(this.state)
})
}

componentDidUpdate(prevProps, prevState){
  // if(this.state.count){
  axios.get('https://covid19-india-adhikansh.herokuapp.com/state/'+this.state.stateName).then(res=>{
    this.setState({count : res.data.data,stateName : this.props.name});
    console.log(this.state.count)
})
  // }
}


render(){
  return(
    <div>
    <ul>
    {this.state.stateName ? <p>StateName: {this.state.stateName}</p>: <p>Hover over the state</p>}
    </ul>

     <div className="card1" id="test">
           <div  className="stats1 c1col">
               <span>Confirmed</span>
               <span id="confirmed">{this.state.stateName}</span>
           </div>
           <div  className="stats1 c2col">
               <span>Active</span>
               <span id="active">{this.state.stateName}</span>
           </div>
           <div  className="stats1 c3col">
               <span>Recovered</span>
               <span id="recovered">{this.state.stateName}</span>
           </div>
           <div  className="stats1 c4col">
               <span>Deceased</span>
               <span id="deceased">{this.state.stateName}</span>
           </div>
       </div>
       </div>
  )
}

}



