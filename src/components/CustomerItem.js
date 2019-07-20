import React from "react";
import { Link } from "react-router-dom";

function CustomerItem(props) {
  return (
    <tbody>
      <tr>
        <td data-label="Name">{props.name}</td>
        <td data-label="Email">{props.email}</td>
        <td data-label="Phone">{props.phone}</td>
        <td>
          <Link
            to={{
              pathname: `/customer/${props.id}`,
              state: { name: props.name }
            }}
          >
            <button className="ui button">Edit</button>
          </Link>
        </td>
      </tr>
    </tbody>
  );
}

export default CustomerItem;
