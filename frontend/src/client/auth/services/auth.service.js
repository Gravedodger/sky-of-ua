import axios from 'axios';
import BaseHttpService from "../../services/base-http-service";

export default class AuthService extends BaseHttpService {
  async signIn({ email, password }) {
    // https://data.mongodb-api.com/app/data-uvxvx/endpoint/data/v1

    const { data } = await axios.post(`${this.BASE_URL}/api/v1/auth/signin`, {
      email,
      password,
    });
    this.saveToken(data);
    return data;
  }

  async signUp({ email, password }) {
    await axios.post(`${this.BASE_URL}/auth/signup`, { email, password });
  }

  signOut() {
    return this.removeToken();
  }
}
