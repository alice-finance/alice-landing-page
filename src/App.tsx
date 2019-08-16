import "@babel/polyfill";
// tslint:disable-next-line
import React, {Fragment, useEffect} from "react";

import ReactGA from "react-ga";
import "./App.css";
import ContentFirst from "./components/ContentFirst";
import ContentSecond from "./components/ContentSecond";
import ContentThird from "./components/ContentThird";
import DownloadApp from "./components/DownloadApp";
import EmailInput from "./components/EmailInput";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Registration from "./components/Registration";
import Services from "./components/Services";
ReactGA.initialize("UA-145462592-1");

const App = () => {
    useEffect(() => {
        ReactGA.pageview(window.location.pathname);
    }, [window.location.pathname]);
    return (
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
};

export default App;
