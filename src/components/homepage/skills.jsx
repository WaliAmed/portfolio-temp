import React, { Fragment } from "react";
import { Grid, Typography, LinearProgress } from "@mui/material";

import "./styles/skills.css";

const Skills = () => {
	const frontend = [
		{ name: "React Js", level: 95 },
		{ name: "Next Js", level: 90 },
		{ name: "JavaScript", level: 90 },
		{ name: "Redux", level: 90 },
		{ name: "Tailwind Css", level: 85 },
		{ name: "HTML/CSS", level: 85 },
		{ name: "Typescript", level: 50 },
	];

	const backend = [
		{ name: "Node Js", level: 75 },
		{ name: "Express Js", level: 75 },
		{ name: "Rest API", level: 85 },
		{ name: "MongoDB", level: 65 },
		{ name: "MySQL", level: 50 },
		{ name: "Sequelize", level: 50 },
	];

	const serverless = [
		{ name: "S3", level: 50 },
		{ name: "Firebase", level: 50 },
	];

	const tools = [
		{ name: "Git", level: 90 },
		{ name: "Bitbucket", level: 85 },
		{ name: "Jira", level: 85 },
	];

	return (
		<Fragment>
			<div>
				<h3>Frontend:</h3>
				<Grid container spacing={2}>
					{frontend.map((skill, index) => (
						<Grid key={index} item xs={6} sm={4} md={3}>
							<div>
								<Typography variant="subtitle1" gutterBottom>
									{skill.name}
								</Typography>
								<LinearProgress
									sx={{
										"& .MuiLinearProgress-bar": {
											backgroundColor: "#14b8a6",
										},
									}}
									variant="determinate"
									value={skill.level}
								/>
								<Typography variant="caption" align="center">
									{`${skill.level}%`}
								</Typography>
							</div>
						</Grid>
					))}
				</Grid>
			</div>

			<div style={{ marginTop: "40px" }}>
				<h3>Backend:</h3>
				<Grid container spacing={2}>
					{backend.map((skill, index) => (
						<Grid key={index} item xs={6} sm={4} md={3}>
							<div>
								<Typography variant="subtitle1" gutterBottom>
									{skill.name}
								</Typography>
								<LinearProgress
									sx={{
										"& .MuiLinearProgress-bar": {
											backgroundColor: "#14b8a6",
										},
									}}
									variant="determinate"
									value={skill.level}
								/>
								<Typography variant="caption" align="center">
									{`${skill.level}%`}
								</Typography>
							</div>
						</Grid>
					))}
				</Grid>
			</div>

			<div style={{ marginTop: "40px" }}>
				<h3>Serverless:</h3>
				<Grid container spacing={2}>
					{serverless.map((skill, index) => (
						<Grid key={index} item xs={6} sm={4} md={3}>
							<div>
								<Typography variant="subtitle1" gutterBottom>
									{skill.name}
								</Typography>
								<LinearProgress
									sx={{
										"& .MuiLinearProgress-bar": {
											backgroundColor: "#14b8a6",
										},
									}}
									variant="determinate"
									value={skill.level}
								/>
								<Typography variant="caption" align="center">
									{`${skill.level}%`}
								</Typography>
							</div>
						</Grid>
					))}
				</Grid>
			</div>

			<div style={{ marginTop: "40px" }}>
				<h3>Tools:</h3>
				<Grid container spacing={2}>
					{tools.map((skill, index) => (
						<Grid key={index} item xs={6} sm={4} md={3}>
							<div>
								<Typography variant="subtitle1" gutterBottom>
									{skill.name}
								</Typography>
								<LinearProgress
									sx={{
										"& .MuiLinearProgress-bar": {
											backgroundColor: "#14b8a6",
										},
									}}
									variant="determinate"
									value={skill.level}
								/>
								<Typography variant="caption" align="center">
									{`${skill.level}%`}
								</Typography>
							</div>
						</Grid>
					))}
				</Grid>
			</div>
		</Fragment>
	);
};

export default Skills;
