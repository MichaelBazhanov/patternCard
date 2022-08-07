import React from "react";
import { Link, useMatch } from "react-router-dom";

const LinkCustom = ({ children, to, ...props }) => {
	// const match = useMatch(to); // хорошо работает без вложенных роутеров
	const match = useMatch({ // хорошо работает с вложенными роутерами
		path: to,
		end: to.length === 1
	});
	console.log(match)

	return (
		<Link
			to={to}
			style={{
				color: match ? 'red' : '',
			}}
			{...props}
		>
			{children}
		</Link>
	)
}

export default LinkCustom

// Общая идея в том что этот Link мы можем обернуть во что угодно

