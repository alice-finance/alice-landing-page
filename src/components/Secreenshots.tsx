import React, { Component } from "react";

class ScreenShots extends Component {
    public render() {
        return (
            <div className="screenshot__section bg-primary content-section">
                <div className="container">
                    <div className="screenshot_wrapper">
                        <div
                            className="owl-carousel"
                            data-carousel-items="1,3,5"
                            data-carousel-margin="30"
                            data-carousel-nav="false">
                            <div className="item">
                                <img src="assets/img/app/sc-01.jpg" alt="App" />
                            </div>
                            <div className="item">
                                <img src="assets/img/app/sc-02.jpg" alt="App" />
                            </div>
                            <div className="item">
                                <img src="assets/img/app/sc-03.jpg" alt="App" />
                            </div>
                            <div className="item">
                                <img src="assets/img/app/sc-04.jpg" alt="App" />
                            </div>
                            <div className="item">
                                <img src="assets/img/app/sc-05.jpg" alt="App" />
                            </div>
                            <div className="item">
                                <img src="assets/img/app/sc-06.jpg" alt="App" />
                            </div>
                        </div>
                        <div className="screenshot_device">
                            <img className="device__img" src="assets/img/app/device.png" alt="Device" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ScreenShots;
