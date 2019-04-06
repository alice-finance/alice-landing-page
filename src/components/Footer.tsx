import React, { Component } from "react";

class Footer extends Component {
    public render() {
        return (
            <footer className="footer footer-default">
                <div className="container">
                    <div className="row gutters-y">
                        <div className="col-lg-2">
                            <a href="#" className="logo">
                                <img src="assets/img/logo-light.png" alt="Logo" className="logo-light" />
                            </a>
                        </div>
                        <div className="col-6 col-lg-2">
                            <h6 className="nav-title mb-4">Company</h6>
                            <div className="nav flex-column">
                                <a className="nav-link" href="#">
                                    Freebies
                                </a>
                                <a className="nav-link" href="#">
                                    Partners
                                </a>
                                <a className="nav-link" href="#">
                                    Events
                                </a>
                                <a className="nav-link" href="#">
                                    Assets
                                </a>
                            </div>
                        </div>
                        <div className="col-6 col-lg-2">
                            <h6 className="nav-title mb-4">Learn</h6>
                            <div className="nav flex-column">
                                <a className="nav-link" href="#">
                                    Fees
                                </a>
                                <a className="nav-link" href="#">
                                    FAQ
                                </a>
                                <a className="nav-link" href="#">
                                    Partnerships
                                </a>
                                <a className="nav-link" href="#">
                                    Find a Store
                                </a>
                            </div>
                        </div>
                        <div className="col-6 col-lg-2">
                            <h6 className="nav-title mb-4">Communities</h6>
                            <div className="nav flex-column">
                                <a className="nav-link" href="#">
                                    Developers
                                </a>
                                <a className="nav-link" href="#">
                                    Brands
                                </a>
                                <a className="nav-link" href="#">
                                    Investors
                                </a>
                                <a className="nav-link" href="#">
                                    Vendors
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="social-buttons text-lg-right lead-1">
                                <a className="social-facebook" href="#">
                                    <i className="fab fa-facebook-f" />
                                </a>
                                <a className="social-twitter" href="#">
                                    <i className="fab fa-twitter" />
                                </a>
                                <a className="social-dribbble" href="#">
                                    <i className="fab fa-dribbble" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="row gutters-y mt-8 mt-lg-12 small">
                        <div className="col-sm-9 col-lg-8">
                            <ul className="nav nav-small">
                                <li>
                                    <a href="#" className="nav-link">
                                        Terms
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link">
                                        Privacy
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link">
                                        Policy & Safety
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link">
                                        Send feedback
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link">
                                        Test new features
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-sm-3 col-lg-4 d-flex align-items-center justify-content-sm-end">
                            <span>© 2019 ANKAA</span>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
