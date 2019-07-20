import React from "react";

const customerItem = props => {
    return (
        
        <tbody>
          <tr>
            <td data-label="Name">{props.name}</td>
            <td data-label="Email">{props.email}</td>
            <td data-label="Phone">{props.phone}</td>
            <td><button className="ui button">Edit</button></td>
          </tr>
        </tbody>
       
        
    );
}


export default customerItem;