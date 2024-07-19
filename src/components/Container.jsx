import { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'

import Button from './Button'
import Header from './Header'



function Container() {
    const {theme} = useContext(ThemeContext);
    console.log(theme)
  return (
    <div className={`${theme === "Dark" ? theme: ""}`}>
      <Header/>
        <hr />
        <Button/>
    </div>
  )
}

export default Container
