import Axios from 'axios';

const api = Axios.create({ baseURL: process.env.ENV_LOCAL_API_URL });

export default api;
