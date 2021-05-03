import request from './http'

const GetZipCode = async(zipCode: Number) => {
  try {
    await request({
      method: 'GET',
      url: `/${zipCode}/json`
    })
      .then(response => response.data)
  } catch (error) {
    console.log('Erro ao buscar ZipCode: ', error)
  }
}

export default GetZipCode