import React from "react";
import Head from "./Head";
import Content from "./Content"

var jsonObj = [{"username": "Dancinoman", "recent": 125, "alltime": 300},
							 {"username": "Netherman09", "recent": 142, "alltime":  302},
						   {"username": "Geior334", "recent": 20, "alltime": 64}]

export default class LeaderBoard extends React.Component {
  contruct(){
		super();
		this.state = {
			carret: "fas fa-caret-down"
		}
	}
	render(){
		return (
			<div>
			  <table>
					<tbody>
						<Head/>
						<Content/>
					</tbody>
				</table>
			</div>
		);
	}
}
