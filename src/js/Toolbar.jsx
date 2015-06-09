import React from "react";
import {Link} from "react-router";

export default class Toolbar extends React.Component {
	render() {
		return (
			<header>
				<ul>
					<li><Link to="index">Home</Link></li>
					<li><Link to="projects">Projects</Link></li>
					<li><Link to="about">About</Link></li>
				</ul>
			</header>
		)
	}
}