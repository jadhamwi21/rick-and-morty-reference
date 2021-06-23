import React, { useContext } from "react";
import { ResponsiveContext, interfaces, Screen } from "../../App.js";
import Classes from "./Sidebar.module.css";
import { List, ListItem, Typography } from "@material-ui/core";
export default function Sidebar({ handleOnClick }) {
	const DeviceScreens = useContext(ResponsiveContext);
	return (
		<div
			className={Classes.Container}
			style={
				DeviceScreens[Screen.TABLET]
					? { height: "fit-content", width: "100%" }
					: null
			}
		>
			<List component="div">
				<div onClick={() => handleOnClick(interfaces.FEATURED)}>
					<ListItem className={Classes.ListItem}>
						<Typography variant="h5" component="p">
							Featured
						</Typography>
					</ListItem>
				</div>
				<div onClick={() => handleOnClick(interfaces.LIST)}>
					<ListItem className={Classes.ListItem}>
						<Typography variant="h5" component="p">
							List
						</Typography>
					</ListItem>
				</div>
				<div onClick={() => handleOnClick(interfaces.ABOUT)}>
					<ListItem className={Classes.ListItem}>
						<Typography variant="h5" component="p">
							About
						</Typography>
					</ListItem>
				</div>
			</List>
			<Typography
				variant="h5"
				className={Classes.Footer}
				style={
					DeviceScreens[Screen.TABLET]
						? {
								display: "none",
						  }
						: null
				}
			>
				Developed By Jad
			</Typography>
		</div>
	);
}
