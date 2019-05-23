import React from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
    const { t } = useTranslation(["footer", "blog"]);
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
                                {t("features")}
                            </a>
                            <a className="nav-link" href={"#savings"}>
                                {t("savings")}
                            </a>
                            <a className="nav-link" href={"#loan"}>
                                {t("loan")}
                            </a>
                            <a className="nav-link" href={"#exchange"}>
                                {t("exchange")}
                            </a>
                            <a className="nav-link" href={"#registration"}>
                                {t("registration")}
                            </a>
                        </div>
                    </div>
                    <div className="col-6 col-lg-2">
                        <h6 className="nav-title mb-4">Blog</h6>
                        <div className="nav flex-column">
                            <a className="nav-link" target="_blank" href={t("blog:introduction.url")}>
                                {t("blog:introduction.title")}
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="social-buttons text-lg-right lead-1">
                            <a className="social-github" href="https://github.com/alice-finance" target="_blank">
                                <i className="fab fa-github" />
                            </a>
                            <a className="social-medium" href={t("mediumUrl")} target="_blank">
                                <i className="fab fa-medium" />
                            </a>
                            <a className="social-telegram" href={t("telegramUrl")} target="_blank">
                                <i className="fab fa-telegram" />
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
};

export default Footer;
