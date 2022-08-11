import React, { createContext, useContext, useEffect, useState } from "react";
import http from "../helpers/http";

const ProjectContext = createContext();

export const useProjectContext = () => {
	return useContext(ProjectContext);
}

export const ProjectProvider = ({children}) => {
	const [projects,setProjects] = useState("");
	const [nav_value, set_nav_value] = useState("ProjectsList");
	const [projectId, setProjectId] = useState("");

	// add new project
	const createNewProject = async (data) => {
		await http.post("/api/projects", data);
	};

	// update a project entry
	const updateProject = async (projectId, data) => {
		await http.put(`/api/projects/${projectId}`, data);
	};

	// delete a project entry
	const deleteProject = async (projectId) => {
		await http.delete(`/api/projects/${projectId}`);
	};

	// change navigation value
	const changeNavValue = (value) => {
		set_nav_value(value);
	};

	// get project id value
	const getProjectId = (id) => {
		setProjectId(id);
	};

	useEffect(() => {
		const readAllProjects = async () => {
			const response = await http.get("/api/projects");
			const responseArr = Object.values(response.data.data);
			setProjects(responseArr);
		};

		return readAllProjects;
	}, []);

	const value = {
		createNewProject,
		projects,
		updateProject,
		deleteProject,
		changeNavValue,
		nav_value,
		getProjectId,
		projectId
	};

	return(
		<ProjectContext.Provider value={value}>
			{children}
		</ProjectContext.Provider>
	)
};
