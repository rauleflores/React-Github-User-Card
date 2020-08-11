import { makeStyles } from "@material-ui/core";

export const UseStyles = makeStyles({
	userCard: {
		margin: "5%",
		padding: "10px",
		backgroundColor: "#702963",
		display: "flex",
		justifyContent: "center",
		alignContent: "center",
		height: "300px",
		width: "750px",
	},
	image: {
		width: "125px",
		height: "125px",
		margin: "auto",
	},
	infoDiv: {
		width: "29%",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignContent: "center",
	},
	bioDiv: {
		width: "70%",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignContent: "center",
	},
	followersDiv: {
		width: "80%",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignContent: "center",
	},
	followersCard: {
		height: "325px",
		width: "200px",
		margin: "auto",
		marginTop: "50px",
		padding: "15px",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignContent: "center",
		backgroundColor: "#b784a7",
	},
});
