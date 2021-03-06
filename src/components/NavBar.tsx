import React from "react";
import { useTranslation } from "react-i18next";

import LanguageSwitch from "./LanguageSwitch";

const NavBar = () => {
    const { t } = useTranslation("blog");
    return (
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top navbar-affix">
            <div className="container">
                <div className="row">
                    <div className="col-auto col-sm-auto order-lg-1 text-lg-left mr-sm-auto mr-lg-0">
                        <a className="navbar-brand logo" href="#">
                            <img src="assets/img/logo-dark.png" alt="ANKAA" className="logo-dark" />
                            <img src="assets/img/logo-light.png" alt="ANKAA" className="logo-light" />
                        </a>
                    </div>

                    <div className="col-12 col-lg-auto order-lg-2 ml-auto">
                        <div id="offcanvas-left" className="offcanvas-md" data-animation="slideLeft">
                            <button
                                type="button"
                                className="close fw-100"
                                data-toggle="offcanvas-close"
                                aria-label="Close">
                                <img
                                    src="assets/img/close-dark.svg"
                                    className="menu__btn closeMenu__btn menu-dark"
                                    alt="Close"
                                />
                                <img
                                    src="assets/img/close-light.svg"
                                    className="menu__btn closeMenu__btn menu-light"
                                    alt="Close"
                                />
                            </button>
                            <ul className="nav navbar-nav mr-6 mr-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link px-0 px-lg-3 px-xl-5 active" href="#">
                                        Home <span className="sr-only">(current)</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link px-0 px-lg-3 px-xl-5" target="_blank" href={t("url")}>
                                        Blog
                                    </a>
                                </li>
                                <li className="nav-item btn-wrapper pl-lg-6">
                                    <LanguageSwitch />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
