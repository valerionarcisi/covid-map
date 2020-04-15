import axios from 'axios';

axios.defaults.baseURL = process.env.API_BASE_URL;
axios.defaults.transformResponse.push((data) => (data ? data.data : null));

export default axios;
