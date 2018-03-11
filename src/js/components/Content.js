import React from "react";


export default class Content extends React.Component{

  render(){

    return <tbody>{this.props.content}</tbody>;
  }
}
