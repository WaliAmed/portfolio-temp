import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

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
								src="https://scontent.fisb5-2.fna.fbcdn.net/v/t39.30808-6/326748799_885658049418344_2255245390618021987_n.png?_nc_cat=105&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeGXXovt8QgradDkekoQjVeawRY4yGBmb1PBFjjIYGZvU3BfEe-A0Ff2hs4i0ubKgl_oQxK6-5yFX4TMH59NJEgw&_nc_ohc=4fwp9p6Nf8QAX9lmnZM&_nc_ht=scontent.fisb5-2.fna&oh=00_AfCXBvmLw_ZAEIO6XoqdpIhpE8Q07-q-ud9FLfPzyAIRmw&oe=658A18C9"
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
								src="https://codeazatechnologies.com/assets/final-logo-v1.png"
								alt="Codeaza Technologies"
								className="work-image"
								style={{ backgroundColor: "black" }}
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
