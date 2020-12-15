import React, {createContext, useState, useContext} from 'react';

const CurrentContext = createContext();

export const CurrentContextComponent = ({children}) => {

    const [current, setCurrent] = useState(`current`);
    
    return(
        <CurrentContext.Provider value={{current: current, setCurrent: setCurrent}}>
            {children}
        </CurrentContext.Provider>
    )
}

export const useCurrentContext = () => useContext(CurrentContext);
