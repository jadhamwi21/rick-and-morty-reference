import React, { useContext } from "react";
import { Pagination } from "@material-ui/lab";
import { Container } from "@material-ui/core";
import Classes from "./List.module.css";
import { ResponsiveContext, Screen } from "../../../App.js";
export default function PaginationComponent({
	setPage,
	page,
	totalPages,
	classes,
}) {
	const deviceScreens = useContext(ResponsiveContext);
	return (
		<div className={Classes.PaginationWrapper}>
			<Pagination
				variant="rounded"
				count={totalPages}
				page={page}
				hideNextButton={deviceScreens[Screen.MOBILE] ? true : false}
				hidePrevButton={deviceScreens[Screen.MOBILE] ? true : false}
				onChange={(_, number) => setPage(number)}
			/>
		</div>
	);
}
