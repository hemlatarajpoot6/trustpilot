import React from "react";
import { Card, Col, Row } from "antd";
import SideBar from "./rightsidebar/SideBar";
import centerlogo from "../../../../../../assets/img/bc5c15b77eb7b1cbd4d4.png"

const Analytics = () => {

    return (
        <React.Fragment>
            <Row>
                <Col xs={24} sm={24} md={24} lg={14}>
                    <Card className="mr-3">
                        <div className="background-color">
                            <img src={centerlogo} alt='q&aimg' className="mt-5 mb-5" />
                            <h1 className="mb-3">Track the performance of your product review invitations</h1>
                            <h4 className="mb-5">Get access to advanced insights and discover your invitation-to-review performance over time.</h4>
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

export default Analytics;