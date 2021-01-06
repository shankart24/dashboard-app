import React from "react";

import align from "../assets/align.svg";
import grid from "../assets/grid.svg";
import "../App.css";
import ProgressCard from "./ProgressCard";

const Content = () => {
	return (
		<div className="content">
			<div className="info">
				<div className="info-content">
					<div className="info-heading">
						<h4>Projects</h4>
						<h5>Dec 2020</h5>
					</div>
					<div className="data">
						<div className="data-numbers">
							<div>
								<h5>45</h5>
								<p>In Progress</p>
							</div>
							<div>
								<h5>12</h5>
								<p>In Progress</p>
							</div>
							<div>
								<h5>10</h5>
								<p>Upcoming</p>
							</div>
							<div>
								<h5>67</h5>
								<p>Total Projects</p>
							</div>
						</div>
						<div>
							<img src={align} alt="align-icon" />
							<img src={grid} alt="grid-icon" />
						</div>
					</div>
					<div className="progress">
						<ProgressCard
							bgColor="#FFD3E2"
							barColor="#FF72AC"
							txtColor="#FF72AC"
							barWidth="20"
							timeLeft="1 week"
							date="July 1, 2020"
							title="Mobile App"
							sub="Shopping"
						/>
						<ProgressCard
							bgColor="#BAF3D2"
							barColor="#02D052"
							txtColor="#02D052"
							barWidth="90"
							timeLeft="6 days"
							date="May 6, 2020"
							title="Web Designing"
							sub="Wireframing"
						/>
						<ProgressCard
							bgColor="#FEE4CB"
							barColor="#FF723A"
							txtColor="#FF723A"
							barWidth="70"
							timeLeft="3 days"
							date="Aug 18, 2020"
							title="Dashboard"
							sub="Medical"
						/>
						<ProgressCard
							bgColor="#E9E7FD"
							barColor="#9990ff"
							txtColor="#9990ff"
							barWidth="40"
							timeLeft="2 weeks"
							date="Nov 4, 2020"
							title="UI Research"
							sub="Prototyping"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Content;
