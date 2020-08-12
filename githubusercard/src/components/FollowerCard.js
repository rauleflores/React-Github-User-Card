import React from "react";

import { UseStyles as useStyles } from "./UseStyles";

const FollowerCard = (props) => {
	const classes = useStyles();
	console.log("FollowerCard.js props:", props);
	return (
		<div className={classes.followersCard} key={props.key}>
			<img
				className={classes.image}
				src={props.follower.avatar_url}
				alt={props.follower.login}
			/>
			<p>Username: {props.follower.login}</p>
			<p>
				<a href={props.follower.url}>More Info</a>
			</p>
		</div>
	);
};

export default FollowerCard;
