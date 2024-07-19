import { useContext } from "react"
import ThemeContext from "../context/ThemeContext"

function Header() {
    const {theme,setTheme} = useContext(ThemeContext);
  return (
    <div>
      Active Theme {theme}
      <br />
      <button onClick={()=>setTheme(theme === "Light" ? "Dark":"Light")}>Change Thame</button>
    </div>
  )
}

export default Header
