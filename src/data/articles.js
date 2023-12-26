import { Box, Container, Typography } from "@mui/material";
import React from "react";

function article_1() {
	return {
		date: "26 Dec 2023",
		title: "Next.js: The Future of Server-Side Rendering in Web Development",
		description:
			"Discover Next.js: the React-based framework revolutionizing server-side rendering, offering optimized performance, SEO benefits, and simplified development for modern web applications.",
		keywords: [
			"Next.js",
			"Server-Side Rendering",
			"React-based Framework",
			"Optimized Performance",
			"SEO-Friendly",
			"Development Efficiency",
			"Hybrid Rendering",
			"Web Application",
			"Modern Web Development",
			"Vercel",
		],
		body: (
			<React.Fragment>
				<Container maxWidth="lg">
					<Box mb={3}>
						<img
							src="https://www.websitepulse.com/blog/uploads/server-side-rendering.png"
							alt="Server Side Rendering"
							style={{
								width: "100%",
								height: "auto",
								borderRadius: "8px",
							}}
						/>
					</Box>

					{/* Introduction */}
					<Typography variant="body1" paragraph>
						In the ever-evolving landscape of web development, the
						quest for faster, more efficient, and user-friendly web
						applications has led to the rise of various
						technologies. Among these, Next.js has emerged as a
						game-changer, especially in the realm of server-side
						rendering (SSR). This article delves into how Next.js is
						reshaping the future of SSR in web development, offering
						developers a powerful toolkit for building
						high-performance applications.
					</Typography>

					<Typography variant="h5" gutterBottom>
						The Rise of Next.js
					</Typography>
					<Typography variant="body1" paragraph>
						Next.js, developed by Vercel, is a React-based framework
						that has gained significant popularity for its ease of
						use and its exceptional rendering capabilities. Unlike
						traditional client-side rendering, where JavaScript runs
						on the user's browser to render pages, SSR with Next.js
						pre-renders pages on the server. This approach provides
						faster page loads, which is crucial for user experience
						and SEO.
					</Typography>

					<Typography variant="h4" gutterBottom>
						Why Next.js is a Game-Changer:
					</Typography>

					<Typography variant="h5" gutterBottom>
						Optimized Performance
					</Typography>
					<Typography variant="body1" paragraph>
						Next.js optimizes web application performance. By
						rendering JavaScript on the server, it significantly
						reduces the load time, enhancing the user experience,
						especially on mobile devices where speed is a critical
						factor.
					</Typography>

					<Typography variant="h5" gutterBottom>
						SEO-Friendly
					</Typography>
					<Typography variant="body1" paragraph>
						With SSR, Next.js ensures that content is ready and
						visible to search engine crawlers. This enhances the SEO
						of web applications, as search engines can easily index
						the content, improving the site’s visibility and
						ranking.
					</Typography>

					<Typography variant="h5" gutterBottom>
						Simplified Development Process
					</Typography>
					<Typography variant="body1" paragraph>
						Next.js streamlines the development process with
						features like file-based routing, automatic code
						splitting, and server-side rendering. These features
						allow developers to focus more on building the
						application rather than worrying about configuration and
						optimization details.
					</Typography>

					<Typography variant="h5" gutterBottom>
						Hybrid Rendering Options
					</Typography>
					<Typography variant="body1" paragraph>
						What sets Next.js apart is its ability to support both
						server-side and client-side rendering. Developers can
						choose per-page rendering methods, combining the
						benefits of SSR, static site generation, and client-side
						rendering, providing flexibility based on the page’s
						requirements.
					</Typography>

					<Typography variant="h5" gutterBottom>
						Rich Ecosystem and Community Support
					</Typography>
					<Typography variant="body1" paragraph>
						Being built on React, Next.js benefits from the rich
						ecosystem of React, including libraries and tools. The
						growing community around Next.js also contributes to a
						wealth of resources, tutorials, and third-party tools,
						enhancing its capabilities.
					</Typography>

					<Typography variant="h5" gutterBottom>
						Real-World Applications and Success Stories
					</Typography>
					<Typography variant="body1" paragraph>
						Companies like Netflix, Uber, and Twitch have leveraged
						Next.js for their web applications. For instance,
						Netflix uses Next.js for its marketing pages, enjoying
						the benefits of fast rendering and SEO optimization.
						This has resulted in improved user engagement and lower
						bounce rates.
					</Typography>

					<Typography variant="h5" gutterBottom>
						Challenges and Considerations
					</Typography>
					<Typography variant="body1" paragraph>
						While Next.js is powerful, it’s not a one-size-fits-all
						solution. Considerations around server infrastructure,
						the complexity of SSR, and the initial learning curve
						should be taken into account. However, for projects
						where SEO and performance are paramount, Next.js
						presents an incredibly compelling option
					</Typography>

					<Typography variant="h5" gutterBottom>
						Conclusion
					</Typography>
					<Typography variant="body1" paragraph>
						Next.js stands at the forefront of modern web
						development practices, particularly in server-side
						rendering. Its blend of performance, SEO-friendliness,
						and development ease positions it as a future-proof
						choice for developers looking to build fast and
						efficient web applications. As web technologies continue
						to evolve, Next.js is poised to remain a key player in
						shaping the future of web development.
					</Typography>
				</Container>
			</React.Fragment>
		),
	};
}

