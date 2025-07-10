import { createContext, useContext } from 'react'

export const IsActiveContext = createContext(true)
export function useIsActive() {
  return useContext(IsActiveContext)
}
export function IsActiveProvider({
  children,
  myValue
}: {
  children: React.ReactNode
  myValue: boolean
}) {
  return (
    <IsActiveContext.Provider value={myValue}>
      {children}
    </IsActiveContext.Provider>
  )
}
