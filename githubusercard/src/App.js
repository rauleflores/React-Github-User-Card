import React from "react";
import "./App.css";
import axios from "axios";

import UserCard from "./components/UserCard";

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			user: {},
			followers: [],
		};
		//console.log("App State:", this.state);
	}
	getFollowers(followers) {
		axios
			.get(followers)
			.then((res) => {
				//console.log("getFollowers res:", res.data);
				const followersObjArray = res.data;
				//console.log("followersObjArray:", followersObjArray);
				this.setState({
					...this.state,
					followers: followersObjArray,
				});
			})
			.catch((err) => console.log("Something went wrong:", err));
	}
	componentDidMount() {
		axios
			.get("https://api.github.com/users/rauleflores")
			.then((res) => {
				//console.log(res.data);
				const user = res.data;
				this.setState({
					...this.state,
					user: user,
				});
				//console.log("resData value:", user);
				//console.log("App state CDM:", this.state);
				return user.followers_url;
			})
			.then((res) => {
				const followers = res;
				//console.log("followers res:", followers);
				this.getFollowers(followers);
			})
			.catch((err) => console.log("Something went wrong:", err));
	}

	render() {
		console.log("App state (render):", this.state);
		return (
			<div className="App">
				<header className="App-header">
					<UserCard user={this.state.user} followers={this.state.followers} />
				</header>
			</div>
		);
	}
}

export default App;
