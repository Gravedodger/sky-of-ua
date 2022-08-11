import React, { useState, useEffect } from 'react';
import { Typography, TextField, Box, Button, Paper } from '@mui/material';
import { Edit } from '@mui/icons-material';
import BottomNav from './BottomNav';
import { useProjectContext } from "../../../contexts/ProjectContext";

function EditProjectEntry() {

	// input data
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [requiredAmount, setRequiredAmount] = useState("");
	const [collectedAmount, setCollectedAmount] = useState("");
	const [image, setImage] = useState("");

	// edit req
	const { updateProject, projectId } = useProjectContext();
	const data = JSON.stringify({
		"data": {
			"title": title,
			"description": description,
			"image": image,
			"requiredAmount": requiredAmount,
			"collectedAmount": collectedAmount
		}
	});

	const handleEditProject = () => {
		updateProject(projectId, data);
	};

	return (
		<Box
			component="form"
			sx={{
				'& .MuiTextField-root': { m: 1, width: '50ch' },
				display: 'flex',
				flexDirection: 'column'
			}}
			noValidate
			autoComplete="off"
		>
			<div>
				<Typography variant="h3" gutterBottom component="div">
					Edit Project entry
				</Typography>

				<TextField
					required
					id="filled-title"
					label="Title"
					variant="outlined"
					onChange={(e)=>setTitle(e.target.value)}
				/>

				<TextField
					required
					id="filled-description"
					label="Description"
					variant="outlined"
					onChange={(e)=>setDescription(e.target.value)}
				/>

				<TextField
					required
					id="filled-requiredAmount"
					label="Required amount"
					variant="outlined"
					onChange={(e)=>setRequiredAmount(e.target.value)}
				/>

				<TextField
					required
					id="filled-collectedAmount"
					label="Collected amount"
					variant="outlined"
					onChange={(e)=>setCollectedAmount(e.target.value)}
				/>

				<TextField
					required
					id="filled-image"
					label="Image"
					type="image"
					variant="outlined"
					onChange={(e)=>setImage(e.target.value)}
				/>
			</div>

			<div>
				<Button variant="outlined" onClick={handleEditProject} startIcon={<Edit />}>
					Edit Project Entry
				</Button>
			</div>

			<Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
				<BottomNav/>
			</Paper>
		</Box>
	)
}

export default EditProjectEntry;
