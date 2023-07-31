import axios from "axios"

const patchData = async (url, options, token) => {
    return axios.patch(url, options, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(res => res)
    .catch(error => error)
}

export default patchData