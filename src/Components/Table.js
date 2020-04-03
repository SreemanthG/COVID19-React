import React from 'react';
import axios from 'axios';

export default class Tableitem extends React.Component {

    state = {
        items: [],
    };
    componentDidMount(){
        axios.get('https://covid19-india-adhikansh.herokuapp.com/states').then(res=>{
            this.setState({items: res.data.state});
            console.log(this.setState);
        });
    } 

    render(){
        return<tbody>{this.state.items.map(tableitem => (<tr><td>{tableitem.name}</td><td>{tableitem.confirmed}</td><td>{tableitem.cured}</td><td>{tableitem.death}</td><td>{tableitem.total}</td></tr>))}</tbody>
        
    }
}