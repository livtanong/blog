import React from "react";
import Router from "react-router";

let DefaultRoute = Router.DefaultRoute;
let Link = Router.Link;
let Route = Router.Route;
let RouteHandler = Router.RouteHandler;

import Home from "react-router-proxy!./Home.jsx";
import Projects from "react-router-proxy!./Projects.jsx";
import About from "react-router-proxy!./About.jsx";

class Index extends React.Component {
	render() {
		return (
			<div>
				<header>
					<ul>
						<li><Link to="home">Home</Link></li>
						<li><Link to="projects">Projects</Link></li>
						<li><Link to="about">About</Link></li>
					</ul>
					
				</header>
				<RouteHandler />
			</div>
		)
	}
}

let routes = (
	<Route name="index" path="/" handler={ Index }>
		<Route name="home" path="/home" handler={ Home } />
		<Route name="projects" path="/projects" handler={ Projects } />
		<Route name="about" path="/about" handler={ About } />
		<DefaultRoute handler={ Home }/>
	</Route>
)

let app = undefined;

if (typeof document != "undefined") {
	app = Router.run(routes, function(Handler) {
		React.render(<Handler />, document.body);
	})
}

export default app;