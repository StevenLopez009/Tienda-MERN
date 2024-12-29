import { Link } from "react-router-dom"
import { useAuth } from "../../service/Auth.service.jsx"

function ProfilePage(){
    const { logout}= useAuth()
  return(
    <div>
      <Link to="/client/public" onClick={() => { logout() }}>Logout</Link>
    </div>
  )
}

export default ProfilePage