import React from 'react'
import {
    ColorWheelIcon,
    AvatarIcon,
    DashboardIcon,
} from '@radix-ui/react-icons';
import '../styles/nav-menu.scss'

export const NavMenu = () => {
    return (
        <div className='nav-menu'>
            <input type='checkbox' id='menu-toggle' />
            <label className='button' htmlFor='menu-toggle'>
                <div className='menu-icon'>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <nav className='nav'>
                    <ul>
                        <li><a><ColorWheelIcon /></a></li>
                        <li><a><AvatarIcon /></a></li>
                        <li><a><DashboardIcon /></a></li>
                    </ul>
                </nav>
            </label>
        </div>
    );
}
