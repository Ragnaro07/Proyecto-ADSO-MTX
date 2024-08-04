import axios from 'axios';

axios.defaults.baseURL = process.env.MIX_APP_URL || 'http://localhost:8000';
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

export default axios;
