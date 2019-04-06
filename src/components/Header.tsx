import React, { Component } from "react";

class Header extends Component {
    public render() {
        return (
            <header id="home" className="header" data-style="2">
                <div className="header-hero d-flex align-items-center text-light" data-gradient="1">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-8 mr-auto">
                                <div className="hero-cont">
                                    <div className="mb-4">
                                        <h1 className="display-lg-4 fw-700 mb-6">Play free.</h1>
                                        <p className="lead-lg-2 mb-6">Nunc sit amet est sed ipsum cursus malesuada.</p>
                                    </div>
                                    <a href="#" className="btn btn-lg btn-round btn-sm-block btn-light mr-6 my-3">
                                        Download
                                    </a>
                                    <a
                                        data-video="https://player.vimeo.com/video/290010071"
                                        data-modal-video="play"
                                        data-toggle="modal"
                                        data-target="#videoModal"
                                        className="btn btn-lg btn-round btn-sm-block btn-play my-3">
                                        <img src="assets/img/icon/play.svg" className="icon" alt="Play" />
                                        Watch video
                                    </a>
                                </div>
                            </div>
                            <div className="d-none d-lg-block col-md-4 text-center overflow-hidden">
                                <img src="assets/img/app/device-hero.png" className="device-hero" alt="Device" />
                            </div>
                        </div>
                    </div>
                </div>
                <a data-scroll="#content-main">
                    <div className="scroll-arrow ">
                        <span className="ti-angle-down" />
                    </div>
                </a>
                <div
                    className="modal fade"
                    id="videoModal"
                    tabIndex={-1}
                    role="dialog"
                    aria-hidden="true"
                    style={{ display: "none" }}>
                    <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                        <div className="modal-content bg-dark-end">
                            <div className="modal-header border-dark bg-transparent">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span className="text-light" aria-hidden="true">
                                        ×
                                    </span>
                                </button>
                            </div>
                            <div className="position-relative ar-16_9">
                                <iframe className="overlay border-0" allowFullScreen={true} />
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
