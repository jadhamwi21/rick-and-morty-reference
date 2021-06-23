import React from "react";
import { interfaces } from "../../App.js";
import { Typography, Grid } from "@material-ui/core";
import Classes from "./Header.module.css";
export default function Header({ handleOnClick }) {
	return (
		<Grid
			component="div"
			alignItems="center"
			justify="center"
			className={Classes.Container}
			container
		>
			<Grid item>
				<Typography variant="h4" className={Classes.Text}>
					<div onClick={() => handleOnClick(interfaces.FEATURED)}>
						Rick And Morty Reference
					</div>
				</Typography>
			</Grid>
		</Grid>
	);
}
