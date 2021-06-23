import React, { useState, useEffect } from "react";
import axios from "axios";
import CardsGrid from "./CardsGrid.js";
import { Typography } from "@material-ui/core";
import { API_baseurl } from "../../../API/API.js";

const swap = (i, j, arr) => {
	let temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
};
export default function Featured() {
	const [data, setData] = useState(false);
	useEffect(() => {
		axios
			.get(API_baseurl, {
				params: {
					page: Math.floor(Math.random() * 34 + 1),
				},
			})
			.then((response) => {
				const {
					data: { results },
				} = response;
				for (let i = results.length - 1; i > 0; i--) {
					const randIndex = Math.floor(Math.random() * i);
					swap(i, randIndex, results);
				}
				const modifiedResults = results.slice(0, 9);
				setData(modifiedResults);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);
	return data ? (
		<CardsGrid data={data} />
	) : (
		<Typography variant="h4">Loading...</Typography>
	);
}
