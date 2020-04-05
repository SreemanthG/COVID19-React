import React from 'react';
import axios from 'axios';
import {Doughnut,Bar} from 'react-chartjs-2';

export default class Tableitem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          labels:['Confirmed','Death','Recovered'],
          datasets: [{
              data: [],
              backgroundColor: []
          }],
          total: "" 
        };
        console.log(this.state)
        // this.check = this.check.bind( this);
        // this.hoverUpdate = this.hoverUpdate.bind(this);
    
      }
    componentDidMount(){
        axios.get('https://covid19-india-adhikansh.herokuapp.com/summary').then(res=>{
            this.setState({datasets:[{data:[res.data["Total Confirmed cases"],res.data["Death"],res.data["Cured/Discharged/Migrated"]],backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f"]}],total:res.data["Total Cases"]});
            console.log(this.setState);
        });
    } 

    render(){
        
        return(
            <div>
                <p>Total no. of cases: <h2>{this.state.total}</h2></p>
              <div className="row">
        
        <div className="col-md-6">
        <Doughnut
                data={{
                    labels:this.state.labels,
                    datasets:this.state.datasets
                }}
                
                />
        </div>
        <div className="col-md-6">
        <Bar 
                data={{
                    label:this.state.labels,
                    labels:this.state.labels,
                    datasets:this.state.datasets
                }} 
                options={ {
                    legend: {
                        display: false
                    },
                    tooltips: {
                        callbacks: {
                           label: function(tooltipItem) {
                                  return tooltipItem.yLabel;
                           }
                        }
                    }
                }
            }
                />
        </div>
    </div> 
             
                
                
            </div>
        )
        
    }
}
