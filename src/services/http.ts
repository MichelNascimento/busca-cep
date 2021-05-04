import axios from 'axios'

const configuredAxios = axios.create({
  baseURL: 'https://viacep.com.br/ws'
})

export default configuredAxios