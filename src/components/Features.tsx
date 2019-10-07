import React from "react";
import { useTranslation } from "react-i18next";

const Features = () => {
    const { i18n } = useTranslation("header");
    return (
        <section className="features__section content-section">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-5 col-lg-6 order-2 order-lg-1">
                        <div className="features_wrapper">
                            <Feature1 />
                            <Feature2 />
                            <Feature3 />
                        </div>
                    </div>
                    <div className="col-xl-7 col-lg-6 col-sm-8 mx-auto order-1 order-lg-2 mt-4 mb-lg-0">
                        <div className="features_device__bg_wrapper">
                            <img
                                src="assets/img/features/features__bg.png"
                                className="features_device__bg"
                                alt="Device Background"
                                data-animation="true"
                            />
                        </div>
                        <img
                            src={`assets/img/app/device-hero-${i18n.language.split("-")[0]}.png`}
                            className="features_device"
                            alt="Apps"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const Feature1 = () => {
    const { t } = useTranslation("features");
    return (
        <div className="features__item-wrapper">
            <div className="features__item">
                <div className="mb-6 mb-lg-0 mr-lg-6">
                    <div className="features_img_wrapper">
                        <img src="assets/img/icon/decentralized.png" alt="Speed" />
                    </div>
                </div>
                <div>
                    <h4 className="features__title">{t("feature1.title")}</h4>
                    <p>{t("feature1.desc")}</p>
                </div>
            </div>
        </div>
    );
};

const Feature2 = () => {
    const { t } = useTranslation("features");
    return (
        <div className="features__item-wrapper">
            <div className="features__item">
                <div className="mb-6 mb-lg-0 mr-lg-6">
                    <div className="features_img_wrapper">
                        <img src="assets/img/icon/resp.png" alt="Speed" />
                    </div>
                </div>
                <div>
                    <h4 className="features__title">{t("feature2.title")}</h4>
                    <p>{t("feature2.desc")}</p>
                </div>
            </div>
        </div>
    );
};

const Feature3 = () => {
    const { t } = useTranslation("features");
    return (
        <div className="features__item-wrapper">
            <div className="features__item">
                <div className="mb-6 mb-lg-0 mr-lg-6">
                    <div className="features_img_wrapper">
                        <img src="assets/img/icon/speed.png" alt="Speed" />
                    </div>
                </div>
                <div>
                    <h4 className="features__title">{t("feature3.title")}</h4>
                    <p>{t("feature3.desc")}</p>
                </div>
            </div>
        </div>
    );
};

export default Features;
