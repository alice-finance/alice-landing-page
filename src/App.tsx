import React, { Component, Fragment } from "react";

import "./App.css";
import Content from "./components/ContentLeft";
import ContentLeft from "./components/ContentRight";
import DownloadApp from "./components/DownloadApp";
import Faq from "./components/Faq";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Services from "./components/Services";

const App = () => (
    <Fragment>
        <NavBar />
        <Header />
        <main id="content-main" className="content-main">
            <Services />
            <Features />
            <Content />
            <ContentLeft />
            <Faq />
            <DownloadApp />
        </main>
        <Footer />
    </Fragment>
);

export default App;
