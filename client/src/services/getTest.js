import axios from 'axios';

export function getTest() {
    return axios.get('http://127.0.0.1:8000/api/list/?format=json');
}
