import { Button, Card } from "antd";
import React from "react";
import inboximg from "../../../../../../assets/img/c5094b1a2520442d995a.svg"

const Inbox = () => {

    return (
        <React.Fragment>
            <Card className="text-center">
                <div>
                    <img src={inboximg} alt="inbox" />
                    <h1 className="m-2">Complement your Service Reviews with Product Reviews</h1>
                    <h5 className="m-2">Inspire trust, boost the SEO and sales of your online shop, and help your customers make better
                        purchasing decisions with Product Reviews. Learn more.</h5>
                    <span className="">
                        <Button type="primary">Get product reviews</Button>
                        <Button className="ml-3">Send me a test email</Button>
                    </span>
                </div>
            </Card>
        </React.Fragment>
    )
};

export default Inbox;