import React, { useState } from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import { IconButton, ListItem } from '@mui/material';
import { DeleteOutline, Edit, ExpandMore, ExpandLess, LabelImportantOutlined } from '@mui/icons-material';
import { useProjectContext } from "../../../contexts/ProjectContext";

function ProjectListItem({ projectType, id, projectFieldData }) {
	const [open, setOpen] = useState(true);
	const [deleteProject, changeNavValue, getProjectId] = useProjectContext();

	const handleClick = () => {
		setOpen(!open);
	};

	const handleEditButton = () => {
		getProjectId(id);
		changeNavValue("EditProject");
	};

	return (
		<List sx={{ width: '100%', bgcolor: 'background.paper' }}>
			<ListItem secondaryAction={
				<>
					<IconButton onClick={handleEditButton} edge={end} aria-label="edit">
						<Edit sx={{ color: 'green' }}/>
					</IconButton>
					<IconButton onClick={()=>deleteProject(id)} edge="end" aria-label="delete" sx={{ padding: 2}}>
						<DeleteOutline color="secondary" />
					</IconButton>
				</>
			}
			>

				<ListItemButton disableRipple onClick={handleClick}>
					<ListItemIcon>
						<LabelImportantOutlined />
					</ListItemIcon>
					<ListItemText
						primary={projectType}
						secondary="Title, Description, Required amount, Collected amount"
					/>
					{open ? <ExpandLess /> : <ExpandMore />}
				</ListItemButton>
			</ListItem>

			<Collapse in={open} timeout="auto" unmountOnExit>
				<List component="div" disablePadding>
					{
						projectFieldData.map((item, i)=>(
							<ListItemButton key={i} disableRipple sx={{ pl: 9 }}>
								<ListItemIcon>
									{item.icon}
								</ListItemIcon>
								<ListItemText primary={item.attrib} />
							</ListItemButton>
						))
					}
				</List>
			</Collapse>
		</List>
	)
}

export default ProjectListItem;
