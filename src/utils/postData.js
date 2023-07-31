import axios from "axios"

const postData = async (url, options, token) => {
    return axios.post(url, options, {
        headers: {
            'Authorization': token
        }
    })
    .then(res => res)
    .catch(error => error)
}

export default postData