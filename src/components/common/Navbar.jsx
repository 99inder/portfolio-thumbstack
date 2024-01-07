import React from 'react'
import NavLogo from "../../assets/images/userAsset/NavLogo.jpg"
import NavlinksData from '../../assets/data/navlinksData'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo-container">
                <img src={NavLogo} className="logo" alt='nav_logo'/>
                <div className="logo-text">ohn Doe</div>
            </div>

            <div className="nav-items">
                {
                    NavlinksData.map((item) => (
                        <div key={item.id}><a href={item.link}>{item.name}</a></div>
                    ))
                }
            </div>

        </div>
    )
}

export default Navbar