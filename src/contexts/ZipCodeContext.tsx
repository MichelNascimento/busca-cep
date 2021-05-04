import { createContext, useState, ReactNode } from 'react'

type ResultProps = {
  street: string
  zipCode: number
  district: string
  address: string
  locality: string
  state: string
}

export const ZipCodeContext = createContext({} as ResultProps)

type ZipCodeContextProviderProps = {
  children: ReactNode
}

export function ZipCodeContextProvider(props: ZipCodeContextProviderProps) {  
  const [street, setStreet] = useState('')
  const [zipCode, setZipCode] = useState(0)
  const [district, setDistrict] = useState('')
  const [locality, setLocality] = useState('')
  const [address, setAddress] = useState('')
  const [state, setState] = useState('')

  return (
    <ZipCodeContext.Provider value={{
      street,
      zipCode,
      district,
      locality,
      address,
      state
    }}>
      {props.children}
    </ZipCodeContext.Provider>
  )
}