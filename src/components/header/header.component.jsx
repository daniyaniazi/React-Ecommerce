import React from "react";
import './header.styles.scss'
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from '../../assets/crown.svg'

const Header = () => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo' />
        </Link>
        <div className="options">
            <Link className="options" to='/shop'>SHOP</Link>
            <Link className="options" to='/ contact'>CONTACT</Link>
            <Link className="options" to='/signin'>SIGN IN</Link>

        </div>
    </div>
)
export default Header;