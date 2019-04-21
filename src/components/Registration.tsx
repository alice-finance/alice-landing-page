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
                    <div className="col-lg-5 ml-auto">
                        <form
                            action="https://stibee.com/api/v1.0/lists/Q8Q6q_4AwSv2WgZ6xPN9v2hs0vY0/public/subscribers"
                            method="POST"
                            target="_blank"
                            className="input-rounded"
                            name="stb_subscribe_form"
                            id="stb_subscribe_form"
                            noValidate={true}>
                            <div className="form-group input-group">
                                <input
                                    type="email"
                                    className="form-control form-control-lg"
                                    id="stb_email"
                                    name="email"
                                    placeholder={t("enterYourEmail")}
                                />
                                <div className="stb_form_msg_error" id="stb_email_error" />
                                <div className="input-group-append ml-3">
                                    <button className="btn btn-primary" id="stb_form_submit_button" type="submit">
                                        {t("register")}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Registration;
