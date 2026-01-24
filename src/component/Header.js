import { Link } from "react-router-dom";

export default function Header() {
    return (
        <>
            <header className="header-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="logo">
                                <Link to={"/"}>
                                    <div>
                                        <img src="/images/nav-logo.png" alt="Logo" />
                                    </div>
                                    <span>EpicConvert</span>
                                </Link>
                            </div>
                        </div>


                        <div className="col-lg-4">
                            <div className="nav-list">
                                <ul>
                                    <li><Link to={"/"}>Tools</Link></li>
                                    <li><Link to={"/apipage"}>API</Link></li>
                                    <li><Link to={"/pricing"}>Pricing</Link></li>
                                    <li><Link to={"/blog"}>Blog</Link></li>
                                    <li><Link to={"/contact"}>Contact</Link></li>
                                </ul>
                            </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="nav-menu">
                                    <i class="bi bi-brightness-high"></i>
                                    <span>Login</span>
                                    <button>Sign Up</button>
                                </div>

                            </div>
                    </div>
                </div>

            </header>
        </>
    )
}