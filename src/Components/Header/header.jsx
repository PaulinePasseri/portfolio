import React from 'react';
import { Link } from 'react-router-dom';
import MenuItem from './MenuItem'; 
import './header.css';
import Logo from '../../Assets/logo.png'
import CV from '../../Assets/CV-PP.pdf'

export default function Header() {
    const menuItems = [
        { text: "Accueil", path: "/" },
        { text: "Projets", path: "/projets" },
        { text: "Competences", path: "/competences" },
        { text: "Formations", path: "/formations" },
        { text: "Contact", path: "/contact" }
    ];

    return (
        <nav>
           <img src={Logo} alt='logo portfolio' className='logo'/> 
            <ul>
                {menuItems.map((item, index) => (
                    <li key={index}>
                        <Link to={item.path}>
                            <MenuItem text={item.text} />
                        </Link>
                    </li>
                ))}
            </ul>
            <a href={CV} target="_blank" rel="noopener noreferrer">
                <button className='btn'>MON CV</button>
            </a>  
        </nav>
    );
}
