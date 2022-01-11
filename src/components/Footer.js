import React from 'react'
import "./Footer.css"

function Footer() {
    return (
        <div className='footer'>
            <h1 className='Name'>
            Made with  <span className='heart' role="img" aria-label="heart"> ❤ </span>
            by <a href="https://www.instagram.com/kaif.studio_/" target="_blank" className="footer_social">
              Kaif.studio
                </a>
            </h1>
            <div className="footer_socials">
                    <a href="https://www.linkedin.com/in/shaikh-kaif-604182214/" target="_blank" className="footer_social">
                    <i className="uil uil-linkedin-alt"></i>

                    </a>
                    <a href="https://www.instagram.com/kaif.studio_/" target="_blank" className="footer_social">
                    <i className="uil uil-instagram"></i>

                    </a>
                    <a href="https://github.com/kaifcodeadict" className="footer_social" target="_blank">
                    <i className="uil uil-github-alt"></i>
                    </a>
                </div>
            
        </div>
    )
}

export default Footer
