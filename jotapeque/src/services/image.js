import axios from 'axios'

const baseUrl = 'http://localhost:3003'


export const addImage = async (body) => {
    const token = localStorage.getItem('token')
    const config = {headers: {Authorization: token}}
    // console.log(`[addImage]: [body]:`, body)
    // console.log(`[addImage]: [token]:`, token)
    // console.log(`[addImage]: [config]:`, config)
    try {
        return await axios.post(`${baseUrl}/image`, body, config)
        .then(response => {
            console.log('addImage | try response', response)
            const result = {status: response.status, message: response.data.message}
            return result
        })
        .catch(error => {
            console.log('addImage | try error', error.response)
            const result = {status: error.response.status, message: error.response.data.message}
            return result
        })
    } catch (error) {
        console.log({func:'addImage | catch error', error})
        return false
    }
}


export const getImageAll = async () => {
    const token = localStorage.getItem('token')
    // const token = 'banana'
    const config = {headers: {Authorization: token}}
    try {
        return await axios.get(`${baseUrl}/image/all`, config)
            .then(response => {
                // console.log(`[getImageAll]: [try response]:`, response)
                const result = {status: response.status, data: response.data}
                return result
            })
            .catch(error => {
                // console.log(`[getImageAll]: [try error]:`, error.response)
                const result = {status: error.response.status, message: error.response.data.message || error}
                return result
            })
    } catch (error) {
        // console.log(`[getImageAll]: [catch error]:`, error.response)
        return error
    }
}