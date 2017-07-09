export const CONFIG = {
    headers: {
        'Content-Type': 'application/json',
        'X-Api-Key': 'AbCdEfGhIjK1'
    }
};

export const AUTH_CONFIG = (token) => {
    return {
        headers: {
            'Content-Type': 'application/json',
            'X-Api-Key': 'AbCdEfGhIjK1',
            'X-Auth-Token': token
        }
    };
};

export const API_ENDPOINT = 'http://localhost:9000/api/v1/';
//export const API_ENDPOINT = 'http://192.168.17.220:9000/api/v1/';







