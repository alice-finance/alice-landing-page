import React, { useCallback } from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitch = () => {
    const { i18n } = useTranslation();
    const onChangeLanguage = (lng: string) => useCallback(() => i18n.changeLanguage(lng), [i18n]);
    return (
        <div className="dropdown">
            <button
                className="btn btn-outline-light dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false">
                {i18n.language.split("-")[0].toUpperCase()}
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <button className="dropdown-item" onClick={onChangeLanguage("en")}>
                    English
                </button>
                <button className="dropdown-item" onClick={onChangeLanguage("ko")}>
                    한국어
                </button>
            </div>
        </div>
    );
};

export default LanguageSwitch;
