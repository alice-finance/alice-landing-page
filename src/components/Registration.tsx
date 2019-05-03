import React from "react";
import { useTranslation } from "react-i18next";

const Registration = () => {
    const { t } = useTranslation("subscription");
    return (
        <section id="registration" className="newsletter__section content-section bg-white mt-8 mb-8">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 mb-6 mb-lg-0">
                        <h3 className="mb-4">{t("title")}</h3>
                        <p className="font-size-5 mb-0">{t("desc")}</p>
                    </div>
                    <div className="col-lg-6 ml-auto">
                        <iframe
                            src={t("url")}
                            style={{
                                width: "100%",
                                height: 640,
                                frameBorder: 0,
                                marginWidth: 0,
                                marginHeight: 0,
                                borderWidth: 0
                            }}>
                            로드 중...
                        </iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Registration;
