import React, { useContext } from "react";
import { FormControl, TextField, MenuItem, Button } from "@material-ui/core";
import { ResponsiveContext, Screen } from "../../../App.js";
import Classes from "./List.module.css";
export default function SearchForm({ Inputs, handleOnChange, handleOnClick }) {
	const deviceScreens = useContext(ResponsiveContext);
	return (
		<FormControl>
			<form autoComplete="off">
				<div className={Classes.FormWrapper}>
					<TextField
						className={Classes.TextField}
						variant="filled"
						label="Name"
						name="name"
						onChange={handleOnChange}
						value={Inputs.name}
					/>
					<TextField
						id="select"
						label="Status"
						value={Inputs.status}
						select
						variant="filled"
						onChange={handleOnChange}
						className={Classes.TextField}
						name="status"
					>
						<MenuItem value="None">None</MenuItem>
						<MenuItem value="Alive">Alive</MenuItem>
						<MenuItem value="Dead">Dead</MenuItem>
						<MenuItem value="unknown">unknown</MenuItem>
					</TextField>

					<TextField
						variant="filled"
						label="Specie"
						className={Classes.TextField}
						name="species"
						onChange={handleOnChange}
						value={Inputs.species}
					/>
					<TextField
						className={Classes.TextField}
						variant="filled"
						label="Type"
						name="type"
						onChange={handleOnChange}
						value={Inputs.type}
					/>

					<TextField
						id="select"
						label="Gender"
						value={Inputs.gender}
						select
						onChange={handleOnChange}
						variant="filled"
						className={Classes.TextField}
						name="gender"
					>
						<MenuItem value="None">None</MenuItem>
						<MenuItem value="Male">Male</MenuItem>
						<MenuItem value="Female">Female</MenuItem>
						<MenuItem value="Genderless">Genderless</MenuItem>
						<MenuItem value="unknown">Unknown</MenuItem>
					</TextField>
				</div>
			</form>

			<div className={Classes.SearchButton}>
				<Button variant="contained" onClick={handleOnClick}>
					Search
				</Button>
			</div>
		</FormControl>
	);
}
