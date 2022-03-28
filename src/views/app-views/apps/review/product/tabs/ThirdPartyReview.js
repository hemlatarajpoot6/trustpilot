import React from "react";
import centerlogo from "../../../../../../assets/img/bc5c15b77eb7b1cbd4d4.png"
import SideBar from "./rightsidebar/SideBar";
import { Card, Col, Row } from "antd";


const ThirdPartyReview = () => {

    return (
        <React.Fragment>
            <Row>
                <Col xs={24} sm={24} md={24} lg={14}>
                    <Card className="mr-3">
                        <div className="background-color">
                            <img src={centerlogo} alt='q&aimg' className="mt-5 mb-5" />
                            <h1 className="mb-3">Easily import and integrate your product reviews to Trustpilot</h1>
                            <h4 className="mb-5">Has your company collected product reviews using another service? Import them into Trustpilot so you have all your reviews in one place.</h4>
                        </div>
                    </Card>
                </Col>
                <Col xs={24} sm={24} md={24} lg={10}>
                    <SideBar />
                </Col>
            </Row>
        </React.Fragment>
    )
};

export default ThirdPartyReview;