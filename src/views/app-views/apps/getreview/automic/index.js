import { Col, Row, Card, Steps, Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import automic from "../../../../../assets/img/automic.svg";
import video1 from "../../../../../assets/video/video1.mp4";

const AutomaticFedback = () => {

    const { Step } = Steps;

    const text = <>
        <h3 className="">Copy your unique Trustpilot email address below</h3>
        <h5 className="mt-3 mb-3">engineermaster.in+2ce08e1679@invite.trustpilot.com</h5>
        <Button className="w-25 mb-3 font-weight-bold">Copy email address</Button>
    </>
    const text2 = <>
        <h3>Add your unique Trustpilot email address to the BCC</h3>
        <h5 className="">Go to your eCommerce, CRM or invoicing system’s email settings and add your unique Trustpilot email address to the BCC field. Your Trustpilot email address should be automatically added to all future email purchase confirmations.</h5>
        <img src={automic} alt="automic" />
        <h3 className="mt-3">BCC field? What’s that?</h3>
        <h5 className="">BCC stands for blind carbon copy. It’s the field that hides a recipient’s email address.</h5>
        <Button className="w-25 mb-3 font-weight-bold">Okay, I have configured my platform</Button>
    </>
    const text3 = <>
        <h3>All set! Trustpilot should now be receiving copies of your customer emails</h3>
        <h5 className="">Check your <Link to="/app/apps/getreview/invitationsHistory" className="text-info">invitation history</Link> after your next customer purchase to confirm that your automatic invite has been sent and the feature is set-up correctly.</h5>
    </>

    return (
        <React.Fragment>
            <h1>Automatic Feedback Service</h1>
            <Row>
                <Col xs={24} sm={24} md={24} lg={16}>
                    <Card className="mr-2">
                        <h3>Collect reviews automatically</h3>
                        <h4 className="font-weight-bold">Set up automation to get a continuous flow of verified reviews</h4>
                        <h5 className="">Automated invitations are the fastest way to qualify for Google Seller Ratings and use your stars to stand out in Google Search. Once you hit 100 verified reviews your business could qualify for Google Seller Ratings.
                            <Link to="#"> Need help?</Link>
                        </h5>
                        <h4 className="mt-3 font-weight-bold">Do you send your customers confirmation emails after a purchase?</h4>
                        <h5 className="">If yes, follow the simple steps below to start collecting reviews automatically.</h5>
                       <div className="mt-4 mb-4"> 
                           <Steps direction="vertical" current={0}>
                            <Step description={text} />
                            <Step description={text2} />
                            <Step description={text3} />
                        </Steps>
                        </div>
                        <h3>Do you want to delay your automatic review invitations by a specific number of days?</h3>
                        <h5 className="">To ensure your customers are able to write meaningful reviews, we recommend you delay your invitations for a period that suits your business needs. To change the delay settings from the 7-day default, go to <Link to="#" className="text-info">Invitation Settings</Link></h5>
                    </Card>
                </Col>
                <Col xs={24} sm={24} md={24} lg={8}>
                    <Card className="ml-2">
                        <h3>Need help?</h3>
                        <h5>Learn more about <Link to="#" className="text-info">how to use Automatic Feedback Service.</Link></h5>
                        <h5>Choose <Link to="#" className="text-info">when to send</Link> a review invitation to your customers.</h5>
                        <h5>Customize AFS invitations with <Link to="#" className="text-info">structured data snippets.</Link></h5>
                    </Card>
                    <Card className="ml-2">
                        <h3>Integrate AFS with your own system</h3>
                        <h5>Find guides on how to integrate AFS with specific platforms:</h5>
                        <h5><Link to="#" className="text-info ">CoreCommerce</Link></h5>
                        <h5><Link to="#" className="text-info">Yahoo eCommerce</Link></h5>
                        <h5><Link to="#" className="text-info">G-Suite</Link></h5>
                        <h5><Link to="#" className="text-info">Squarespace</Link></h5>
                        <h5><Link to="#" className="text-info">HubSpot</Link></h5>
                        <h5><Link to="#" className="text-info">See all guides</Link></h5>
                    </Card>
                    <Card className="ml-2">
                    <video src={video1} width="300" height="300" controls="controls" />
                    </Card>
                    <Card className="ml-2">
                        <h3>Invitation preview</h3>
                        <div>
                            <iframe src="https://www.w3schools.com" title="automic" sandbox=" allow-scripts allow-same-origin" frameborder="0" >hello</iframe>
                        </div>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
};

export default AutomaticFedback;