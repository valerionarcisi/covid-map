import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;
axios.defaults.transformResponse.push((data) => (data ? data.data : null));

export default axios;
