import React,{Component} from "react"

var ListCustomers = ({clients,onDelete})=>{
    
    return (<div>
                <h1>Liste de clients</h1>
                <ul>{clients.map((elt)=>(
                    <div>
                        <li>
                            {elt.name} -- {elt.age} 
                            <button onClick={()=>onDelete(elt.id)}>X</button>
                        </li>
                    </div>))
                    }
                </ul>
            </div>)
}

export default ListCustomers