import React from 'react';
import ProjectList from "./ProjectList";
import CreateProjectEntry from "./CreateProjectEntry";
import EditProjectEntry from "./EditProjectEntry";
import { useProjectContext } from "../../../contexts/ProjectContext";

const ProjectsInterface = () => {
	const { nav_value } = useProjectContext();

	switch (nav_value) {
		case "ProjectList":
			return <ProjectList />
		case "AddProject":
			return <CreateProjectEntry />
		case "EditProject":
			return <EditProjectEntry />
		default:
			return <ProjectList />
	}
}

export default ProjectsInterface;
