import { Card, Row, Form, Input, Col, Button } from 'antd';
import React from 'react';
import legal from "../../../../../../assets/img/legal.svg";

const LegalNotice = () => {

    const [form] = Form.useForm();

    return (
        <React.Fragment>
            <Row>
                <Col xs={24} sm={24} md={24} lg={16}>
                    <Card className="mr-2">
                        <h2>Display a legal notice in your invitations (optimized template)</h2>
                        <p>To comply with strict international commercial messaging and anti-spam laws, make sure to enable our legal notice feature and fill out the required information.</p>
                        <h4 className="mt-2">Legal information</h4>
                        <Form form={form} layout="vertical" name="register-form">

                            <Form.Item
                                label="Legal name of business:"
                                name="legalname"
                                hasFeedback
                                id='numberInput'
                                required
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="Business registration number:"
                                name="business"
                                hasFeedback
                                required
                            >
                                <Input />
                            </Form.Item>
                            <h4>Contact information</h4>
                            <Form.Item
                                label="Address:"
                                name="first_name"
                                hasFeedback
                                required
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="Email address:"
                                name="last_name"
                                hasFeedback
                                required
                            >
                                <Input />
                            </Form.Item>
                        </Form>
                        <Button type="primary" className="mt-4 font-weight-bold w-100">Save changes</Button>
                    </Card>
                </Col>
                <Col xs={24} sm={24} md={24} lg={8}>
                    <Card className="ml-2">
                        <h2 className="font-weight-bold">What’s a legal notice?</h2>
                        <h4>A legal notice is the company information that you are legally required to include in some commercial content.

                            To be compliant with the CAN-SPAM Act and other messaging laws, simply enable the feature, and your legal notice will be shown in the footer of all your invitations.</h4>
                            <img src={legal} alt="legal" />
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
};

export default LegalNotice;