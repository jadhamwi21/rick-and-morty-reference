import React, { useState } from "react";
import { createMuiTheme, ThemeProvider, Grid } from "@material-ui/core";
import Header from "./Components/Header/Header.js";
import Sidebar from "./Components/Sidebar/Sidebar.js";
import Interface from "./Components/Interface/Interface.js";
import Styles from "./app.module.css";
import useMediaQuery from "@material-ui/core/useMediaQuery";
// enum Object to Refer To the app available interfaces
export const interfaces = {
	FEATURED: "featured",
	LIST: "list",
	ABOUT: "about",
};
export const Screen = {
	MOBILE: 0,
	TABLET: 1,
	LAPTOP: 2,
	DESKTOP: 3,
};
const theme = createMuiTheme({
	typography: {
		fontFamily: ["Viga", "sans-serif"].join(","),
	},
	breakpoints: {
		values: { mobile: 550, tablet: 900, laptop: 1024, desktop: 1200 },
	},
});

export const ResponsiveContext = React.createContext();
export default function App() {
	const [state, setState] = useState({
		current_Interface: interfaces.FEATURED,
	});
	const handleOnClick = (choosenInterface) => {
		setState({ current_Interface: choosenInterface });
	};
	const mobile = useMediaQuery(
		theme.breakpoints.down(theme.breakpoints.values.mobile)
	);
	const tablet = useMediaQuery(
		theme.breakpoints.down(theme.breakpoints.values.tablet)
	);
	const laptop = useMediaQuery(
		theme.breakpoints.down(theme.breakpoints.values.laptop)
	);
	const desktop = useMediaQuery(
		theme.breakpoints.down(theme.breakpoints.values.desktop)
	);
	const DeviceScreens = [mobile, tablet, laptop, desktop];
	return (
		<ThemeProvider theme={theme}>
			<ResponsiveContext.Provider value={DeviceScreens}>
				<Header handleOnClick={handleOnClick} />
				<div
					style={
						DeviceScreens[Screen.TABLET]
							? { flexDirection: "column", flexWrap: "nowrap" }
							: null
					}
					className={Styles.AppContainer}
				>
					<Sidebar handleOnClick={handleOnClick} />

					<Interface
						AppState={state.current_Interface}
						handleOnClick={handleOnClick}
					/>
				</div>
			</ResponsiveContext.Provider>
		</ThemeProvider>
	);
}
