import request from './http'

export const GetZipCode = async (zipCode: string): Promise<any> => {
  return new Promise((resolve) => {
    try {
      request(`/${zipCode}/json`)
        .then(response => {
          resolve(response.data)
        })
    } catch (error) {
      console.log('Error fetching zip code: ', error)
    }
  })
}