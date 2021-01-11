import React from "react";
import star from "../assets/star.svg";
import "../App.css";

const MessageCard = ({ name, message, date, image }) => {
	return (
		<div className="message-card">
			<img src={image} className="pic" alt="icon1" />

			<div className="message-card-content">
				<h5>{name}</h5>
				<p>{message}</p>
			</div>
			<div className="message-card-info">
				<img src={star} alt="icon2" width="15" />
				<p>{date}</p>
			</div>
		</div>
	);
};

export default MessageCard;
