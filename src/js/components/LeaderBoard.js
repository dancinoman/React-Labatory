import React from "react";
import Head from "./Head";
import Content from "./Content"

var jsonObj = [{"username": "Dancinoman", "recent": 125, "alltime": 20},
		       {"username": "Netherman09", "recent": 80, "alltime":  500},
			   {"username": "Geior334", "recent": 20, "alltime": 64}];



export default class LeaderBoard extends React.Component {
  constructor(){
	    super();
		this.state = {
			content: {}
		};
		this.recent=["recent", "Most Recent"];
		this.alltime = ["alltime", "All Time"];
		this.carretUp = "fas fa-caret-up";
	    this.carretDown = "fas fa-caret-down";
	}

	//Fill the table details with json
	fillTable(headName = null, arrow = null) {
	   	var constr = [];

		if(headName != null && arrow == this.carretDown) {
			jsonObj.sort(function(a,b){
			  return a[headName] - b[headName];
			});
		} else if(headName != null && arrow == this.carretUp) {
			jsonObj.sort(function(a,b){
			  return b[headName] - a[headName];
			});
		}

		jsonObj.forEach(function(jobj, index){

		constr.push(<tr key={index}>
						<td>{jobj.username}</td>
						<td className="content">{jobj.recent}</td>
						<td className="content">{jobj.alltime}</td>
					</tr>
				);

		});

		if(headName == null) {return constr;}
		else {this.setState({content: <p>Hello World</p>})}
	}

	render(){
		return (
			<div>
			  <table>
			  	<thead>
					<tr>
						<th>Users</th>
						<Head headContent={this.recent} arrangeList={this.fillTable.bind(this)}/>
						<Head headContent={this.alltime} arrangeList={this.fillTable.bind(this)}/>
					</tr>
				</thead>
				<Content content={this.fillTable() || this.state.content}/>
				</table>
			</div>
		);
	}
}
