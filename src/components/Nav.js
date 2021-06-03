import React from 'react'
import {Link} from 'react-router-dom';
import logo from '../logo.png';
function Nav() {
    return (
        <nav>
            <Link to='/'><li>MyBlog</li></Link>
            <Link to='/'><li>Home</li></Link>
            <Link to='/posts'><li>Posts</li></Link>
        </nav>
    )
}

export default Nav
