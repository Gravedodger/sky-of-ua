import React, { useState, useEffect } from 'react';
import {v4} from "uuid";
import ajaxInstance from "../../../ajax/ajax";
import FormAddProject from "../FormAddProject";
import ProjectsList from "../ProjectList/ProjectList";
import ProjectsService from "../../services/projects.service";

import './ProjectsList.scss';

const service = new ProjectsService();

const ProjectsList = () => {
    const [list, setList] = useState([]);

    useEffect(async ()=>{
        const data = await service.getAllProjects();
        setList(data.result);
        ajaxInstance.get("/projects")
          .then(({data}) => setList(data.result))
          .catch(err => console.log(err));
    }, []);

    const addProject = async (text)=> {
        const newProject = {
            text,
            status: "in-progress"
        };

        const data = await service.addProject(newProject);
        if(data.status === "Success") {
            setList([...list, data.result]);
        }
    }

    const removeProject = async (_id, idx)=> {
        const data = await service.removeProject(_id);
        if(data.status === "Success") {
            const newList = [...list.slice(0, idx), ...list.slice(idx + 1)];
            setList(newList);
        }
    };

    const toggleProjectStatus = (idx)=> {
        const newList = list.map(item => ({...item}));
        const project = newList[idx];
        const newStatus = (project.status === "done") ? "in-progress" : "done";
        newList[idx].status = newStatus;
        setList(newList);
    };

    const listActions = {
        removeProject,
        toggleProjectStatus
    };

    return (
        <div className="tasker">
            <FormAddProject addTask={addProject} />
            <ProjectsList list={list} {...listActions} />
        </div>
    );
};

export default ProjectsList;
