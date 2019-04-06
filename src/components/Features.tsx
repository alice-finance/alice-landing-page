import React, { Component } from "react";

class Features extends Component {
    public render() {
        return (
            <section id="features" className="features__section content-section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-5 col-lg-6 order-2 order-lg-1">
                            <div className="features_wrapper">
                                <Feature1 />
                                <Feature2 />
                                <Feature3 />
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-6 col-sm-8 mx-auto order-1 order-lg-2 mb-8 mb-lg-0">
                            <div className="features_device__bg_wrapper">
                                <img
                                    src="assets/img/features/features__bg.png"
                                    className="features_device__bg"
                                    alt="Device Background"
                                    data-animation="true"
                                />
                            </div>
                            <img src="assets/img/features/features.png" className="features_device" alt="Apps" />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

const Feature1 = () => (
    <div className="features__item-wrapper">
        <div className="features__item">
            <div className="mb-6 mb-lg-0 mr-lg-6">
                <div className="features_img_wrapper">
                    <img src="assets/img/icon/speed.png" alt="Speed" />
                </div>
            </div>
            <div>
                <h4 className="features__title">Seamless integration</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div>
                <hr className="features__hr" />
                <div data-toggle="tooltip" data-placement="top" title="Seamless integration" />
            </div>
        </div>
    </div>
);

const Feature2 = () => (
    <div className="features__item-wrapper">
        <div className="features__item">
            <div className="mb-6 mb-lg-0 mr-lg-6">
                <div className="features_img_wrapper">
                    <img src="assets/img/icon/resp.png" alt="Speed" />
                </div>
            </div>
            <div>
                <h4 className="features__title">Ease of access</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div>
                <hr className="features__hr" />
                <div data-toggle="tooltip" data-placement="top" title="Ease of access" />
            </div>
        </div>
    </div>
);

const Feature3 = () => (
    <div className="features__item-wrapper">
        <div className="features__item">
            <div className="mb-6 mb-lg-0 mr-lg-6">
                <div className="features_img_wrapper">
                    <img src="assets/img/icon/sett.png" alt="Speed" />
                </div>
            </div>
            <div>
                <h4 className="features__title">Multiple services</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div>
                <hr className="features__hr" />
                <div data-toggle="tooltip" data-placement="top" title="Multiple services" />
            </div>
        </div>
    </div>
);

export default Features;
