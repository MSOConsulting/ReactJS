import React from 'react';

const Clients = ({details,onDelete})=>{
    return (<div>
        <h1>Liste des clients</h1>
            <ul>
                {details.map((elt)=>(
                <li>{elt.nom}{" "}<button onClick={()=>onDelete(elt.id)}>X</button></li>))}
            </ul>
    </div>)
}


export default Clients