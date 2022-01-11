import React, {useState, useEffect } from 'react'
import './Nav.css'

function Navbar() {
    const [showNav, setshowNav] = useState(false)
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY > 100){
                setshowNav(true);
            }else setshowNav(false);
        })
        return ()=>{
            window.removeEventListener("scroll");
        }

    },[])

    return (
        <div className={`nav ${showNav && "nav_black"}`}>
         
            <img src={window.location.origin + '/logo.png'} alt="Netflix Logo" className="logo" />
            <img src="https://i.pinimg.com/564x/2a/81/c8/2a81c8c3b630aa995f388b821dc6a04b.jpg" alt="menu" className="menu" />
        </div>
    )
}

export default Navbar
