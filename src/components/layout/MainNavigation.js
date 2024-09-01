import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import "./MainNavigation.css"
import FavouritesContext from '../../store/favourites.context';


const MainNavigation = () => {

    const toggleMenu = (e) => {
        const menu = document.querySelector('.header ul');
        menu.classList.toggle('show');
    };

    const favouritesCtx = useContext(FavouritesContext);

  return (
    <header className="header">
        <Link to={'/'} className="logo" style={{color: '#fff'}}>React Meetups</Link>
        <nav>
            <ul className='ul'>
                <li className="li">
                    <Link to={'/'}>All meetups</Link>
                </li>
                <li>
                    <Link to={'/new-meetups'}>Add new meetup</Link>
                </li>
                <li>
                    <Link to={'/favourites'}>
                    My favourites
                    <span className="badge"> {favouritesCtx.total} </span>
                    </Link>
                </li>
            </ul>
            <i class="fa-solid fa-bars menu" onClick={toggleMenu}></i>
        </nav>
    </header>
)
}

export default MainNavigation