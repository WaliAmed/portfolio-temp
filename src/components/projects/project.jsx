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
							<>
								<div key={logo.title} className="project-logo">
									<img
										style={{
											width: "30px",
											cursor: "help",
										}}
										src={logo.image}
										alt="logo"
										title={logo.title}
									/>
								</div>
								{index !== logos.length - 1 && (
									<div style={{ fontWeight: "bold" }}>+</div>
								)}
							</>
						))}
					</div>

					<div className="project-title">{title}</div>
					<div title={description} className="project-description">
						{description}
					</div>
					<div className="link-holder">
						<Link to={link}>
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
							<Link to={demoLink}>
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
