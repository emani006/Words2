import React from 'react'
import {Link} from 'react-router-dom';

function Header(){
    return(
            <header>
                <div className='top'>
                    <Link className='link' to='/'><div className='logo'></div></Link>
                    <span className='motto'>Learn English easy with our cards</span>
                    <ul className='nav'>
                        <li>
                            <Link className='link' to='/'>Home</Link>
                        </li>
                        <li>
                            <Link className='link' to='/game'>Game</Link>
                        </li>
                        {/* <li>
                            <Link className='link' to='/sign-in'>Sign-in</Link>
                        </li>
                        <li>
                            <Link className='link' to='/sign-up'>Sign-up</Link>
                        </li> */}
                    </ul>
                </div>
            </header>
    )
}

export default Header;