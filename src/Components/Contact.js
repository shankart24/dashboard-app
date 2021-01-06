import React from "react";
import "../App.css";
import search from "../assets/search.svg";
import vertical from "../assets/vertical.svg";
import m2 from "../assets/m2.jpg";
import m3 from "../assets/m3.jpg";
import m4 from "../assets/m4.jpg";
import m5 from "../assets/m5.jpg";
import m6 from "../assets/m6.jpg";
import MessageCard from "./MessageCard";

const Contact = () => {
	return (
		<div className="contact">
			<div className="contact-header">
				<h4>Client Messages</h4>
				<div className="contact-search">
					<img src={search} width="15" />
					<img src={vertical} width="15" />
				</div>
			</div>
			<div className="messages">
				<MessageCard name="David" message="Hey! Got your work. It was excellent." date="21 July" image={m2} />
				<MessageCard name="Stephanie" message="When can we catch up? You rock!!" date="11 Feb" image={m3} />
				<MessageCard name="Alona" message="Your work is just stunning. Let's collab!" date="09 Aug" image={m4} />
				<MessageCard name="Hira" message="I'm free tomorrow. Let's redesign the app." date="13 Nov" image={m5} />
				<MessageCard name="William" message="Hello! I need your help with designing." date="19 Jul" image={m6} />
			</div>
		</div>
	);
};

export default Contact;
