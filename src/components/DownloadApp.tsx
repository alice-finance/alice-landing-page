import React from "react";
import { useTranslation } from "react-i18next";

const DownloadApp = () => {
    const { t } = useTranslation("download");
    return (
        <section id="download" className="download__section content-section text-center text-light">
            <div className="container">
                <h2 className="title-download display-lg-4 mb-7">{t("title")}</h2>
                <div className="row">
                    <div className="col-8 mx-auto col-lg-12">
                        {/*<a href="#" className="btn-download btn btn-lg btn-round btn-light">
                            <span className="lead-4">
                                <i className="fab fa-apple" />
                            </span>
                        </a>*/}
                        <a
                            href="https://alice-finance.app.link/kyCUVYX2SZ"
                            target="_blank"
                            className="btn-download btn btn-lg btn-round btn-light">
                            <span className="lead-1">
                                <i className="fab fa-google-play" />
                                <span className="ml-3">{t("playStore")}</span>
                            </span>
                        </a>
                        <a
                            href="https://alice-finance.app.link/2b62BTx2SZ"
                            target="_blank"
                            className="btn-download btn btn-lg btn-round btn-outline-light">
                            <span className="lead-1">
                                <i className="fab fa-apple" />
                                <span className="ml-3">{t("appStore")}</span>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DownloadApp;
