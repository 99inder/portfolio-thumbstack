import { FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaRegEnvelope     } from "react-icons/fa";
import navlinksData from '../../assets/data/navlinksData'

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="footer-wrapper">
                    <div className="footer-faded-text">John Doe</div>

                    <div className="link-wrapper">
                        {
                            navlinksData.map(item => (
                                <div key={item.id}>
                                    <a href={item.link}>{item.name}</a>
                                </div>
                            ))
                        }
                    </div>

                    <div className="icon-wrapper">

                        <FaLinkedin className="icon"/>
                        <FaGithub className="icon"/>
                        <FaTwitter className="icon"/>
                        <FaInstagram  className="icon"/>
                        <FaRegEnvelope className="icon"/>
                    </div>

                </div>
            </div>
        </footer>
    )
}

export default Footer