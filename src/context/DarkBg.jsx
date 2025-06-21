import { createContext, useContext, useState } from "react";

const DarkBg = createContext()

const DarkBgProvider = ( {children} ) => {
    const [darken, setDarken] = useState(false)
    
    return (
        <DarkBg.Provider value={ { darken, setDarken } }> 
            {children}
        </DarkBg.Provider>
    )
}

export const useDarkBg = () => useContext(DarkBg);
export default DarkBgProvider;
