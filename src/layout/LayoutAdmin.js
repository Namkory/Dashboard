import './LayoutAdmin.scss';
import Navbar from '../components/navbar/Navbar';
import Sidebar from '../components/sidebar/Sidebar';

function LayoutAdmin({ children }) {
    return (
        <>
            <div className="home">
                <Sidebar />
                <div className="homeContainer">
                    <Navbar />
                    {children}
                </div>
            </div>
        </>
    );
}

export default LayoutAdmin;
