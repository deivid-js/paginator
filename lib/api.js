const JWT_TOKEN_NAME = '@BOB_WAITER/token';

const api = axios.create({
    baseURL: 'http://192.168.0.105/api/bobwaiter/v1/',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*'
    }
});

if (localStorage.getItem(JWT_TOKEN_NAME)) {
    api.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem(JWT_TOKEN_NAME)}`;
}
