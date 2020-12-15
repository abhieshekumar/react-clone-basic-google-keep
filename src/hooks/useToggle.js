// used to toggle displays, it returns a boolean value and a setter function

import {useState} from 'react';

export const useToggle = (initial=false) => {
    
    const [toggle, setToggle] = useState(initial);
    const switchToggle = (()=>{
        setToggle((prevToggle) => {
            return !prevToggle;
        })
    })

    const forceToggle = (state) => {setToggle(state)}

    return [toggle, switchToggle, forceToggle];
}