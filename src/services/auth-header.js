export default function authHeader() {
    const token = localStorage.getItem('token');

    if (token) {
        return {Authorization: 'Bearer ' + token, 'ngrok-skip-browser-warning': true};
    } else {
        return {'ngrok-skip-browser-warning': true};
    }
}