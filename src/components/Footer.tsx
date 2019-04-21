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
                        <div className="col-lg-4" />
                        <div className="col-6 col-lg-2">
                            <h6 className="nav-title mb-4">Home</h6>
                            <div className="nav flex-column">
                                <a className="nav-link" href={"#feautres"}>
                                    Features
                                </a>
                                <a className="nav-link" href={"#savings"}>
                                    Savings
                                </a>
                                <a className="nav-link" href={"#loan"}>
                                    Loan
                                </a>
                                <a className="nav-link" href={"#exchange"}>
                                    Exchange
                                </a>
                                <a className="nav-link" href={"#registration"}>
                                    Registration
                                </a>
                            </div>
                        </div>
                        <div className="col-6 col-lg-2">
                            <h6 className="nav-title mb-4">More Info</h6>
                        </div>
                        <div className="col-lg-2">
                            <div className="social-buttons text-lg-right lead-1">
                                <a className="social-telegram" href="https://t.me/alicenetwork" target="_blank">
                                    <i className="fab fa-telegram" />
                                </a>
                                <a className="social-github" href="https://github.com/alice-network" target="_blank">
                                    <i className="fab fa-github" />
                                </a>
                                <a className="social-medium" href="https://medium.com/alice-network" target="_blank">
                                    <i className="fab fa-medium" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="row gutters-y mt-2 mt-lg-4 small">
                        <div className="col-sm-9 col-lg-8">
                            <span>© 2019 DNext Inc.</span>
                        </div>
                        <div className="col-sm-3 col-lg-4 d-flex align-items-center justify-content-sm-end">
                            <ul className="nav nav-small">
                                <li>
                                    <a href="mailto:support@dnext.co" className="nav-link">
                                        support@dnext.co
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
