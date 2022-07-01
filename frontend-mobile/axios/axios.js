import axios from 'axios'
import { ip_addr } from './ip_addr'

const axiosBaseURI = axios.create({
  baseURL: `http://${ip_addr}:3001/api/customers`,
})

export default axiosBaseURI
