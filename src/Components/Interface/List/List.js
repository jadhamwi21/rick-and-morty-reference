import React, { useState, useContext } from "react";
import useCharactersList from "./useCharactersList.js";
import SearchForm from "./SearchForm.js";
import Classes from "./List.module.css";
import ListCharacters from "./ListCharacters.js";
import PaginationComponent from "./PaginationCompnent.js";

export default function List() {
	const [page, setPage] = useState(1);
	const [parameters, setParameters] = useState({
		name: "",
		status: "None",
		species: "",
		type: "",
		gender: "None",
	});
	const [inputs, setInputs] = useState({
		name: "",
		status: "None",
		species: "",
		type: "",
		gender: "None",
	});
	const { loading, data, totalPages, error } = useCharactersList(
		parameters,
		page
	);
	const handleOnChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setInputs({
			...inputs,
			[name]: value,
		});
	};
	const handleOnClick = (e) => {
		setPage(1);
		setParameters({
			...inputs,
		});
	};
	return (
		<div className={Classes.Container}>
			<SearchForm
				Inputs={inputs}
				handleOnChange={handleOnChange}
				handleOnClick={handleOnClick}
			/>
			<PaginationComponent
				setPage={setPage}
				page={page}
				totalPages={totalPages}
				classes={Classes.PaginationContainer}
			/>
			{loading && <div>Loading...</div>}
			{data && <ListCharacters data={data} />}
			{error && <div>{error}...</div>}
			<PaginationComponent
				setPage={setPage}
				page={page}
				totalPages={totalPages}
				classes={
					loading || error
						? [Classes.PaginationContainer, Classes.BottomHide].join(" ")
						: Classes.PaginationContainer
				}
			/>
		</div>
	);
}
