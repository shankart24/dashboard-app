import React from "react";
import "../App.css";
import ham from "../assets/ham.svg";
import home from "../assets/home.svg";
import calendar from "../assets/calendar.svg";
import clock from "../assets/clock.svg";
import message from "../assets/message.svg";
import settings from "../assets/settings.svg";
import user from "../assets/user.svg";

const Nav = () => {
	return (
		<div className="nav">
			<img src={ham} className="menu" alt="menu-icon" />
			<div className="nav-items">
				<img src={home} alt="home-icon" />
				<img src={user} alt="user-icon" />
				<img src={message} alt="message-icon" />
				<img src={calendar} alt="calendar-icon" />
				<img src={clock} alt="clock-icon" />
				<img src={settings} alt="settings-icon" />
			</div>
		</div>
	);
};

export default Nav;
