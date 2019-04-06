import React, { Component } from "react";

class Timeline extends Component {
    public render() {
        return (
            <section className="timeline__section content-section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-6 mb-lg-0 text-center">
                            <img src="assets/img/content/timeline.png" alt="Timeline" />
                        </div>
                        <div className="col-lg-6">
                            <div className="timeline-vertical-x timeline-step">
                                <div className="timeline-item" data-step="1">
                                    <h5>Create and update your Profile</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                                <div className="timeline-item" data-step="2">
                                    <h5>Sort & Filter through categories and services</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                                <div className="timeline-item" data-step="3">
                                    <h5>Search to access relevant services</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Timeline;
