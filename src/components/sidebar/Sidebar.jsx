import './sidebar.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUser, faArrowRightFromBracket, faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import images from '../../asset/images';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="top">
                <span className="logo">Dasboard</span>
            </div>
            {/* <hr /> */}
            <div className="center">
                <div className="profileUser">
                    <img src={images.noImage} alt="userAvatar" className="useravatar" />
                    <div className="profileUser-text">
                        <p className="profileUser-text-name">Nam kory</p>
                        <p className="profileUser-text-position">Project Manager</p>
                    </div>
                </div>
                <ul>
                    <Link to="/">
                        <li>
                            <span>Dasboard</span>
                            <FontAwesomeIcon icon={faHouse} className="icon" />
                        </li>
                    </Link>
                    <Link to="/users">
                        <li>
                            <span>User</span>
                            <FontAwesomeIcon icon={faUser} className="icon" />
                        </li>
                    </Link>
                    <Link to="/jobdetail">
                        <li>
                            <span>Job details</span>
                            <FontAwesomeIcon icon={faCalendarDays} className="icon" />
                        </li>
                    </Link>

                    <li>
                        <span>Logout</span>
                        <FontAwesomeIcon icon={faArrowRightFromBracket} className="icon" />
                    </li>
                </ul>
            </div>
            <p className="theme">Theme</p>
            <div className="bottom">
                <div className="colorOption"></div>
                <div className="colorOption"></div>
            </div>
        </div>
    );
}

export default Sidebar;
