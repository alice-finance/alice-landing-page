import React, { Component } from "react";

class ContentRight extends Component {
    public render() {
        return (
            <section className="content-section bg-gray">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 order-lg-2 mb-8 mb-lg-0">
                            <img src="assets/img/content/1.png" alt="Apps" />
                        </div>
                        <div className="col-lg-5 order-lg-1 mr-auto">
                            <h3 className="mb-4">Fast and Smooth</h3>
                            <hr className="hr_theme ml-0 mr-auto" />
                            <p className="mb-8">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a commodo enim. Integer
                                sed maximus ligula. Vestibulum fermentum, purus sit amet aliquet molestie, tortor ante
                                lobortis nisi, in bibendum ante purus eu ipsum.
                            </p>
                            <a href="#" className="btn btn-lg btn-round btn-primary">
                                Get Start Now
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ContentRight;
