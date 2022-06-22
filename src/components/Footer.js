import { Link } from "react-router-dom";

function Footer() {
    return (
        <div className="container-fluid">
            <footer className="back-col">
                <ul className="nav justify-content-center pb-3 mb-3  ">
                    <li className="nav-item"><Link to={'/'} className="nav-link px-2 text-muted">Home</Link></li>
                    <li className="nav-item"><Link to={'/'} className="nav-link px-2 text-muted">Experience</Link></li>
                    <li className="nav-item"><Link to={'/'} className="nav-link px-2 text-muted">Education</Link></li>
                </ul>
                <p className="text-center text-muted text-primary">© 2022 Company, Inc</p>
            </footer>
        </div>
    );
}

export default Footer;