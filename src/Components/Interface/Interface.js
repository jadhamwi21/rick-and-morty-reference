import React, { useContext } from "react";
import { interfaces, ResponsiveContext, Screen } from "../../App.js";
import Classes from "./Interface.module.css";
import Featured from "./Featured/Featured.js";
import List from "./List/List.js";
import About from "./About/About.js";
const chooseComponent = (type) => {
	switch (type) {
		case interfaces.FEATURED:
			return <Featured />;
		case interfaces.LIST:
			return <List />;
		case interfaces.ABOUT:
			return <About />;
	}
};
export default function Interface({ AppState }) {
	const visibleComponent = chooseComponent(AppState);
	const DeviceScreens = useContext(ResponsiveContext);
	return (
		<div
			className={Classes.Container}
			style={
				DeviceScreens[Screen.MOBILE]
					? { height: "auto", paddingBottom: "40px" }
					: null
			}
		>
			{visibleComponent}
		</div>
	);
}
