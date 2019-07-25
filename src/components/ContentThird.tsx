import React from "react";
import { useTranslation } from "react-i18next";

const ContentThird = () => {
    const { t } = useTranslation("contentThird");
    return (
        <section id="exchange" className="content-section bg-gray">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 order-lg-2 mb-8 mb-lg-0">
                        <img src="assets/img/content/exchange.png" alt="Apps" />
                    </div>
                    <div className="col-lg-5 order-lg-1 mr-auto">
                        <h3 className="mb-4">{t("title")}</h3>
                        <hr className="hr_theme ml-0 mr-auto" />
                        <p className="mb-4">{t("desc")}</p>
                        <a href={"#download"} className="btn btn-lg btn-round btn-primary">
                            {t("getStartNow")}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContentThird;
