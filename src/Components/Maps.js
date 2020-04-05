import React,{ Component } from 'react';
import axios from 'axios';
// import Fade from 'react-reveal/Fade';

export default class Maps extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      count:[{ _id:"",name:"",confirmed:0,cured:0,death:0,total:0}],
      isMount:false,
      stateName: ""
    };
    console.log(this.state)
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
  
  // this.setState({stateName:this.props.name} );
  console.log(this.props.name)
  axios.get('https://covid19-india-adhikansh.herokuapp.com/state/'+this.props.name).then(res=>{
    // console.log(res)
  
  if(!res.data.data[0]){
    console.log("nod")
    this.setState({
      count:[{ _id:"",name:this.props.name,confirmed:0,cured:0,death:0,total:0}],
      stateName : this.props.name
    });
    console.log(this.state.count)

  } else{
    console.log("data")
    this.setState({count : res.data.data,stateName : this.props.name});
    console.log(this.state.count)
  }
})
}

componentDidUpdate(prevProps, prevState){

  
}
UNSAFE_componentWillReceiveProps(nextProps){
  console.log(nextProps)
  if(nextProps.name!==this.props.name){

  axios.get('https://covid19-india-adhikansh.herokuapp.com/state/'+nextProps.name).then(res=>{
    // console.log(res)
  
  if(!res.data.data[0]){
    console.log("nod")
    this.setState({
      count:[{ _id:"",name:this.props.name,confirmed:0,cured:0,death:0,total:0}],
      stateName: nextProps.name
    });
    console.log(this.state)

  } else{
    console.log("data")
    this.setState({count : res.data.data,stateName : nextProps.name});
    console.log(this.state)
  }
})
  }
}
// static getDerivedStateFromProps(nextProps, prevState) {
//   if (nextProps.name !== prevState.total) {
//     return ({ total: nextProps.total }) // <- this is setState equivalent
//   }
 
// }
render(){
  return(
    <div>
      {/* <Fade> */}
    <ul>
    {this.state.stateName ? <p>StateName: {this.state.stateName}</p>: <p><strong>Click</strong> on the state</p>}
    </ul>

     <div className="card1" id="test">
           <div  className="stats1 c1col">
               <span>Confirmed</span>
               <span id="confirmed">{this.state.count[0].total ?this.state.count[0].total:<span>-</span>}</span>
           </div>
           <div  className="stats1 c2col">
               <span>Active</span>
               <span id="active">{this.state.count[0].total ?this.state.count[0].confirmed:<span>-</span>}</span>
           </div>
           <div  className="stats1 c3col">
               <span>Recovered</span>
               <span id="recovered">{this.state.count[0].total ?this.state.count[0].cured:<span>-</span>}</span>
           </div>
           <div  className="stats1 c4col">
               <span>Deceased</span>
               <span id="deceased">{this.state.count[0].total ?this.state.count[0].death:<span>-</span>}</span>
           </div>
       </div>
       {/* </Fade> */}
       </div>
  )
}

}



