import React from "react";
import ReactDOM from "react-dom";
// @ts-ignore
import HttpsRedirect from "react-https-redirect";

import App from "./App";
import "./i18n";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
    <HttpsRedirect>
        <App />
    </HttpsRedirect>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
