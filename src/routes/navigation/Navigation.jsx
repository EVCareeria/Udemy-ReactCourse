import { useContext } from "react"
import { Link, Outlet } from "react-router-dom"
import {ReactComponent as CrownLogo} from '../../assets/crown.svg'
import {NavigationContainer, NavLink, NavLinksContainer, LogoContainer} from  './navigation.styles.js'
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
      <NavigationContainer>
        <LogoContainer to='/'>
          <div><CrownLogo className="logo" /></div>
        </LogoContainer>
        <NavLinksContainer>
          <NavLink to='/shop'>
            SHOP
          </NavLink>
          {currentUser ? (
            <NavLink as='span' onClick={signOutUser}>Sign Out</NavLink>
          ) : (
          <NavLink to='/authentication'>
            Sign In
          </NavLink>
          )}
            <CartIcon />
        </NavLinksContainer>
        {showDropdown && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </>
  )
}

export default Navigation
