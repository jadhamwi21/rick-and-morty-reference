import React, { useState, useContext } from "react";
import ReactDOM from "react-dom";
import { Grid, Card, Avatar, Typography } from "@material-ui/core";
import Classes from "./List.module.css";
import { ResponsiveContext, Screen } from "../../../App.js";
export default function ListCharacters({ data }) {
	const [cardPopup, setCardPopup] = useState({
		open: false,
		selected_card: null,
	});
	const deviceScreens = useContext(ResponsiveContext);

	const handleOnClick = (character) => {
		setCardPopup({
			open: true,
			selected_card: (
				<div
					className={Classes.PopupOverlay}
					onClick={() => {
						setCardPopup({
							open: false,
							selected_card: null,
						});
					}}
				>
					<Card
						className={Classes.PopupCard}
						onClick={(e) => e.stopPropagation()}
					>
						<Avatar
							src={character.image}
							alt={character.name + " image"}
							variant="rounded"
							sizes="140px"
							className={Classes.Avatar}
							imgProps={{ draggable: false }}
						></Avatar>
						<Typography variant="body1" className={Classes.CardTitle}>
							Name : {character.name}
						</Typography>
						<Typography variant="body1" className={Classes.CardTitle}>
							Status : {character.status}
						</Typography>
						<Typography variant="body1" className={Classes.CardTitle}>
							Specie : {character.species}
						</Typography>
						<Typography variant="body1" className={Classes.CardTitle}>
							Type : {character.type ? character.type : "unknown"}
						</Typography>
						<Typography variant="body1" className={Classes.CardTitle}>
							Gender : {character.gender}
						</Typography>
					</Card>
				</div>
			),
		});
	};
	return (
		<Grid
			container
			spacing="5"
			className={Classes.CharactersGrid}
			justify="flex-start"
			alignItems="center"
			direction={deviceScreens[Screen.MOBILE] ? "column" : "row"}
		>
			{data.map((character) => {
				return (
					<Grid
						item
						component={Card}
						className={Classes.Card}
						key={character.id}
						onClick={() => handleOnClick(character)}
					>
						<Avatar
							src={character.image}
							alt={character.name + " image"}
							variant="rounded"
							sizes="140px"
							className={Classes.Avatar}
							imgProps={{ draggable: false }}
						></Avatar>
						<Typography variant="body1" className={Classes.CardTitle}>
							{character.name}
						</Typography>
					</Grid>
				);
			})}
			{cardPopup.open
				? ReactDOM.createPortal(
						cardPopup.selected_card,
						document.getElementById("portal")
				  )
				: null}
		</Grid>
	);
}
