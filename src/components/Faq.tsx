import React, { Component } from "react";

class Faq extends Component {
    public render() {
        return (
            <section className="faq__section content-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mx-auto">
                            <header className="section-header text-center">
                                <h2 className="mb-0">Any questions?</h2>
                            </header>
                            <div id="accordion-faq" className="accordion accordion-connected">
                                <div className="card">
                                    <div className="card-header" id="headingOne">
                                        <h5 className="mb-0">
                                            <a data-toggle="collapse" href="#collapse-4-1">
                                                <span className="icon">
                                                    <span className="fas fa-plus" />
                                                </span>
                                                <span className="fw-500">Can I set up a recurring deposit?</span>
                                            </a>
                                        </h5>
                                    </div>
                                    <div
                                        id="collapse-4-1"
                                        className="collapse show"
                                        aria-labelledby="headingOne"
                                        data-parent="#accordion-faq">
                                        <div className="card-body">
                                            Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin
                                            coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                                            beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan
                                            excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw
                                            denim aesthetic synth nesciunt you probably haven't heard of them accusamus
                                            labore sustainable VHS.
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header" id="headingTwo">
                                        <h5 className="mb-0">
                                            <a data-toggle="collapse" href="#collapse-4-2" className="collapsed">
                                                <span className="icon">
                                                    <span className="fas fa-plus" />
                                                </span>
                                                <span className="fw-500">How do I fund my account?</span>
                                            </a>
                                        </h5>
                                    </div>
                                    <div
                                        id="collapse-4-2"
                                        className="collapse"
                                        aria-labelledby="headingTwo"
                                        data-parent="#accordion-faq">
                                        <div className="card-body">
                                            Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin
                                            coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                                            beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan
                                            excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw
                                            denim aesthetic synth nesciunt you probably haven't heard of them accusamus
                                            labore sustainable VHS.
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header" id="headingThree">
                                        <h5 className="mb-0">
                                            <a data-toggle="collapse" href="#collapse-4-3" className="collapsed">
                                                <span className="icon">
                                                    <span className="fas fa-plus" />
                                                </span>
                                                <span className="fw-500">Can I reinvest dividends?</span>
                                            </a>
                                        </h5>
                                    </div>
                                    <div
                                        id="collapse-4-3"
                                        className="collapse"
                                        aria-labelledby="headingThree"
                                        data-parent="#accordion-faq">
                                        <div className="card-body">
                                            Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin
                                            coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                                            beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan
                                            excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw
                                            denim aesthetic synth nesciunt you probably haven't heard of them accusamus
                                            labore sustainable VHS.
                                        </div>
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

export default Faq;
