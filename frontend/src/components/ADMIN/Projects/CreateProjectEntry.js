import React, { useState } from 'react';
import { Typography, TextField, Box, Button, Paper } from '@mui/material';
import { Add } from '@mui/icons-material';
import BottomNav from './BottomNav';
import { useProjectContext} from "../../../contexts/ProjectContext";

function CreateProjectEntry() {

	// input data
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [image, setImage] = useState("");
	const [requiredAmount, setRequiredAmount] = useState("");
	const [collectedAmount, setCollectedAmount] = useState("");

	// axios
	const { createNewProject } = useProjectContext();
	const data = JSON.stringify({
		"data": {
			"title": title,
			"description": description,
			"image": image,
			"requiredAmount": requiredAmount,
			"collectedAmount": collectedAmount,
		}
	})

	const handleCreateNewProject = () => {
		createNewProject(data);
	};

	return (
		<Box
			component="form"
			sx={{'& .MuiTextField-root': { m: 1, width: '50ch' }, display: 'flex', flexDirection: 'column'}}
			noValidate
			autoComplete="off"
		>
			<div>
				<Typography variant="h3" gutterBottom component="div">
					Add new Project entry
				</Typography>

				<TextField
					required
					id="filled-title"
					label="Title"
					variant="filled"
					onChange={(e)=>setTitle(e.target.value)}
				/>

				<TextField
					required
					id="filled-description"
					label="Description"
					variant="filled"
					onChange={(e)=>setDescription(e.target.value)}
				/>

				<TextField
					required
					id="filled-image"
					label="Image"
					variant="filled"
					onChange={(e)=>setImage(e.target.value)}
				/>

				<TextField
					required
					id="filled-requiredAmount"
					label="Required amount"
					variant="filled"
					onChange={(e)=>setRequiredAmount(e.target.value)}
				/>

				<TextField
					required
					id="filled-collectedAmount"
					label="Collected amount"
					type="number"
					variant="filled"
					onChange={(e)=>setCollectedAmount(e.target.value)}
				/>
			</div>

			<div>
				<Button onClick={handleCreateNewProject} variant="outlined" startIcon={<Add />}>
					Add Project Entry
				</Button>
			</div>

			<Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
				<BottomNav/>
			</Paper>

		</Box>
	);
}

export default CreateProjectEntry;
