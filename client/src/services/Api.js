/* Connector to the backend */
import axios from 'axios'

export default () => {
  return axios.create({
    // baseURL: `http://localhost:8081`
    baseURL: ``
    // baseURL: `http://ec2-52-202-79-225.compute-1.amazonaws.com:8080`
  })
}
