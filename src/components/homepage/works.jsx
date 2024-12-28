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
								src="https://media.licdn.com/dms/image/v2/D4D0BAQEsqEfDwiOCcQ/company-logo_200_200/company-logo_200_200/0/1716398577134/web_tronix_logo?e=1743638400&v=beta&t=99n_mI4aoMa0nkHnNvwsplDOCySH1tJCg-ZZNQmTwH0"
								alt="Web-tronix"
								className="work-image"
								style={{
									height: "32px",
									width: "32px",
									background: "transparent",
								}}
							/>
							<div className="work-details">
								<div className="work-title">Numu</div>
								<div className="work-date">
									<div className="work-subtitle">
										Full-stack Web Developer
									</div>
									<div className="work-duration">
										08/2023 - Present
									</div>
								</div>
							</div>
						</div>

						<div className="work">
							<img
								src="https://luagroup.com/wp-content/uploads/2024/08/lua-logo.svg"
								alt="Lua (Numu)"
								className="work-image"
								style={{
									height: "32px",
									width: "32px",
									background: "transparent",
								}}
							/>
							<div className="work-details">
								<div className="work-title">Numu</div>
								<div className="work-date">
									<div className="work-subtitle">
										Full-stack Web Developer
									</div>
									<div className="work-duration">
										05/2023 - 07/2024
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
