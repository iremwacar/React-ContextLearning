
import {useTheme} from '../context/ThemeContext'

import Button from './Button'
import Header from './Header'
import Profile from './Profile';



function Container() {
    const {theme} = useTheme();
    console.log(theme)
  return (
    <div className={`${theme === "Dark" ? theme: ""}`}>
      <Header/>
        <hr />
        <Button/>
        <hr />
        <Profile/>
    </div>
  )
}

export default Container
