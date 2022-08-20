import axios from "axios";

export default class BaseHttpService {
	BASE_URL = "http://localhost:5000";
	_accessToken = null;
	_refreshToken = null;
	_expiresIn = null;

	async get(endpoint = "", options = {}) {
		Object.assign(options, this._getCommonOptions());
		return axios
			.get(`${this.BASE_URL}/${endpoint}`, options)
			.then((res) => res.data)
			.catch((error) => this._handleHttpError(error));
	}

	async post(endpoint = "", data = {}, options = {}) {
		Object.assign(options, this._getCommonOptions());
		return axios
			.post(`${this.BASE_URL}/${endpoint}`, data, options)
			.then((res) => res.data)
			.catch((error) => this._handleHttpError(error));
	}

	async put(endpoint = "", data = {}, options = {}) {
		Object.assign(options, this._getCommonOptions());
		return axios
			.put(`${this.BASE_URL}/${endpoint}`, data, options)
			.catch((error) => this._handleHttpError(error));
	}

	async delete(endpoint = "", options = {}) {
		Object.assign(options, this._getCommonOptions());
		return axios
			.delete(`${this.BASE_URL}/${endpoint}`, options)
			.then((res) => res.data)
			.catch((error) => this._handleHttpError(error));
	}

	async patch(endpoint = "", data = {}, options = {}) {
		Object.assign(options, this._getCommonOptions());
		return axios
			.patch(`${this.BASE_URL}/${endpoint}`, data, options)
			.catch((error) => this._handleHttpError(error));
	}

	_handleHttpError(error) {
		const { statusCode } = error.response.data;
		if (statusCode !== 401) {
			throw error;
		} else {
			return this._handle401();
		}
	}

	_handle401 = () => {
		this._accessToken = null;
		this._refreshToken = null;
		this._expiresIn = null;
		this.removeToken();
		window.location.replace("/");
	};

	_getCommonOptions = () => {
		const { accessToken } = this.loadToken();

		return {
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
		};
	};

	get accessToken() {
		return this._accessToken ? this._accessToken : this.loadToken();
	}

	saveToken = (data) => {
		const { accessToken, expiresIn, refreshToken } = data;
		this._accessToken = accessToken;
		this._refreshToken = refreshToken;
		this._expiresIn = expiresIn;

		localStorage.setItem("accessToken", accessToken);
		localStorage.setItem("refreshToken", refreshToken);
		localStorage.setItem("expiresIn", expiresIn);

		return {
			accessToken,
			refreshToken,
			expiresIn,
		};
	};

	loadToken() {
		const accessToken = localStorage.getItem("accessToken");
		const refreshToken = localStorage.getItem("refreshToken");
		const expiresIn = localStorage.getItem("expiresIn");

		this._accessToken = accessToken;
		this._refreshToken = refreshToken;
		this._expiresIn = expiresIn;

		return {
			accessToken,
			refreshToken,
			expiresIn,
		};
	}

	removeToken = () => {
		localStorage.removeItem("accessToken");
		localStorage.removeItem("refreshToken");
		localStorage.removeItem("expiresIn");
	};
};
