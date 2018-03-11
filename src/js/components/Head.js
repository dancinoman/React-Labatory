import React from "react";

export default class Head extends React.Component{
constructor(){
    super()
    this.state = { carret: "fas fa-caret-down" };
    this.carretUp = "fas fa-caret-up";
    this.carretDown = "fas fa-caret-down";
}

toggleArrow() {

    if(this.state.carret == this.carretDown) {
        this.setState({carret:this.carretUp});
    } else {
        this.setState({carret:this.carretDown});
    }
    this.props.arrangeList(this.props.headContent[0], this.state.carret);
}

  render(){
    return (
           <th className="flip" onClick={() => this.toggleArrow()}>
             {this.props.headContent[1]}
             <i className={this.state.carret}></i>
           </th>
    );
  }
}
