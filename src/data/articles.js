import { Container, Typography } from "@mui/material";
import React from "react";

function article_1() {
	return {
		date: "7 May 2023",
		title: "Next.js: The Future of Server-Side Rendering in Web Development",
		description:
			"Cloud computing offers a range of benefits, including cost savings and increased flexibility. Find out why more businesses are turning to the cloud.",
		keywords: [
			"The Benefits of Cloud Computing",
			"Tharindu",
			"Tharindu N",
			"Tharindu Nayanajith",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<Container maxWidth="md">
					{/* Introduction */}
					<Typography variant="body1" paragraph>
						In the ever-evolving landscape of web development, the
						quest for faster, more efficient, and user-friendly web
						applications has led to the rise of various
						technologies...
						{/* Rest of the introduction */}
					</Typography>

					{/* The Rise of Next.js */}
					<Typography variant="h5" gutterBottom>
						The Rise of Next.js
					</Typography>
					<Typography variant="body1" paragraph>
						Next.js, developed by Vercel, is a React-based framework
						that has gained significant popularity for its ease of
						use and its exceptional rendering capabilities...
						{/* Rest of the content */}
					</Typography>

					{/* Why Next.js is a Game-Changer */}
					<Typography variant="h5" gutterBottom>
						Why Next.js is a Game-Changer
					</Typography>
					{/* ... Other sections */}

					{/* Real-World Applications and Success Stories */}
					<Typography variant="h5" gutterBottom>
						Real-World Applications and Success Stories
					</Typography>
					{/* ... Real-world examples */}

					{/* Challenges and Considerations */}
					<Typography variant="h5" gutterBottom>
						Challenges and Considerations
					</Typography>
					{/* ... Challenges and considerations */}

					{/* Conclusion */}
					<Typography variant="h5" gutterBottom>
						Conclusion
					</Typography>
					{/* ... Conclusion */}
				</Container>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "7 May 2023",
		title: "Artificial Intelligence in Healthcare",
		description:
			"AI is transforming the healthcare industry, from improving patient outcomes to streamlining operations. Discover the latest applications of this game-changing technology.",
		style: ``,
		keywords: [
			"Artificial Intelligence in Healthcare",
			"Tharindu",
			"Tharindu N",
			"Tharindu Nayanajith",
		],
		body: (
			<React.Fragment>
				<h1>Content of article 2</h1>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2];

export default myArticles;
