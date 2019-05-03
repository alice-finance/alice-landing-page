import React from "react";
import { useTranslation } from "react-i18next";

const ContentSecond = () => {
    const { t } = useTranslation("contentSecond");
    return (
        <section id="loan" className="content-section">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 mr-auto overflow-hidden mb-8 mb-lg-0">
                        <img src="assets/img/content/loan.png" alt="Apps" />
                    </div>
                    <div className="col-lg-5">
                        <h3 className="mb-4">{t("title")}</h3>
                        <hr className="hr_theme ml-0 mr-auto" />
                        <p className="mb-4">{t("desc")}</p>
                        <a href={"#registration"} className="btn btn-lg btn-round btn-primary">
                            {t("getStartNow")}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContentSecond;
