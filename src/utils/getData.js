import axios from "axios"

const getData = async (url, token) => {
    return axios.get(url, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(res => res)
    .catch(error => error)
}

export default getData