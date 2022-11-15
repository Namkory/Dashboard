import './navbar.scss';
import images from '../../asset/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBars,
    faBell,
    faChevronDown,
    faEarthAmericas,
    faMagnifyingGlass,
    faMessage,
    faMoon,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';

function Navbar() {
    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="search">
                    <div className="menu">
                        <FontAwesomeIcon icon={faBars} className="navbar-icon" />
                    </div>
                    <div className="search-item">
                        <input type="text" className="search-input" placeholder="Search..." />
                        <button className="btn-search">
                            <FontAwesomeIcon icon={faMagnifyingGlass} className="navbar-icon" />
                        </button>
                    </div>
                </div>
                <div className="items">
                    <div className="profileUser">
                        <img src={images.noImage} alt="userAvatar" className="useravatar" />
                        <div className="profileUser-text">
                            <p className="profileUser-text-name">Nam kory</p>
                            <FontAwesomeIcon icon={faChevronDown} className="profileUser-icon" />
                        </div>
                    </div>
                    <div className="item">
                        <FontAwesomeIcon icon={faEarthAmericas} className="navbar-icon" />
                        English
                    </div>
                    <div className="item">
                        <FontAwesomeIcon icon={faMoon} className="navbar-icon" />
                    </div>
                    <Tippy content="Thông báo">
                        <div className="item">
                            <FontAwesomeIcon icon={faBell} className="navbar-icon" />
                            <div className="counter">2</div>
                        </div>
                    </Tippy>
                    <Tippy content="Tin nhắn">
                        <div className="item">
                            <FontAwesomeIcon icon={faMessage} className="navbar-icon" />
                            <div className="counter">5</div>
                        </div>
                    </Tippy>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
