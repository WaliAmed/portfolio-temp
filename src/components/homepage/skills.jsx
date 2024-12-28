import React, { Fragment } from "react";
import { Grid, Typography, LinearProgress } from "@mui/material";

import "./styles/skills.css";

const Skills = () => {
	const frontend = [
		{ name: "React Js", level: 95 },
		{ name: "Next Js", level: 90 },
		{ name: "JavaScript", level: 90 },
		{ name: "Redux", level: 90 },
		{ name: "React Native", level: 87 },
		{ name: "Tailwind Css", level: 85 },
		{ name: "Vue Js", level: 80 },
		{ name: "Typescript", level: 50 },
		{ name: "HTML/CSS", level: 85 },
	];

	const backend = [
		{ name: "Node Js", level: 85 },
		{ name: "Express Js", level: 85 },
		{ name: "Laravel", level: 85 },
		{ name: "MySQL", level: 80 },
		{ name: "Postgres", level: 80 },
		{ name: "MongoDB", level: 50 },
		{ name: "Prisma", level: 75 },
		{ name: "Sequelize", level: 75 },
	];

	const serverless = [
		{ name: "S3", level: 50 },
		{ name: "Firebase", level: 50 },
		{ name: "Docker", level: 40 },
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
