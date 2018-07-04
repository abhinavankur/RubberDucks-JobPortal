import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_CHECK, AUTH_ERROR, AUTH_GET_PERMISSIONS } from 'react-admin';
import { log } from 'util';
import axios from 'axios';
 

export default (type, params) => {
    if (type === AUTH_LOGIN) {
        const { username, password } = params;
        return axios.post('http://10.74.18.242:4000/graphql',{"query": "query  validate($email : String, $password : String){ isValidUser(email : $email, password : $password){  email, password, role, isValid } }",
        "operationName": "validate",
        "variables": {
            "email" : username,
            "password" : btoa(password)
         }
        }).then(function (response) {
            console.log(response)
            if(response.data.data.isValidUser){
                console.log('correct')
                localStorage.setItem('username', username);
                localStorage.setItem('role', response.data.data.isValidUser.role);
                console.log('set items')
            }else{
                return Promise.reject('Login Failed');
            }
        });
        return Promise.resolve();      
    }
    if (type === AUTH_LOGOUT) {
        localStorage.removeItem('username');
        return Promise.resolve();
    }
    if (type === AUTH_ERROR) {
        return Promise.resolve();
    }
    if (type === AUTH_CHECK) {
        return localStorage.getItem('username')
            ? Promise.resolve()
            : Promise.reject();
    }
    if (type === AUTH_GET_PERMISSIONS) {
        const role = localStorage.getItem('role');
        return role ? Promise.resolve(role) : Promise.reject();
    }
    return Promise.reject('Unkown method');
};
