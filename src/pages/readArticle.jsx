import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import styled from "styled-components";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";

import INFO from "../data/user";
import myArticles from "../data/articles";

import "./styles/readArticle.css";
import { Box, Container, Typography } from "@mui/material";

const ReadArticle = () => {
	const navigate = useNavigate();
	let { slug } = useParams();

	const article = myArticles(slug);
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [article]);

	if (article() === null) {
		return (
			<Container maxWidth="sm">
				<Box mt={8}>
					<Typography variant="h4" align="center">
						Oops! The article you are looking for is not found.
					</Typography>
				</Box>
			</Container>
		);
	}

	return (
		<React.Fragment>
			<Helmet>
				<title>{`${article().title} | ${INFO.main.title}`}</title>
				<meta name="description" content={article().description} />
				<meta name="keywords" content={article().keywords.join(", ")} />

				{/* Open Graph meta tags */}
				<meta property="og:title" content={article().title} />
				<meta
					property="og:description"
					content={article().description}
				/>
				<meta property="og:image" content={article().image} />
				<meta
					property="og:url"
					content={`https://wali-dev.vercel.app/article/${slug
						.toLowerCase()
						.replace(/:/g, "")
						.replace(/ /g, "_")}`}
				/>
				<meta property="og:type" content="article" />
			</Helmet>

			<div className="page-content">
				<NavBar />

				<div className="content-wrapper">
					<div className="read-article-logo-container">
						<div className="read-article-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="read-article-container">
						<div className="read-article-back">
							<img
								src="../back-button.png"
								alt="back"
								className="read-article-back-button"
								onClick={() => navigate(-1)}
							/>
						</div>

						<div className="read-article-wrapper">
							<div className="read-article-date-container">
								<div className="read-article-date">
									{article().date}
								</div>
							</div>

							<div className="title read-article-title">
								{article().title}
							</div>

							<div className="read-article-body">
								{article().body}
							</div>
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default ReadArticle;
