import axios from 'axios';

const token = localStorage.getItem("token");

const ajaxInstance = axios.create({
	baseURL: 'http://localhost:5000',
	headers: {
		"Authorization": `Bearer ${token}`
	}
});

export default ajaxInstance;
