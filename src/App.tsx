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
import ScreenShots from "./components/Secreenshots";
import Timeline from "./components/Timeline";

class App extends Component {
    public render() {
        return (
            <Fragment>
                <NavBar />
                <Header />
                <main id="content-main" className="content-main">
                    <New />
                    <Features />
                    <ContentRight />
                    <ContentLeft />
                    <ScreenShots />
                    <Timeline />
                    <Faq />
                    <DownloadApp />
                </main>
                <Footer />
            </Fragment>
        );
    }
}

export default App;
