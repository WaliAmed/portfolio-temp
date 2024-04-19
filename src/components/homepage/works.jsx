import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import QisstPayLogo from "../../assets/images/qisstpay_logo.png";
import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="https://pbs.twimg.com/media/DGnFeHvVoAAjsnI.jpg"
								alt="Numu"
								className="work-image"
								style={{ height: "40px", padding: "0px" }}
							/>
							<div className="work-details">
								<div className="work-title">Numu</div>
								<div className="work-date">
									<div className="work-subtitle">
										Full-stack Web Developer
									</div>
									<div className="work-duration">
										05/2023 - Present
									</div>
								</div>
							</div>
						</div>

						<div className="work">
							<img
								src={QisstPayLogo}
								alt="QisstPay"
								className="work-image"
							/>
							<div className="work-details">
								<div className="work-title">QisstPay</div>
								<div className="work-date">
									<div className="work-subtitle">
										Front End Web Developer
									</div>
									<div className="work-duration">
										08/2022 - 04/2023
									</div>
								</div>
							</div>
						</div>

						<div className="work">
							<img
								src="./codeaza.png"
								alt="Codeaza Technologies"
								className="work-image"
							/>
							<div className="work-details">
								<div className="work-title">
									Codeaza Technologies
								</div>
								<div className="work-date">
									<div className="work-subtitle">
										Front End Web Developer
									</div>
									<div className="work-duration">
										01/2021 - 08/2022
									</div>
								</div>
							</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
