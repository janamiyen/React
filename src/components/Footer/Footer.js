import { FaGithubSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaWhatsappSquare } from 'react-icons/fa';
import { ImMail } from 'react-icons/im';
import './Footer.css'


function Footer() {
    return (
      <footer className="footerContainer">
        <div className="icon">
                <a href="https://github.com/janamiyen" target="blank">
                    <FaGithubSquare />
                </a>
                <a href="https://www.linkedin.com/in/jana-miyen-486a8a224/" target="blank">
                    <FaLinkedin />
                </a>
                <a href="https://web.whatsapp.com/" target="blank">
                    <FaWhatsappSquare />
                </a>
                <a href="mailto:janamiyen@gmail.com">
                    <ImMail />
                </a>
        </div>
        <div>
            <p className="text">Copyright © 2022 - All right reserved</p>
        </div>
        <div>
            <p  className="text">Jana Miyen Front-End Developer</p>
        </div>
    
      </footer>
    )
  }
  export default Footer;