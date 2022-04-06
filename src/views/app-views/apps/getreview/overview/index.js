import { Button, Card, Col, Row, Table } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import inboximg from "../../../../../assets/img/c5094b1a2520442d995a.svg";
// import BarChart from "./BarChart";
import StackedColumn from "../../../charts/apex/StackedColumn";
import "../getreview.css";
import { UnlockOutlined } from "@ant-design/icons"

const Overview = () => {

    // const dataSource = [
    //     {
    //       key: '1',
    //       name: 'Mike',
    //       age: 32,
    //       address: '10 Downing Street',
    //     },
    //     {
    //       key: '2',
    //       name: 'John',
    //       age: 42,
    //       address: '10 Downing Street',
    //     },
    //   ];

    const columns = [
        {
            title: 'Customer Email',
            dataIndex: 'customeremail',
            key: 'customeremail',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
        },
        {
            title: 'Created',
            dataIndex: 'created',
            key: 'created',
        },
        {
            title: 'Sent',
            dataIndex: 'sent',
            key: 'sent',
        },
        {
            title: 'Type',
            dataIndex: 'type',
            key: 'type',
        },
        {
            title: 'Reference number',
            dataIndex: 'reference',
            key: 'reference',
        },
    ];

    return (
        <React.Fragment>
            <h1>Overview</h1>
            <Card className="pb-5 pt-5">
                <Row>
                    <Col xs={24} sm={24} md={24} lg={12}>
                        <div className="text-center">
                            <img src={inboximg} alt="inboximg" />
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={12}>
                        <h4>
                            Let's invite some customers
                        </h4>
                        <p>Get some reviews so you can promote them later.
                            Send review invitations to your customers now.</p>
                        <Button type="primary" className="mb-3">Start inviting automatically</Button><br />
                        <Link to="#" className="">Send yourself a test invitation</Link>
                    </Col>
                </Row>
            </Card>
            <h3>Your performance in the last 28 days</h3>

            <Row>
                <Col xs={24} sm={24} md={24} lg={8}>
                    <Card className="mr-2">
                        <h4>0</h4>
                        <h4>Invitations delivered</h4>
                        <h4>0</h4>
                        <h4>Verified reviews</h4>
                        <h4>3.7</h4>
                        <h4>TrustScore</h4>
                    </Card>
                </Col>
                <Col xs={24} sm={24} md={24} lg={16}>
                    <Card className="ml-2">
                        <Row>
                            <Col xs={24} sm={24} md={24} lg={12}>
                                <p>Your most used service review template</p>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={12}>
                                <div style={{ position: "relative" }}> 
                                {/* <BarChart /> */}
                                <StackedColumn />
                                </div>
                                <div className="unlock-features">
                                    <div className="border mt-3 bg-white">
                                        <h3 className="pl-2">Want to see more on how your invitations are converting?</h3>
                                        <p className="pl-2">Get access to more.</p>
                                        <Link to="/app/apps/getreview/unlock" className="pl-2"><UnlockOutlined /> Unlock feature</Link>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
            <span className="d-flex justify-content-between">
                <h3>Recently invited customers</h3>
                <Link to="/app/apps/getreview/invitationsHistory" className="mt-2">See full invitation history</Link>
            </span>
            <Card>
                <Row>
                    <Col xs={24} sm={24} md={24} lg={24}>
                        <Table columns={columns} />
                        <div className="text-center mt-3">
                            <Link to="/app/apps/getreview/invitationsHistory">See full invitation history</Link>
                            </div>
                    </Col>
                </Row>
            </Card>
        </React.Fragment>
    )
};

export default Overview;