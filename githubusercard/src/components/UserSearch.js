import React, { useState } from "react";

const UserSearch = (props) => {
	//console.log("UserSearch.js props:", props);
	const [formState, setFormState] = useState({
		user: "",
	});

	const changeHandler = (e) => {
		setFormState({
			[e.target.name]: e.target.value,
		});
	};

	const formSubmit = (e) => {
		e.preventDefault();
		props.setNewUser(formState.user);
		setFormState({
			user: "",
		});
	};
	return (
		<form onSubmit={formSubmit}>
			<h2>Search for a Github user!</h2>
			<label htmlFor="user">User:</label>
			<input
				name="user"
				placeholder="Search for someone..."
				value={formState.user}
				onChange={changeHandler}
			/>
			<button>Submit</button>
		</form>
	);
};

export default UserSearch;
