import { Grid, Card, Typography } from "@material-ui/core";
import Classes from "./Featured.module.css";
import AOS from "aos";
import statusRed from "../../../assets/statusButtonRed.svg";
import statusGreen from "../../../assets/statusButtonGreen.svg";
import statusGrey from "../../../assets/statusButtonGrey.svg";
import "aos/dist/aos.css";
import { useEffect, useContext } from "react";
import { ResponsiveContext, Screen } from "../../../App.js";
const getStatusSVG = (status) => {
	switch (status) {
		case "Alive":
			return statusGreen;
		case "Dead":
			return statusRed;
		case "unknown":
			return statusGrey;
	}
};
export default function CardsGrid({ data }) {
	useEffect(() => {
		AOS.init();
	}, []);
	const animationDurationIncrementer = (function () {
		let duration = 0;
		return function () {
			if (duration == 1200) {
				duration = 0;
			}
			duration += 400;
			return duration;
		};
	})();
	const DeviceScreens = useContext(ResponsiveContext);
	return (
		<div className={Classes.GridContainer}>
			<Grid
				container
				spacing="4"
				direction="row"
				justify="space-around"
				wrap="wrap"
				className={Classes.GridContainer}
			>
				{data.map((character, index) => {
					return (
						<Grid
							item
							component={Card}
							key={index}
							className={Classes.Card}
							data-aos="fade-in"
							data-aos-anchor-placement="center-bottom"
							data-aos-easing="ease-out"
							data-aos-offset="100"
							data-aos-duration={animationDurationIncrementer()}
							style={
								DeviceScreens
									? {
											textAlign: "center",
											wordBreak: "break-word",
											margin: "20px 0px",
									  }
									: { wordBreak: "break-word" }
							}
						>
							<div className={Classes.ImageContainer}>
								<img
									src={character.image}
									className={Classes.Image}
									draggable="false"
								/>
							</div>
							<Typography variant="body1" className={Classes.Text}>
								Name : {character.name}
							</Typography>
							<Typography variant="body1" className={Classes.Text}>
								Specie : {character.species}
							</Typography>
							<Typography variant="body1" className={Classes.Text}>
								Type : {character.type ? character.type : "unknown"}
							</Typography>
							<Typography variant="body1" className={Classes.Text}>
								Gender : {character.gender}
							</Typography>
							<Typography variant="body1" className={Classes.Text}>
								Status : {character.status}
								<span>
									<img
										src={getStatusSVG(character.status)}
										className={Classes.StatusButton}
									></img>
								</span>
							</Typography>
						</Grid>
					);
				})}
			</Grid>
		</div>
	);
}
