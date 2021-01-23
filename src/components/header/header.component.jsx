import React from "react";
import { connect } from 'react-redux'
import './header.styles.scss'
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { auth } from "../../firebase/firebase.utils";
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from "../cart-dropdown/cart-dropdown.component"


const Header = ({ currentUser, hidden }) => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo' />
        </Link>
        <div className="options">
            <Link className="options" to='/shop'>SHOP</Link>
            <Link className="options" to='/ contact'>CONTACT</Link>
            {/* <Link className="options" to='/signin'>SIGN IN</Link> */}
            {
                currentUser ? <div className="options" onClick={() => auth.signOut()} >SIGN OUT</div> : (<Link className="options" to='/signin'>SIGN IN</Link>)
            }
            <CartIcon />
        </div>
        { hidden ? null : <CartDropdown />}

    </div>
)


const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
    currentUser,
    hidden

})
export default connect(mapStateToProps)(Header);