function article_2() {
	const articleData = [
		{
			title: "1. What is a Closure in JavaScript?",
			description:
				"Answer: A closure is a function that remembers its outer variables and can access them. In JavaScript, every function is a closure.",
		},
		{
			title: "2. Explain 'this' keyword in JavaScript.",
			description:
				"'This' refers to the object it belongs to. Its value depends on how the function is called: an object method, a simple function call, a constructor, an event handler, etc.",
		},
		{
			title: "3. What is Prototypal Inheritance?",
			description:
				"It's a method by which an object can inherit properties and methods from another object. In JavaScript, objects inherit directly from other objects.",
		},
		{
			title: "4. Describe Event Bubbling.",
			description:
				"Event bubbling is a method of event propagation in the HTML DOM where an event propagates from the target element up through the ancestors in the hierarchy.",
		},
		{
			title: "5. What is 'use strict';?",
			description:
				"It's a directive that enforces stricter parsing and error handling in your code. It helps in writing safer and cleaner JavaScript code.",
		},
		{
			title: "6. Explain Hoisting in JavaScript.",
			description:
				"Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope (script or function).",
		},
		{
			title: "7. What are Promises in JavaScript?",
			description:
				"A Promise is an object representing the eventual completion or failure of an asynchronous operation. It allows you to write asynchronous code in a more manageable way.",
		},
		{
			title: "8. What are Arrow Functions?",
			description:
				"Introduced in ES6, arrow functions allow a shorter syntax for writing function expressions. They don’t have their own this value.",
		},
		{
			title: "9. Can you explain the difference between == and === in JavaScript?",
			description:
				"== is the equality operator that performs type coercion if the variables are not of the same type, while === is the strict equality operator without type coercion.",
		},
		{
			title: "10. What is Event Delegation?",
			description:
				"Event delegation is a technique of delegating an event to a single common parent, rather than individual child elements. It leverages event bubbling.",
		},
		{
			title: "11. What are JavaScript Data Types?",
			description:
				"The data types are Number, String, Boolean, Object, Null, Undefined, BigInt, and Symbol (introduced in ES6).",
		},
		{
			title: "12. Explain Asynchronous vs. Synchronous Programming in JavaScript.",
			description:
				"Synchronous programming blocks code execution until a task completes, while asynchronous programming allows the task to complete without blocking other tasks.",
		},
		{
			title: "13. What is the Event Loop in JavaScript?",
			description:
				"The event loop is a process that allows JavaScript to perform non-blocking tasks by offloading operations to the system kernel whenever possible.",
		},
		{
			title: "14. What are JavaScript Generators?",
			description:
				"Generators are functions that can be exited and re-entered later, with their context (variable bindings) saved across re-entrances.",
		},
		{
			title: "15. Explain the concept of a Singleton Pattern in JavaScript.",
			description:
				"A Singleton pattern restricts a class to a single instance. Every subsequent instance gets the initial instance, maintaining a single shared state.",
		},
		{
			title: "16. What is Function Currying in JavaScript?",
			description:
				"Currying is the process of taking a function with multiple arguments and turning it into a sequence of functions each with only a single argument.",
		},
		{
			title: "17. How does Prototypal Inheritance differ from Classical Inheritance?",
			description:
				"In classical inheritance, objects inherit from classes (like a blueprint), while in prototypal inheritance, objects inherit directly from other objects.",
		},
		{
			title: "18. What is the difference between null and undefined in JavaScript?",
			description:
				"null is an assignment value, indicating that a variable points to no object. undefined means a variable has been declared but not defined yet.",
		},
		{
			title: "19. How do you create a private variable in JavaScript?",
			description:
				"Private variables can be created using closures, or in ES6 using the # symbol before property names in classes.",
		},
		{
			title: "20. What are JavaScript Modules?",
			description:
				"Modules are reusable pieces of code in a file that can be exported and then imported for use in other files.",
		},
		{
			title: "21. Explain the concept of Memoization in JavaScript.",
			description:
				"Memoization is an optimization technique that stores the results of expensive function calls and returns the cached result when the same inputs occur again.",
		},
		{
			title: "22. What are Higher Order Functions in JavaScript?",
			description:
				"A higher-order function is a function that takes another function as an argument, or returns a function as a result, or both.",
		},
		{
			title: "23. What is the DOM in JavaScript?",
			description:
				"The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content.",
		},
		{
			title: "24. What are JavaScript Decorators?",
			description:
				"Decorators are a design pattern that allows behavior to be added to individual objects, either statically or dynamically, without affecting the behavior of other objects from the same class.",
		},
		{
			title: "25. What is the Importance of the this Keyword in React Components?",
			description:
				"In React, this refers to the component instance and is used to access state, props, and class methods.",
		},
		{
			title: "26. Explain the use of Webpack in JavaScript.",
			description:
				"Webpack is a module bundler. It takes modules with dependencies and generates static assets representing those modules.",
		},
		{
			title: "27. What are Service Workers and how are they used?",
			description:
				"Service Workers act as a proxy between web applications, the browser, and the network. They are used to enable offline experiences, background syncs, and push notifications.",
		},
		{
			title: "28. How does JavaScript handle Multi-threading?",
			description:
				"JavaScript is single-threaded but can achieve concurrency through asynchronous callbacks and the Event Loop.",
		},
		{
			title: "29. Explain the Spread Operator in JavaScript.",
			description:
				"The spread operator (...) allows an iterable such as an array or string to be expanded in places where zero or more arguments or elements are expected.",
		},
		{
			title: "30. What is Tree Shaking in JavaScript?",
			description:
				"Tree shaking is a term commonly used in the JavaScript context for dead-code elimination. It relies on the static structure of ES6 module syntax, i.e., import and export.",
		},
	];
	return {
		date: "1 Dec 2023",
		title: "30 Advanced JavaScript Interview Questions and Answers",
		description:
			"Explore 30 advanced JavaScript interview questions and answers covering topics like closures, 'this' keyword, prototypal inheritance, event handling, 'use strict';, hoisting, promises, and more. Ideal for developers seeking deeper insights into JavaScript's intricate concepts and preparing for challenging interviews",
		keywords: [
			"JavaScript",
			"Interview Questions",
			"Closures",
			"'this' Keyword",
			"Prototypal Inheritance",
			"Promises",
			"Event Loop",
			"Higher Order Functions",
			"React Components",
			"Webpack",
		],
		body: (
			<React.Fragment>
				<Container maxWidth="lg">
					<Box mb={3}>
						<img
							src="https://bairesdev.mo.cloudinary.net/blog/2023/08/What-Is-JavaScript-Used-For.jpg?tx=w_1080,q_auto"
							alt="Javascript interview questions & answers"
							style={{
								width: "100%",
								height: "auto",
								borderRadius: "8px",
							}}
						/>
					</Box>

					{/* Introduction */}
					<Typography variant="body1" paragraph>
						JavaScript continues to be a cornerstone of web
						development. For developers looking to advance their
						careers, it's crucial to understand its deeper nuances.
						Here's a list of 30 advanced JavaScript interview
						questions and their answers, perfect for preparing for
						your next big job opportunity.
					</Typography>

					{articleData.map((article) => (
						<>
							<Typography variant="h5" gutterBottom>
								{article.title}
							</Typography>
							<Typography variant="body1" paragraph>
								Answer: {article.description}
							</Typography>
						</>
					))}

					<Typography variant="h5" gutterBottom>
						Conclusion
					</Typography>
					<Typography variant="body1" paragraph>
						This article is intended for developers preparing for
						advanced JavaScript interviews, providing a
						comprehensive overview of complex concepts and their
						practical applications.
					</Typography>
				</Container>
			</React.Fragment>
		),
	};
}

export const allArticles = [article_1, article_2];
const myArticles = (title) => {
	const filteredArticle = allArticles.find(
		(article) =>
			article()
				.title.toLowerCase()
				.replace(/:/g, "")
				.replace(/ /g, "_") === title
	);

	return filteredArticle || (() => null);
};

export default myArticles;
