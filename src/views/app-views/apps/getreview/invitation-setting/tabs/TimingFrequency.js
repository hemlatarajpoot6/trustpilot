import React, { useState } from "react";
import { Card, Select, Tooltip, Radio, InputNumber, Checkbox, Button, Modal, Row, Col } from "antd";
import { InfoCircleFilled } from "@ant-design/icons"
import { Link } from "react-router-dom";

const TimingFrequency = () => {

    const { Option } = Select;
    const [value1, setValue1] = useState(1);
    const [visible, setVisible] = useState(false);
    const [value2, setValue2] = useState(1);

    function handleChange(value) {
        console.log(`selected ${value}`);
    }

    function onChange(value) {
        console.log('changed', value);
    }

    const onChange1 = e => {
        console.log('radio checked', e.target.value);
        setValue1(e.target.value);
    };
    const onChange2 = e => {
        console.log('radio checked', e.target.value);
        setValue2(e.target.value);
    };

    const text = <span>Specify if you want to ask the customer for a product review right after they fill out the service review, or if you want to send a separate product review invitation later.</span>;

    return (
        <React.Fragment>
            <Row>
                <Col xs={24} sm={24} md={24} lg={16}>
                    <Card className="mr-2 font-weight-bold">
                        <h4>Send a service review invitation</h4>
                        <span className="d-flex align-items-baseline">
                            <Select defaultValue="7" style={{ width: "20%" }} onChange={handleChange} className="mr-2">
                                <Option value="1">1 Days</Option>
                                <Option value="2">2 Days</Option>
                                <Option value="3">3 Days</Option>
                                <Option value="4">4 Days</Option>
                                <Option value="5">5 Days</Option>
                                <Option value="6">6 Days</Option>
                                <Option value="7">7 Days</Option>
                            </Select>
                            <h5>after your customer’s order</h5>
                        </span>
                        <h4 className="mt-4">Send a product review invitation <Tooltip placement="topLeft" title={text}>
                            <InfoCircleFilled className="" />
                        </Tooltip></h4>
                        <Radio.Group onChange={onChange1} value={value1} className="font-weight-bold">
                            <Radio value={3} className="font-weight-bold">Together with the service review invitation</Radio><br />
                            <span className="d-flex align-items-baseline">
                                <Radio value={4} className="font-weight-bold">As a separate invitation
                                </Radio>
                                    <Select defaultValue="7" onChange={handleChange} className="ml-1 mr-1 mt-1 mb-1">
                                        <Option value="1">1 Days</Option>
                                        <Option value="2">2 Days</Option>
                                        <Option value="3">3 Days</Option>
                                        <Option value="4">4 Days</Option>
                                        <Option value="5">5 Days</Option>
                                        <Option value="6">6 Days</Option>
                                        <Option value="7">7 Days</Option>
                                    </Select>
                            </span>
                        </Radio.Group> after your customer’s order<br />
                        <Link to="#" className="text-info">Learn more about product review invitations</Link>
                        <h4 className="mt-3">Invitation frequency</h4>
                        <Radio.Group onChange={onChange2} value={value2}>
                            <Radio value={1} className="font-weight-bold">Each customer should be invited to write a review after every purchase they make</Radio><br />
                            <span className="d-flex align-items-baseline">
                                <Radio value={2} className="font-weight-bold">Only ask each customer to review 1 order every
                                    <InputNumber min={1} max={10} defaultValue={3} onChange={onChange} className="m-2" />
                                    day(s)max. 365
                                </Radio>
                            </span>
                            <Radio value={3} className="font-weight-bold">Only ask each customer to review 1 order every 1 year</Radio><br />
                        </Radio.Group>
                        <h4 className="mt-3">Invitation reminders</h4>
                        <span className="d-flex align-items-baseline font-weight-bold">
                            <Checkbox onChange={onChange} className="font-weight-bold">Send an invitation reminder to each customer after</Checkbox> <Select defaultValue="7" onChange={handleChange} className="ml-2 mr-2">
                                <Option value="1">1 Days</Option>
                                <Option value="2">2 Days</Option>
                                <Option value="3">3 Days</Option>
                                <Option value="4">4 Days</Option>
                                <Option value="5">5 Days</Option>
                                <Option value="6">6 Days</Option>
                                <Option value="7">7 Days</Option>
                            </Select>
                            if they don't leave a review
                        </span>
                        <p onClick={() => setVisible(true)} className="font-weight-bold text-info cursor-pointer">Show preview</p>
                        <Button type="primary" className="mt-4 font-weight-bold">Save changes</Button>
                        <Modal
                            title="A reminder to review engineermaster.in"
                            centered
                            visible={visible}
                            onOk={() => setVisible(false)}
                            onCancel={() => setVisible(false)}
                            width={800}
                        >
                            <div style={{ height: '450px', overflow: 'auto' }}>
                                {/* <iframe src="https://www.youtube.com/embed/cWDJoK8zw58" title="automic" sandbox=" allow-scripts allow-same-origin" frameborder="0" className="w-100" ></iframe> */}
                                <iframe src="https://example.org"
                                    title="iframe Example 1" width="700" height="500">
                                </iframe>
                            </div>
                        </Modal>
                    </Card>
                </Col>
               
                    <Col xs={24} sm={24} md={24} lg={8}>
                       <Card className="ml-2">
                       <h2 className="font-weight-bold">Just a heads up</h2>
                        <h4>Trustpilot will cancel invitations automatically if a customer has already been invited to write a review for the same reference number.</h4>
                        <h4>Please note that the settings will not work if you send many invitations to the same person within a short time frame.</h4>
                       </Card>
                    </Col>
               
            </Row>
        </React.Fragment>
    )
};

export default TimingFrequency;