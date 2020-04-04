import React from 'react';
import axios from 'axios';
import {Pie} from 'react-chartjs-2';

export default class Tableitem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          labels:['Confirmed','Death','Recovered'],
          datasets: [{
              data: [],
              backgroundColor: []
          }] 
        };
        console.log(this.state)
        // this.check = this.check.bind( this);
        // this.hoverUpdate = this.hoverUpdate.bind(this);
    
      }
    componentDidMount(){
        axios.get('https://covid19-india-adhikansh.herokuapp.com/summary').then(res=>{
            this.setState({datasets:[{data:[res.data["Total Confirmed cases"],res.data["Death"],res.data["Cured/Discharged/Migrated"]],backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f"]}]});
            console.log(this.setState);
        });
    } 

    render(){
        
        return(
            <div>
                {/* <h1>Summary Chart</h1> */}
                <Pie 
                data={{
                    labels:this.state.labels,
                    datasets:this.state.datasets
                }}
                height="90%"
                />
                <br/>
            </div>
        )
        
    }
}
