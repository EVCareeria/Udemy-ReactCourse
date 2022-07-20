import { useContext } from "react"
import { Link, Outlet } from "react-router-dom"
import {ReactComponent as CrownLogo} from '../../assets/crown.svg'
import './navigation.styles.scss'
import { UserContext } from "../../context/user.context"
import { signOutUser } from "../../utils/firebase/firebase.utils"

const Navigation = () => {
  const {currentUser} = useContext(UserContext);
  
  console.log('Nykyinen käyttäjä',currentUser)
  return(
    <>
      <div className="navigation" >
        <Link className="logo-container" to='/'>
          <div><CrownLogo className="logo" /></div>
        </Link>
      <div className="nav-links-container">
        <Link className="nav-link" to='/shop'>
          SHOP
        </Link>
        {currentUser ? (
          <span className="nav-link" onClick={signOutUser}>Sign Out</span>
        ) : (
        <Link className="nav-link" to='/authentication'>
          Sign In
        </Link>
        )}
        
      </div>

      </div>
      <Outlet />
    </>
  )
}

export default Navigation
