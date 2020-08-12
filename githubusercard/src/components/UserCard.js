import React from "react";

import FollowerCard from "./FollowerCard";
//import GithubGraph from "./GitHubGraph";
import { UseStyles as useStyles } from "./UseStyles";

const UserCard = (props) => {
	//console.log("UserCard.js props:", props);
	const classes = useStyles();
	return (
		<>
			<div className={classes.userCard}>
				<div className={classes.infoDiv}>
					<img
						className={classes.image}
						src={props.user.avatar_url}
						alt={props.user.name}
					/>
					<p>{props.user.name}</p>
					<p>{props.user.location}</p>
				</div>
				<div className={classes.bioDiv}>
					<p>{props.user.bio}</p>
					<p>
						<a href={props.user.followers_url}>Followers:</a>{" "}
						{props.user.followers}
					</p>
					<p>Following: {props.user.following}</p>
				</div>
			</div>
			{/* <GithubGraph /> */}
			<div className={classes.followersDiv}>
				{props.followers.map((follower, key) => {
					//console.log("props.followers map:", follower, "Key:", key);
					return <FollowerCard follower={follower} key={key} />;
				})}
			</div>
		</>
	);
};

export default UserCard;
