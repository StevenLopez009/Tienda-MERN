import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

function ProfilePage(){
    const { logout}= useAuth()
  return(
    <div>
      <Link to="/" onClick={() => { logout() }}>Logout</Link> 
    </div>
  )
}

export default ProfilePage