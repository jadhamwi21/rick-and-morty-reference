import React from "react";
import { Typography } from "@material-ui/core";
import Classes from "./About.module.css";
export default function About() {
	return (
		<div>
			<div className={Classes.Container}>
				<Typography variant="h5" className={Classes.Typography} color="primary">
					The Rick and Morty Wiki is an unofficial collaborative database for
					the hit [adult swim] series Rick and Morty, a science-fiction, black
					comedy series about genius inventory, Rick Sanchez, and his naive
					grandson, Morty Smith. The American animated television show is
					created by Justin Roiland and Dan Harmon. It premiered on Cartoon
					Network's [adult swim] block on December 2, 2013. This wiki was
					founded on December 9, 2013‎ and currently has 1,744 articles! The
					wiki format allows anyone to create or edit any article, and we
					welcome any contributors. Further questions? Contact one of our
					administrators listed here.
				</Typography>
			</div>
		</div>
	);
}
