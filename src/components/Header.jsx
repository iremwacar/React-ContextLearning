
import {useTheme} from "../context/ThemeContext"

function Header() {
    const {theme,setTheme} = useTheme();
  return (
    <div>
      Active Theme {theme}
      <br />
      <button onClick={()=>setTheme(theme === "Light" ? "Dark":"Light")}>Change Thame</button>
    </div>
  )
}

export default Header
