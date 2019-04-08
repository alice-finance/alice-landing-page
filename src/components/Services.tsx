import React from "react";
import { useTranslation } from "react-i18next";

const Services = () => {
    const { t } = useTranslation("services");
    return (
        <section className="wn__section content-section">
            <div className="container">
                <header className="section-header text-center">
                    <h2>{t("title")}</h2>
                </header>
                <div className="wn_wrapper">
                    <div className="wn__body">
                        <div className="row gutters-y">
                            <div className="col-md-6 col-lg-3 mb-7 mb-lg-0">
                                <div className="px-3">
                                    <div className="wn__icon">
                                        <div className="w-100">
                                            <img src="assets/img/icon/analytic.png" alt="Icon" />
                                        </div>
                                    </div>
                                    <h6 className="wn__title">{t("service.title")}</h6>
                                    <p>{t("service.desc")}</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3 mb-7 mb-lg-0">
                                <div className="px-3">
                                    <div className="wn__icon">
                                        <div className="w-100">
                                            <img src="assets/img/icon/loan.png" alt="Icon" />
                                        </div>
                                    </div>
                                    <h6 className="wn__title">{t("service.title")}</h6>
                                    <p>{t("service.desc")}</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3 mb-7 mb-md-0">
                                <div className="px-3">
                                    <div className="wn__icon">
                                        <div className="w-100">
                                            <img src="assets/img/icon/savings.png" alt="Icon" />
                                        </div>
                                    </div>
                                    <h6 className="wn__title">{t("service.title")}</h6>
                                    <p>{t("service.desc")}</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <div className="px-3">
                                    <div className="wn__icon">
                                        <div className="w-100">
                                            <img src="assets/img/icon/self-custody.png" alt="Icon" />
                                        </div>
                                    </div>
                                    <h6 className="wn__title">{t("service.title")}</h6>
                                    <p>{t("service.desc")}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
