import React, { Component } from "react";

class DownloadApp extends Component {
    public render() {
        return (
            <section className="download__section content-section text-center text-light">
                <div className="container">
                    <h2 className="title-download display-lg-4 mb-7">Ready? Get it on</h2>
                    <div className="row">
                        <div className="col-8 mx-auto col-lg-12">
                            <a href="#" className="btn-download btn btn-lg btn-round btn-light">
                                <span className="lead-4">
                                    <i className="fab fa-apple" />
                                </span>
                            </a>
                            <a href="#" className="btn-download btn btn-lg btn-round btn-light">
                                <span className="lead-4">
                                    <i className="fab fa-google-play" />
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default DownloadApp;
