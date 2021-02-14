import axios from 'axios';


const instance = axios.create ({
    baseURL: 'https://burger-creater-45bb8.firebaseio.com/'
});


export default instance;