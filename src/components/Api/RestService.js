import axios from 'axios';

const apiAuth = { username: 'wen',
                  password: 'comein22'};

const apiClient = axios.create(
    {
        baseURL: 'http://localhost:8081'
    }
);

const getCallWithAuth = (url) => { return apiClient.get(`${url}`, {auth: apiAuth});}

// export function retrieveHelloWorldBean(){
//     return apiClient.get('/test/hello-world-bean', {auth: apiAuth});
// }
/* both way are working */
export const retrieveHelloWorldBean 
    = () => { return getCallWithAuth('/test/hello-world-bean') }

export const retrieveHelloWorldBeanWithName
    = (name) => { return getCallWithAuth(`/test/hello-world/name/${name}`)}

export const retrieveTodosByName
    = (name) => { return getCallWithAuth(`/rest/users/${name}/todos`)} 