import React from "react";
import Router, {DefaultRoute, Link, Route, RouteHandler} from "react-router";

import Home from "./Pages/Home.jsx";
import Projects from "./Pages/Projects.jsx";
import About from "./Pages/About.jsx";
import Toolbar from "./Toolbar";

class Index extends React.Component {
	render() {
		return (
			<div>
				<Toolbar />
				<RouteHandler />
			</div>
		)
	}
}

let routes = (
	<Route name="index" path="/" handler={ Index }>
		<Route name="projects" path="/projects" handler={ Projects } />
		<Route name="about" path="/about" handler={ About } />
		<DefaultRoute handler={ Home }/>
	</Route>
)

let Root = Router.create({routes :routes});

Root.run(function(Handler) {
	if (typeof document != "undefined") {
		React.render(<Handler />, document.body);
	}
})

export default Root;