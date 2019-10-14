import React from "react"
import ListCustomers from "./listCustomers"

class Customers extends React.Component{
    constructor(props){
        super(props)
    }
    
    state = {clients : [
        {id: 1, name:'mehdi', age:37 },
        {id: 2, name:'mouss', age:40 },
        {id: 3, name:'bill', age:15 }
    ]}

    handleDelete = (id)=>{
        var customrs = this.state.clients.slice()
        var index = customrs.findIndex((elt)=>elt.id === id)
        customrs.splice(index,1)
        this.setState({clients: customrs})
    }

    render(){
        return  <ListCustomers clients={this.state.clients} onDelete={this.handleDelete}/>
    }
}

export default Customers