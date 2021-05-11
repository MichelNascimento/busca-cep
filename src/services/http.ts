import axios from 'axios'

const configuredAxios = axios.create({
  baseURL: 'https://viacep.com.br/ws',
  headers: { 'X-Requested-With': "XMLHttpRequest" }
})

export default configuredAxios