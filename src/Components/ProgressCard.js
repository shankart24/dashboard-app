import React from "react";
import vertical from "../assets/vertical.svg";
import plus from "../assets/plus.svg";
import m5 from "../assets/m5.jpg";

const ProgressCard = ({ bgColor, barColor, txtColor, barWidth, timeLeft, date, title, sub }) => {
	return (
		<div className="progress-card" style={{ backgroundColor: `${bgColor}` }}>
			<div className="progress-card-header">
				<h6>{date}</h6>
				<img src={vertical} alt="icon" />
			</div>
			<div className="progress-card-main">
				<h4>{title}</h4>
				<h5>{sub}</h5>

				<div className="progress-info" style={{ position: "relative" }}>
					<h6>Progress</h6>
					<div className="progress-bar">
						<div className="filled" style={{ backgroundColor: `${barColor}`, width: `${barWidth}%` }}></div>
					</div>
					<h6 style={{ position: "absolute", right: 0, bottom: -4 }}>{`${barWidth}%`}</h6>
				</div>
			</div>
			<div className="progress-card-footer">
				<div className="images">
					<img src={m5} width="20" style={{ borderRadius: "50px" }} />
					<img src={plus} width="15" />
				</div>
				<div className="duration">
					<p style={{ color: `${txtColor}` }}>{`${timeLeft} left`}</p>
				</div>
			</div>
		</div>
	);
};

export default ProgressCard;
