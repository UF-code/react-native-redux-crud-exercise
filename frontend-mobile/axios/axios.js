import axios from 'axios'

const axiosBaseURI = axios.create({
  baseURL: `http://192.168.1.102:3001/api/customers`,
})

export default axiosBaseURI
