import React from "react";
import Home from "./Home.jsx";

if (typeof document != "undefined") {
	var app = React.render(
	  <Home />,
	  document.getElementById('home')
	);
}

export default app;