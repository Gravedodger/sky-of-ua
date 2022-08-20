import BaseHttpService from "../../services/base-http-service";

export default class ProjectsService extends BaseHttpService {
    _endpoint = "projects";

    async getAllProjects() {
        const data = await this.get(this._endpoint);
        return data;
    }

    async addProject({text, status = "in-progress"}){
        const newProject = {text, status};
        const data = await this.post(this._endpoint, newProject);
        return data;
    }

    async removeTask(_id){
        const data = await this.delete(`${this._endpoint}/${_id}`);
        return data;
    }
}
