import React from "react";

const EmailInput = () => {
    return (
        <div className="newsletter__section" id="stb_subscribe">
            <form
                action="https://stibee.com/api/v1.0/lists/Q8Q6q_4AwSv2WgZ6xPN9v2hs0vY0/public/subscribers"
                method="POST"
                target="_blank"
                accept-charset="utf-8"
                className="input-rounded"
                name="stb_subscribe_form"
                id="stb_subscribe_form"
                noValidate={true}>
                <div className="form-group input-group">
                    <input
                        type="email"
                        className="form-control form-control-lg"
                        id="stb_email"
                        name="email"
                        placeholder="Email"
                    />
                    <div className="stb_form_msg_error" id="stb_email_error" />
                    <div className="input-group-append ml-3">
                        <button type="submit" className="btn btn-primary" id="stb_form_submit_button">
                            Subscribe
                        </button>
                    </div>
                </div>
            </form>
            <div className="stb_form_result" id="stb_form_result" />
            <script src="https://s3.ap-northeast-2.amazonaws.com/resource.stibee.com/subscribe/stb_subscribe_form.js" />
        </div>
    );
};

export default EmailInput;
