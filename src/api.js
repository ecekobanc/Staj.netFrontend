import VueCookie from 'vue-cookies';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080';

export default{
    async execute(method, resource, body){
        return axios({
            method: method,
            headers:{
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${VueCookie.get('access_token')}`
            },
            url: resource,
            data: body
        });
    },
    async login(data){
        return this.execute('post', '/auth/login', data);
    },
    async getUser(username){
        return this.execute('get', '/user/' + username, {});
    },
    async getUsers(){
        return this.execute('get', '/user', {});
    }
}