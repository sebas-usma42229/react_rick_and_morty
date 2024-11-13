import { Outlet } from "react-router-dom";
import rickSanchezImage from "../assets/images/rick-sanchez.gif"; // Ajusta la ruta según la ubicación de tu imagen

const Layout = () => {
    return (
        <>
            <nav className="navbar navbar-dark bg-black">
                <div className="container-fluid d-flex align-items-center">
                    <a className="navbar-brand d-flex align-items-center" href="/">
                        <img src={rickSanchezImage} alt="Rick Sanchez" className="navbar-image" />
                        Rick and Morty
                    </a>
                </div>
            </nav>
            <div className="container mt-4">
                <Outlet/>
            </div>
        </>
    );
}

export default Layout;