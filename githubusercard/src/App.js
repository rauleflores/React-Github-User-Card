import React from "react";
import axios from "axios";

import "./App.css";

import UserCard from "./components/UserCard";
import UserSearch from "./components/UserSearch";
import Loading from "./components/Loading";

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			user: {},
			followers: [],
			newUser: "",
			initUser: "rauleflores",
			isLoading: true,
		};
		//console.log("App State:", this.state);
	}
	setNewUser = (newUser) => {
		this.setState({
			newUser: newUser,
		});
	};
	// getUserGraph = (user) => {
	// 	axios
	// 		.get(`https://github.com/users/${user}/contributions`)
	// 		.then((res) => {
	// 			console.log("getUserGraph res:", res);
	// 		})
	// 		.catch((err) => console.log("Something went wrong:", err));
	// };
	getFollowers(followers) {
		axios
			.get(followers)
			.then((res) => {
				//console.log("getFollowers res:", res.data);
				const followersObjArray = res.data;
				//console.log("followersObjArray:", followersObjArray);
				this.setState({
					followers: followersObjArray,
					isLoading: false,
				});
			})
			.catch((err) => console.log("Something went wrong:", err));
	}
	getUserandFollowers(user) {
		axios
			.get(`https://api.github.com/users/${user}`)
			.then((res) => {
				//console.log(res.data);
				const user = res.data;
				this.setState({
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
	getNewUser = (newUser) => {
		if (this.state.user !== this.state.newUser) {
			// axios
			// 	.get(`https://api.github.com/users/${newUser}`)
			// 	.then((res) => {
			// 		const newUser = res.data;
			// 		this.setState({
			// 			user: newUser,
			// 		});
			// 	})
			// 	.catch((err) => console.log("Something went wrong:", err));
			this.getUserandFollowers(newUser);
		}
	};
	componentDidMount() {
		this.getUserandFollowers(this.state.initUser);
	}
	componentDidUpdate() {
		if (this.state.isLoading !== true) {
			this.getNewUser(this.state.newUser);
		}
	}

	render() {
		console.log("App state (render):", this.state);
		return (
			<div className="App">
				<header className="App-header">
					<UserSearch setNewUser={this.setNewUser} />
					{this.state.loading ? (
						<Loading />
					) : (
						<UserCard user={this.state.user} followers={this.state.followers} />
					)}
					{/* <UserCard user={this.state.user} followers={this.state.followers} /> */}
				</header>
			</div>
		);
	}
}

export default App;
