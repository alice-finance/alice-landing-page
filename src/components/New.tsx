import React, { Component } from "react";

class New extends Component {
    public render() {
        return (
            <section className="wn__section content-section">
                <div className="container">
                    <header className="section-header text-center">
                        <h2>What’s new?</h2>
                    </header>
                    <div className="wn_wrapper">
                        <div className="wn__body">
                            <div className="row gutters-y">
                                <div className="col-md-6 col-lg-3 mb-7 mb-lg-0">
                                    <div className="px-3">
                                        <div className="wn__icon">
                                            <div className="w-100">
                                                <img src="assets/img/icon/phone.png" alt="Icon" />
                                            </div>
                                        </div>
                                        <h6 className="wn__title">Phone Capability.</h6>
                                        <p>Lorem ipsum dolor sit, consectetur adipiscing elit. Donec sapien.</p>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-3 mb-7 mb-lg-0">
                                    <div className="px-3">
                                        <div className="wn__icon">
                                            <div className="w-100">
                                                <img src="assets/img/icon/like.png" alt="Icon" />
                                            </div>
                                        </div>
                                        <h6 className="wn__title">Make it yours.</h6>
                                        <p>Lorem ipsum dolor sit, consectetur adipiscing elit. Donec sapien.</p>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-3 mb-7 mb-md-0">
                                    <div className="px-3">
                                        <div className="wn__icon">
                                            <div className="w-100">
                                                <img src="assets/img/icon/analytic.png" alt="Icon" />
                                            </div>
                                        </div>
                                        <h6 className="wn__title">Get free analytics.</h6>
                                        <p>Lorem ipsum dolor sit, consectetur adipiscing elit. Donec sapien.</p>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-3">
                                    <div className="px-3">
                                        <div className="wn__icon">
                                            <div className="w-100">
                                                <img src="assets/img/icon/alert.png" alt="Icon" />
                                            </div>
                                        </div>
                                        <h6 className="wn__title">Push Alerts.</h6>
                                        <p>Lorem ipsum dolor sit, consectetur adipiscing elit. Donec sapien.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default New;
