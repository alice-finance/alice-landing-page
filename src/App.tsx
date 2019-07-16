import "@babel/polyfill";
// tslint:disable-next-line
import React, { Fragment } from "react";

import "./App.css";
import ContentFirst from "./components/ContentFirst";
import ContentSecond from "./components/ContentSecond";
import ContentThird from "./components/ContentThird";
import DownloadApp from "./components/DownloadApp";
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
            <ContentFirst />
            <ContentSecond />
            <ContentThird />
            <DownloadApp />
        </main>
        <Footer />
    </Fragment>
);

export default App;
