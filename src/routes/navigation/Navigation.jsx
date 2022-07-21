import { useContext } from "react"
import { Link, Outlet } from "react-router-dom"
import {ReactComponent as CrownLogo} from '../../assets/crown.svg'
import './navigation.styles.scss'
import { UserContext } from "../../context/user.context"
import { CartItemContext } from "../../context/cart-content.context"
import { signOutUser } from "../../utils/firebase/firebase.utils"
import CartIcon from "../../components/cart-icon/cart-icon"
import CartDropdown from "../../components/cart-dropdown/cart-dropdown"

const Navigation = () => {
  const {currentUser} = useContext(UserContext);
  const {showDropdown} = useContext(CartItemContext);
  
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
            <CartIcon />
        </div>
        {showDropdown && <CartDropdown />}
      </div>
      <Outlet />
    </>
  )
}

export default Navigation
