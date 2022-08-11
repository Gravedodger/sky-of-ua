import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { ListOutlined, AddCircleOutline } from '@mui/icons-material';
import { useProjectContext} from "../../../contexts/ProjectContext";

function LabelBottomNavigation() {
	const { nav_value, changeNavValue } = useProjectContext();
	const handleChange = (event, newValue) => {
		changeNavValue(newValue);
	};

	return (
		<BottomNavigation showLabels value={nav_value} onChange={handleChange}>
			<BottomNavigationAction
				label="All Projects"
				value="ProjectList"
				icon={<ListOutlined />}
			/>
			<BottomNavigationAction
				label="Add Project"
				value="AddProject"
				icon={<AddCircleOutline />}
			/>
		</BottomNavigation>
	)
}

export default LabelBottomNavigation;
