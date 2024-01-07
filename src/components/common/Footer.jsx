import { FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaRegEnvelope     } from "react-icons/fa";
import navlinksData from '../../assets/data/navlinksData'

const Footer = () => {
    return (
        <footer>
            <div class="container">
                <div class="footer-wrapper">
                    <div class="footer-faded-text">John Doe</div>

                    <div class="link-wrapper">
                        {
                            navlinksData.map(item => (
                                <div key={item.id}>
                                    <a href={item.link}>{item.name}</a>
                                </div>
                            ))
                        }
                    </div>

                    <div class="icon-wrapper">

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