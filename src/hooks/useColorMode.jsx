import { useEffect } from "react"
import useLocalStorage from "./useLocalStorage"

const useColorMode = () => {
    const [colorMode, setColorMode] = useLocalStorage('color-mode', 'default')
    
    useEffect(() => {
        const className = 'dark'
        const bodyClasses = window.document.body.classList
        if((colorMode === 'default') && window.matchMedia('(prefers-color-scheme: dark)').matches){
            setColorMode('dark')
        }
        if((colorMode === 'default') && !window.matchMedia('(prefers-color-scheme: dark)').matches){
            setColorMode('light')
        }
        colorMode === 'dark' ? bodyClasses.add(className) : bodyClasses.remove(className)
    }, [colorMode])

    return [colorMode, setColorMode]
}
export default useColorMode