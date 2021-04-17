import request from './http'

export default async function GetCep(cep: Number) {
  try {
    await request({
      method: 'GET',
      url: `/${cep}/json`
    })
      .then(response => console.log(response.data))
  } catch (error) {
    console.log('Erro ao buscar cep: ', error)
  }
}