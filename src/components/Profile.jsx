import  {  useState } from 'react'
import {useUser} from '../context/UserContext'

function Profile() {
    const {user,setUser} = useUser();

    const [loading,setLoading] = useState(false)
    
    const handleLogin = ()=> {
        setLoading(true)
        setTimeout(()=>{
            setUser({id:1,username:"irem",bio:"software engineer"})
            setLoading(false)
        },1500)
    }
  return (
    <div>
        {
            !user &&<button onClick={handleLogin}>{loading ? "loading...":"Loading"}</button>
        }
        
        <br />
      <code>{JSON.stringify(user)}</code>
      <br />
    </div>
  )
}

export default Profile
