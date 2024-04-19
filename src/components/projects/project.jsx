import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import "./styles/project.css";

const Project = (props) => {
	const { logos, title, description, linkText, link, demoLink } = props;

	return (
		<React.Fragment>
			<div className="project" key={title}>
				<div className="project-container">
					<div className="logo-container">
						{logos.map((logo, index) => (
							<React.Fragment key={index}>
								<div className="project-logo">
									<img
										className="logo-image"
										src={logo.image}
										alt={logo.title}
										title={logo.title}
										style={{ width: logo.customWidth || "30px" }}
									/>
								</div>
								{index !== logos.length - 1 && <span className="logo-separator">+</span>}
							</React.Fragment>
						))}
					</div>


					<div className="project-title">{title}</div>
					<div title={description} className="project-description">
						{description}
					</div>
					<div className="link-holder">
						<Link to={link} target="_black">
							<div className="project-link">
								<div className="project-link-icon">
									<FontAwesomeIcon icon={faLink} />
								</div>

								<div className="project-link-text">
									{linkText}
								</div>
							</div>
						</Link>

						{demoLink && (
							<Link to={demoLink} target="_black">
								<div className="project-link demo-link">
									<div className="project-link-icon">
										<FontAwesomeIcon icon={faLink} />
									</div>

									<div className="project-link-text">
										Demo Link
									</div>
								</div>
							</Link>
						)}
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Project;
