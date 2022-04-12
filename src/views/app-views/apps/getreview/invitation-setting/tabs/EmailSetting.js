import { Card, Col, Row, Tooltip, Input, Select, Button, Radio, Modal } from "antd";
import React, { useState } from "react";
import { InfoCircleFilled } from "@ant-design/icons";
import language from "../../unlock/language";
import { Link } from "react-router-dom";

const EmailSetting = () => {

    const { Option } = Select;

    const [value, setValue] = useState(1);
    const [value1, setValue1] = useState(1);
    const [value2, setValue2] = useState(1);
    const [inputField, setInputField] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [visible, setVisible] = useState(false);
    const [manage, setManage] = useState(false);

    const onChange = e => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };

    const onChange1 = e => {
        console.log('radio checked', e.target.value);
        setValue1(e.target.value);
    };

    const onChange2 = e => {
        console.log('radio checked', e.target.value);
        setValue2(e.target.value);
        if (e.target.value === 6) {
            setInputField(true)
        } else {
            setInputField(false)
        }

    };

    function handleChange(value) {
        console.log(`selected ${value}`);
    }

    const text = <span>This feature is only available for paid plans.</span>;
    const text2 = <span>Include a link to your Privacy Policy in the footer of review invitations.</span>;
    const text3 = <span>Trustpilot’s optimized templates are continuously tested and improved to get you the most reviews.</span>;

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const manageModal = () => {
        setManage(true);
    };

    const manageOk = () => {
        setManage(false);
    };

    const manageCancel = () => {
        setManage(false);
    };

    return (
        <React.Fragment>
            <Row>
                <Col xs={24} sm={24} md={24} lg={24}>
                    <Card>
                        <h5>Select a template for the service review invitations:</h5>
                        <span className="d-flex justify-content-between align-items-end p-1 border">
                            <h4>For purchase experiences (Best in test)</h4>
                            <p onClick={showModal} className="font-weight-bold text-info pt-1 cursor-pointer">Change</p>
                        </span>
                        <p onClick={() => setVisible(true)} className="font-weight-bold text-info">Show preview</p>
                        <h5 className="mt-4">Select a template for the product review invitations:</h5>
                        <span className="d-flex justify-content-between align-items-end p-1 border">
                            <h4>Optimized for product reviews</h4>
                            <p onClick={showModal} className="font-weight-bold text-info pt-1">Change</p>
                        </span>
                        <p onClick={() => setVisible(true)} className="font-weight-bold text-info">Show preview</p>
                        <h5 className="mt-4">Select company identifier for invitation templates:</h5>
                        <p className="font-weight-bold">The [CompanyIdentifier] placeholder is used in invitation templates to help your customers recognize your company.</p>
                        <Radio.Group onChange={onChange} value={value} className="font-weight-bold">
                            <Radio value={1} className="align-items-center mb-2">engineermaster.in</Radio><br />
                            <br />
                            <Radio value={2} className="align-items-center">Engineer Master Solutions Pvt Ltd</Radio><br />
                        </Radio.Group>
                        <h5 className="mt-4">Sender Name:</h5>
                        <Input defaultValue="engineermaster.in" className="font-weight-bold" />
                        <h5 className="mt-4">If customer replies to invitation, send the reply to:</h5>
                        <Input defaultValue="kapil.karda@engineermaster.in" className="font-weight-bold" />
                        <p onClick={manageModal} className="font-weight-bold text-info cursor-pointer">Manage your Reply-to emails</p>
                        <h5 className="mt-4">Sender Email:</h5>
                        <Radio.Group onChange={onChange1} value={value1} className="font-weight-bold">
                            <Radio value={3} className="align-items-center mb-2">Send from noreply.invitations@trustpilotmail.com (no further setup required)</Radio><br />
                            <Radio value={4} disabled className="align-items-center mb-2">Send email using your own email domain for the Sender Address (requires technical knowledge to set up)
                            </Radio>
                        </Radio.Group>
                        <Tooltip placement="topLeft" title={text}>
                            <InfoCircleFilled className="" />
                        </Tooltip> <br />
                        <h5 className="mt-4">Invitations landing page to send customers to:</h5>
                        <Select defaultValue="1" style={{ width: "100%" }} onChange={handleChange}>
                            <Option value="1">https://www.trustpilot.com</Option>
                            <Option value="2">https://www.trustpilot.com</Option>
                        </Select>
                        <h5 className="mt-4">Privacy policy link <Tooltip placement="topLeft" title={text2}>
                            <InfoCircleFilled className="" />
                        </Tooltip></h5>
                        <Radio.Group onChange={onChange2} value={value2} className="font-weight-bold">
                            <Radio value={5} className="align-items-center mb-2">No, I don’t want to link to my Privacy Policy</Radio><br />
                            <Radio value={6} className="align-items-center mb-2">Yes, I’d like to link to my Privacy Policy</Radio><br />
                        </Radio.Group><br />
                        {
                            inputField ?
                                <>
                                    <Input addonBefore="http://" placeholder="mycompany.com/privacypolicy" className="mt-3 font-weight-bold" /></>
                                : null
                        }
                        <Button type="primary" className="mt-4 font-weight-bold">Save changes</Button>
                        <Modal title="Select an email template" okText="Select this template" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} width={900}>
                            <Row>
                                <Col xs={24} sm={24} md={24} lg={12}>
                                    <h3>Optimized templates by Trustpilot  <Tooltip placement="topLeft" title={text3}>
                                        <InfoCircleFilled className="" />
                                    </Tooltip></h3>
                                    <Card className="mr-2 h-100">
                                        <Select defaultValue="English" style={{ width: "100%" }} onChange={handleChange} className="">
                                            {language && language.length > 0 && language.map((item, index) =>
                                                <Option value={item.code} key={index}>{item.name}</Option>

                                            )}
                                        </Select>
                                        <Button className="mt-4 mb-2 w-100">For non-purchase experiences</Button>
                                        <Button className="w-100">For purchase experiences (Best in test)</Button>
                                    </Card>
                                </Col>
                                <Col xs={24} sm={24} md={24} lg={12}>
                                    <h3>My custom templates</h3>
                                    <Card className="ml-2 h-100">
                                        <h5 className="p-2">Want custom email templates?
                                            With custom templates, you can personalize your invitations to match your brand. To learn more, please take a look at our features and pricing.</h5>
                                        <Link to="/app/apps/getreview/unlock" class="font-weight-bold text-info p-2">Upgrade</Link>
                                    </Card>
                                </Col>
                            </Row>
                            <p>Template ID: 59ce48fd83fadd0c98af38f4</p>
                        </Modal>
                        <Modal
                            title="⭐ ⭐ ⭐ ⭐ ⭐ Kuinka monta tähteä antaisit yritykselle engineermaster.in?

        "
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
                        <Modal title="Manage Reply-to emails" visible={manage} onOk={manageOk} onCancel={manageCancel}>
                            <h4>Add new Reply-to email</h4>
                            <Input.Group compact>
                                <Input style={{ width: '20%' }} placeholder="Email" />
                                <Select defaultValue="1" style={{ width: "70%" }} onChange={handleChange}>
                            <Option value="1">@engineermaster.in</Option>
                        </Select>
                                {/* <Input style={{ width: '30%' }} defaultValue="26888888" /> */}
                            </Input.Group>
                            <p className="mt-2">To add this Reply-to email address, click on the setup link in the verification email.</p>
                            <Button type="primary" className="font-weight-bold mb-3">Send verification</Button>
                            <h4>Remove Reply-to emails</h4>
                            <p>kapil.karda@engineermaster.in <span style={{fontSize: "11px"}}>(This email is active and can't be deleted.)</span></p>
                            <p>Remove the email addresses that you don't want to include.</p>
                        </Modal>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
};

export default EmailSetting;