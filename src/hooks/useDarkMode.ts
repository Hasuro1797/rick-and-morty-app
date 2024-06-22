/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react'

const useDarkMode = (): [string, ((isSelected: boolean) => void) | undefined]  => {
  const [theme, setTheme] = useState(() => {
    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
      return "dark"
    } 
    return "light"
  })

  useEffect(() => {
    if(theme === 'dark'){
      document.querySelector('html')?.classList.add('dark')
    }else {
      document.querySelector('html')?.classList.remove('dark')
    }
  }, [theme])

  const changeTheme = (_isSelected: boolean): void => {
    setTheme((previusTheme) => previusTheme === "light" ? "dark" : "light")
  }
  
  return [theme,changeTheme]
}

export default useDarkMode
