import React from "react";
import { useTranslation } from "react-i18next";

const Header = () => {
    const { t, i18n } = useTranslation("header");
    return (
        <header id="home" className="header" data-style="2">
            <div className="header-hero d-flex align-items-center text-light" data-gradient="1">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-8 mr-auto">
                            <div className="hero-cont">
                                <div className="mb-4">
                                    <h1 className="display-lg-4 fw-700 mb-6">{t("title")}</h1>
                                    <p className="lead-lg-3 mb-0">{t("lead")}</p>
                                </div>
                                <a
                                    href="https://alice-finance.app.link/kyCUVYX2SZ"
                                    target="_blank"
                                    className="btn-download btn btn-round btn-sm-block btn-light mr-6 my-3">
                                    <span className="lead-3 ml-2">
                                        <i className="fab fa-google-play font-size-6" />
                                        <span className="ml-3">{t("playStore")}</span>
                                    </span>
                                </a>
                                <a
                                    href="https://alice-finance.app.link/2b62BTx2SZ"
                                    target="_blank"
                                    className="btn-download btn btn-round btn-sm-block btn-outline-light mr-6 my-3">
                                    <span className="lead-3 ml-2">
                                        <i className="fab fa-apple font-size-6" />
                                        <span className="ml-3">{t("appStore")}</span>
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div className="d-none d-lg-block col-md-4 text-center overflow-hidden">
                            <img
                                src={`assets/img/app/device-main-${i18n.language.split("-")[0]}.png`}
                                className="device-hero mt-6"
                                alt="Device"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <a data-scroll="#content-main">
                <div className="scroll-arrow ">
                    <span className="ti-angle-down" />
                </div>
            </a>
            <div
                className="modal fade"
                id="videoModal"
                tabIndex={-1}
                role="dialog"
                aria-hidden="true"
                style={{ display: "none" }}>
                <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                    <div className="modal-content bg-dark-end">
                        <div className="modal-header border-dark bg-transparent">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span className="text-light" aria-hidden="true">
                                    ×
                                </span>
                            </button>
                        </div>
                        <div className="position-relative ar-16_9">
                            <iframe className="overlay border-0" allowFullScreen={true} />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
