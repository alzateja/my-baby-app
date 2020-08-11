import React, {ReactNode} from 'react'
import AppContext, {defaultAppContext} from '../../context/AppContext'


export interface AppContextProviderProps  {
    children: ReactNode
 }

const AppContextProvider = ({children}:AppContextProviderProps) =>(
    <AppContext.Provider value={defaultAppContext}>
       {children}
    </AppContext.Provider>
)

export default AppContextProvider
