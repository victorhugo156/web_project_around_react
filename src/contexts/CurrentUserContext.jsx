import { createContext } from "react";

export const CurrentUserContext = createContext();

export function CurrentUserProvider({children, value}){


    return(
        <CurrentUserContext.Provider value={value}>

            {children}
        </CurrentUserContext.Provider>
    )
    
}
