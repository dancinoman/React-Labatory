import React from "react";

export default class Head extends React.Component{

  render(){
    return (
      <tr>
        <th>Users</th>
        <th>Recent <i className={this.state.carret}></i></th>
        <th>All Time</th>
      </tr>
    );
  }
}
