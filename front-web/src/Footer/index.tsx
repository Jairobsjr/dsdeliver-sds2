import './style.css';
import {ReactComponent as YouTubeIcon} from './youtube.svg';
import {ReactComponent as LinkednIcon} from './linkedin.svg';
import {ReactComponent as InstagramIcon} from './instagram.svg';

function Footer() {
    return (
    <footer className="main-footer">
        App desenvolvido durante a 2ª ed. do evento <strong>Semana DevSuperior</strong>
        <div className="footer-icons">
            <a href="https://youtube.com/devsuperior" target="_new">
                <YouTubeIcon />
            </a>
            <a href="https://www.linkedin.com/school/devsuperior/" target="_new">
                <LinkednIcon />
            </a>
            <a href="https://instagram.com/devsuperior.ig" target="_new">
                <InstagramIcon />
            </a>
        </div>
    </footer>
    );
}

export default Footer;
