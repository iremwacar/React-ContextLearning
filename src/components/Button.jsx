
import {useTheme} from "../context/ThemeContext"


function Button() {
    const {theme,setTheme} = useTheme();
    
  return (
    <div>
      Active Theme: {theme}
      <br />
      <button onClick={()=>setTheme(theme === "Light" ? "Dark":"Light")}>Change Thame</button>
    </div>
  )
}

export default Button
