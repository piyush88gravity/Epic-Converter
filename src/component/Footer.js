import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <>
            <footer className="footer-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="footer-text">
                                <span>EpicConverter</span>
                                <p>ConvertBhai is your go-to solution for all file
                                    conversion needs. Simple, fast, and secure.</p>
                            </div>
                        </div>

                        <div className="col-lg-8">
                            <div className="footer-list">
                                <div className="footer-listfirst">
                                    <span>Product</span>
                                    <ul>
                                        <li><Link to={"/"}>Tools</Link></li>
                                        <li><Link to={"/"}>API</Link></li>
                                        <li><Link to={"/"}>Pricing</Link></li>

                                    </ul>
                                </div>

                                <div className="footer-listfirst">
                                    <span>Company</span>
                                    <ul>
                                        <li><Link to={"/"}>About Us</Link></li>
                                        <li><Link to={"/"}>Blog</Link></li>
                                        <li><Link to={"/"}>Contact</Link></li>

                                    </ul>
                                </div>

                                <div className="footer-listfirst">
                                    <span>Legal</span>
                                    <ul>
                                        <li><Link to={"/"}>Privacy Policy</Link></li>
                                        <li><Link to={"/"}>Terms of Service</Link></li>
                                        <li><Link to={"/"}>Cookie Policy</Link></li>

                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-12">
                            <div className="footer-copyright">
                                <span>© 2024 ConvertBhai. All rights reserved.</span>
                                <div className="copyright-social">
                                    <div className="social-icon">
                                        <i class="bi bi-twitter-x"></i>
                                    </div>
                                     <div className="social-icon">
                                        <i class="bi bi-facebook"></i>
                                    </div>
                                     <div className="social-icon">
                                        <i class="bi bi-instagram"></i>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>

            </footer>
        </>
    )
}