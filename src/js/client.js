var React = require("react");
var ReactDOM = require("react-dom");
var ReactRouter = require("react-router-dom");
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;

var Popular = require("./pages/Popular");
var Nav = require("./pages/Nav");


class App extends React.Component {
	render() {
		return (
			<Router>
				<div className='container'>
					<Route component={Nav}/>
				</div>
			</Router>

		)
	}
}

const app = document.getElementById("app");

ReactDOM.render(<App/>, app);
