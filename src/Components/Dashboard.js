import React from "react";
import "../App.css";
import Contact from "./Contact";
import Content from "./Content";
import Header from "./Header";
import Nav from "./Nav";

const Dashboard = () => {
	return (
		<div className="dashboard">
			<Nav />
			<Header />
			<Content />
			<Contact />
		</div>
	);
};

export default Dashboard;
