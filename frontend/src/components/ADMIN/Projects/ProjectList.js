import React from "react";
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Paper from '@mui/material/Paper';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNav from './BottomNav';
import ProjectListItem from './ProjectListItem';
import { useProjectContext} from "../../../contexts/ProjectContext";
import { PersonOutline, ListOutlined, LocationOn, PunchClockOutlined, TransgenderOutlined } from '@mui/icons-material';

function ProjectList() {
	const { projects } = useProjectContext();

	return (
		<Box sx={{ pb: 7 }}>
			<CssBaseline />

			<List>
				{
					projects && projects.map(
						({id, attributes: { title, description, image, requiredAmount, collectedAmount }}, i) => (
							<ProjectListItem
								key={i}
								id={id}
								projectFieldData={[
									{icon: <PersonOutline/>, attrib: name},
									{icon: <ListOutlined/>, attrib: image},
									{icon: <LocationOn/>, attrib: location},
									{icon: <PunchClockOutlined/>, attrib: requiredAmount},
									{icon: <TransgenderOutlined/>, attrib: collectedAmount}
								]}
							/>
						)
					)
				}
			</List>

			<Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
				<BottomNav/>
			</Paper>

		</Box>
	)
}

export default ProjectList;
