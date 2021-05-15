import { createContext, useState, ReactNode } from 'react'

type AddressProps = {
  street: string
  zipCode: string
  district: string
  locality: string
  state: string
}

type ZipCodeProps = {
  address: AddressProps
  setData: (addressData: AddressProps) => void
}

type ZipCodeContextProviderProps = {
  children: ReactNode
}

export const ZipCodeContext = createContext({} as ZipCodeProps)

export const ZipCodeContextProvider: React.FC<ZipCodeContextProviderProps> = ({ children }) => {
  const [address, setAddress] = useState({
    street: '',
    zipCode: '',
    district: '',
    locality: '',
    state: '',
  })

  const setData = (addressData: AddressProps) => {
    setAddress(prev => ({ ...prev, ...addressData }))
  }

  return (
    <ZipCodeContext.Provider value={{ address, setData }}>
      {children}
    </ZipCodeContext.Provider>
  )
}