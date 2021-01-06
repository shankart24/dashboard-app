import React from "react";
import search from "../assets/search.svg";
import bell from "../assets/bell.svg";
import plus from "../assets/plus.svg";
import m1 from "../assets/m1.jpg";
import "../App.css";

const Header = () => {
	return (
		<div className="header">
			<div className="title-and-search">
				<h3>Hello there, Erin!</h3>
				<div className="search-box">
					<img src={search} alt="search-icon" />
					<p>Search</p>
				</div>
			</div>
			<div className="account-info">
				<img src={plus} alt="plus-icon" />
				<img src={bell} alt="bell-icon" />
				<div className="line"></div>
				<img src={m1} className="profile" alt="dp" />
				<h5>Erin H</h5>
			</div>
		</div>
	);
};

export default Header;
