import React, { createContext, useState } from 'react'

interface Props {
    children: React.ReactNode
}

export const UserContext = createContext<any>(null);

export const UserProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState({
    auth: ''
  })

  return (
    <UserContext.Provider value={[user, setUser]} >
      {children}
    </UserContext.Provider>
  )

}