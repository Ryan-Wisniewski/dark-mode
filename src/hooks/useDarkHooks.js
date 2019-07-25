import React, {useEffect} from 'react'
import {useLocalStorage} from './useLocalStorage'

function useDarkMode(){
    const [mode, setMode] = useLocalStorage('dark-mode')
    useEffect(()=>{
        if (mode){
            document.querySelector('body').classList.add('dark-mode')
        }else {
            document.querySelector('body').classList.remove('dark-mode')
        }
    },[mode])
    return [mode, setMode]
}

export default useDarkMode