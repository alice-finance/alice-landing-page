import React, { Component, Fragment } from "react";

import "./App.css";
import ContentLeft from "./components/ContentLeft";
import ContentRight from "./components/ContentRight";
import DownloadApp from "./components/DownloadApp";
import Faq from "./components/Faq";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import New from "./components/New";

const App = () => (
    <Fragment>
        <NavBar />
        <Header />
        <main id="content-main" className="content-main">
            <New />
            <Features />
            <ContentLeft />
            <ContentRight />
            <Faq />
            <DownloadApp />
        </main>
        <Footer />
    </Fragment>
);

export default App;
