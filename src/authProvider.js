import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_CHECK, AUTH_ERROR } from 'react-admin';

export default (type, params) => {
    if (type === AUTH_LOGIN) {
        const { username, password } = params;
        // console.log(params);
        // console.log(btoa(password));
        // fetch('http://10.74.18.242:4000/graphql',{
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({"query": "query  validate($email : String, $password : String){ isValidUser(email : $email, password : $password){ email, password, role, isValid } }",
        //         "operationName": "validate",
        //         "variables": {
        //             "email" : username,
        //             "password" : btoa(password)
        //         }
        //       }),
        // }).then(res => res.json())
        // .then(res => console.log(res.data));
        // alert('lol');
        localStorage.setItem('username', username);
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
    return Promise.reject('Unkown method');
};
