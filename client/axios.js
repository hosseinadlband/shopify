import axios from 'axios'


// console.log(instance.defaults.headers['Access-Control-Allow-Origin'])
// instance.defaults.headers['Access-Control-Allow-Origin'] = true

const instance = axios.create({
    baseURL: 'http://127.0.0.1:8000',
    mode: 'same-origin',
    crossDomain: true,
    withCredentials: true,
})


// instance.defaults.headers['Access-Control-Allow-Headers'] = 'X-Csrf-Token'

instance.get('/auth/csrf/').then((res) => {
    instance.defaults.headers['X-CSRFToken'] = res.data.token
})

export default instance
