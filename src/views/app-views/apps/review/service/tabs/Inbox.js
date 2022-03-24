import { Col, Row, Input, Select, Modal, Collapse, DatePicker, Button, Rate, Card, Comment, Avatar, Form, Tabs, Checkbox, Divider } from "antd";
import { FacebookFilled, TwitterCircleFilled, LinkedinFilled, CheckCircleFilled } from "@ant-design/icons"
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../service.css"
import star from "../../../../../../assets/img/stars-5.svg";
import modalimage from "../../../../../../assets/img/b165e328827af07bf60e.svg"



const Inbox = () => {

    const { Search } = Input;
    const { Option } = Select;
    const { TextArea } = Input;
    const { TabPane } = Tabs;
    const { Panel } = Collapse;

    function onChange(e) {
        console.log(`checked = ${e.target.checked}`);
    }

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };


    const [copied, setCopied] = useState(false);

    function copy() {
        const el = document.createElement("input");
        el.value = window.location.href;
        document.body.appendChild(el);
        el.select();
        document.execCommand("copy");
        document.body.removeChild(el);
        setCopied(true);
    }

    // const [value, setValue] = useState('');


    const Editor = ({ onChange, value }) => (
        <>
            <Form.Item>
                <TextArea rows={4} onChange={onChange} value={value} />
            </Form.Item>
            <Form.Item>
                <Button htmlType="submit" type="primary">
                Post reply
                </Button>
            </Form.Item>
        </>
    );
    function handleChange(value) {
        console.log(value);
    }

    // const handleChangesecond = (e) => {
    //     setValue(e.target.value);
    // }

    const onSearch = value => console.log(value);



    function callback(key) {
        console.log(key);
    }

    return (
        <React.Fragment>
            <Row>
                <Col xs={24} sm={24} md={24} lg={24}>
                    <Search placeholder="input search text"
                        style={{ width: '15%' }} className="mr-1 font-weight-bold" onSearch={onSearch} />
                    <Select
                        className="mr-1 select-option mb-2 font-weight-bold"
                        mode="multiple"
                        allowClear
                        style={{ width: '10%' }}
                        placeholder="Rating Star"
                        onChange={handleChange}
                    >
                        <Option value='bad'>
                            <ul>
                                <li className="d-flex align-items-baseline">
                                    <Checkbox onChange={onChange} className="check-label">Bad</Checkbox>
                                    <Rate defaultValue={1} />
                                </li>
                            </ul>
                        </Option>
                        <Option value='poor'>
                            <ul>
                                <li className="d-flex align-items-baseline">
                                    <Checkbox onChange={onChange} className="check-label">Poor</Checkbox>
                                    <Rate defaultValue={2} />
                                </li>
                            </ul>
                        </Option>
                        <Option value='average'>
                            <ul>
                                <li className="d-flex align-items-baseline">
                                    <Checkbox onChange={onChange} className="check-label">Average</Checkbox>
                                    <Rate defaultValue={3} />
                                </li>
                            </ul>
                        </Option>
                        <Option value='great'>
                            <ul>
                                <li className="d-flex align-items-baseline">
                                    <Checkbox onChange={onChange} className="check-label">Great</Checkbox>
                                    <Rate defaultValue={4} />
                                </li>
                            </ul>
                        </Option>
                        <Option value='excellent'>
                            <ul>
                                <li className="d-flex align-items-baseline">
                                    <Checkbox onChange={onChange} className="check-label">Excellent</Checkbox>
                                    <Rate defaultValue={5} />
                                </li>
                            </ul>
                        </Option>
                        <Button>Apply</Button>
                    </Select>
                    <Select className="mr-1"
                        allowClear
                        style={{ width: '10%' }}
                        onChange={handleChange}
                        placeholder="Reply"
                    >
                        <Option value="male">
                            Reviews <b>with a reply</b>
                        </Option>
                        <Option value="female">
                            Reviews <b>without a reply</b>
                        </Option>
                        <Button>Apply</Button>
                    </Select>
                    <DatePicker className="mr-1" renderExtraFooter={() => 'extra footer'} />
                    <Select className="mr-1"
                        allowClear
                        mode="multiple"
                        style={{ width: '10%' }}
                        onChange={handleChange}
                        placeholder="Language"
                    >
                        <Option value="english">
                            English(1)
                        </Option>
                        <Button>Apply</Button>
                    </Select>
                    <Select className="mr-1"
                        allowClear
                        style={{ width: '10%' }}
                        onChange={handleChange}
                        placeholder="Flag"
                    >
                        <Option value="flagged">
                            Reviews <b>flagged</b>
                        </Option>
                        <Option value="notflaged">
                            Reviews <b>not flagged</b>
                        </Option>
                        <Button>Apply</Button>
                    </Select>
                    <Select className="mr-1"
                        allowClear
                        style={{ width: '10%' }}
                        onChange={handleChange}
                        placeholder="Find reviewer"
                    >
                        <Option value="contacted">
                            Reviewer  <b>contacted</b>
                        </Option>
                        <Option value="notcontacted">
                            Reviewer <b>not contacted</b>
                        </Option>
                        <Option value="replied">
                            Reviewer <b>replied</b>
                        </Option>
                        <Button>Apply</Button>
                    </Select>
                    <Select className="mr-1"
                        allowClear
                        style={{ width: '10%' }}
                        onChange={handleChange}
                        placeholder="Source"
                    >
                        <Option value="Automatic">
                            Automatic Invitation
                        </Option>
                        <Option value="Manual">
                            Manual Invitation
                        </Option>
                        <Option value="Organic">
                            Organic
                        </Option>
                        <Option value="Generated">
                            Generated Link
                        </Option>
                        <Option value="Basic">
                            Basic Invitation
                        </Option>
                        <Option value="Embedded">
                            Embedded Review Form
                        </Option>
                        <Button>Apply</Button>
                    </Select>
                    <Button className="font-weight-bold text-dark" onClick={showModal}>Export</Button>
                    <Modal title="Export your reviews" width={1000} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                        <Card>
                            <Row>
                                <Col xs={24} sm={24} md={24} lg={18}>
                                    <h4>This feature is part of the Enhance add-on module. You can unlock it by upgrading your plan.</h4>
                                </Col>
                                <Col xs={24} sm={24} md={24} lg={6}>
                                    <Button type="primary">Upgrade to access</Button>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={24} sm={24} md={24} lg={24}>
                                    <Collapse accordion>
                                        <Panel header="Show all features in the Enhance add-on module" key="1">
                                            <h5 className="pb-2">The add-on module includes:</h5>
                                            <Row>
                                                <Col xs={24} sm={24} md={24} lg={8}>
                                                    <ul className="unstyled">
                                                        <div className="d-flex">
                                                            <CheckCircleFilled className="text-success mr-3 mt-1" />
                                                            <div>
                                                                <li className="list-box">
                                                                     <b>Promotion and guarantee content boxes</b> 
                                                                     to build brand awareness on your Trustpilot public profile
                                                                </li>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex">
                                                            <CheckCircleFilled className="text-success mr-3 mt-1" />
                                                            <div>
                                                                <li className="list-box">
                                                                     <b>Advanced analytics</b> 
                                                                     to track Google organic search performance and invitation-to-review conversion
                                                                </li>
                                                            </div>
                                                        </div>
                                                    </ul>
                                                </Col>
                                                <Col xs={24} sm={24} md={24} lg={8}>
                                                    <ul>
                                                        <div className="d-flex">
                                                            <CheckCircleFilled className="text-success mr-3 mt-1" />
                                                            <div>
                                                                <li className="list-box">
                                                                    <b>Facebook Like content box</b> 
                                                                    to highlight your Facebook page on your Trustpilot public profile
                                                                </li>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex">
                                                            <CheckCircleFilled className="text-success mr-3 mt-1" />
                                                            <div>
                                                                <li className="list-box">
                                                                    <b>Export review data</b> 
                                                                    to share and analyze with team members in your company
                                                                </li>
                                                            </div>
                                                        </div>
                                                    </ul>
                                                </Col>
                                                <Col xs={24} sm={24} md={24} lg={8}>
                                                    <ul>
                                                        <div className="d-flex">
                                                            <CheckCircleFilled className="text-success mr-3 mt-1" />
                                                            <div>
                                                                <li className="list-box"> <b>Customized review invitations</b> to add your company’s logo and branding</li>
                                                            </div>
                                                        </div>
                                                    </ul>
                                                </Col>
                                            </Row>
                                        </Panel>
                                    </Collapse>
                                    <div className="background-color m-4">
                                        <img src={modalimage} alt="modalimage" />
                                        <h4 className="mt-3">Transform good teams into great ones</h4>
                                        <h5 className="mt-3">Export review data into a CSV file to share customer feedback and build better experiences across all departments of your company.</h5>
                                    </div>
                                </Col>
                            </Row>
                        </Card>
                    </Modal>
                </Col>
            </Row>
            <Row className="mt-3">
                <Col xs={24} sm={24} md={24} lg={6}>
                    <div className="p-4 border-right mr-2">
                        <span className="d-flex justify-content-between">
                            <h4>Awaiting reply</h4>
                            <h4 className="mr-2">1</h4>
                        </span>
                        <table className="table">
                            <tr>
                                <th className="px-5 py-2">1-star reviews</th>
                                <td>0</td>
                            </tr>
                            <tr>
                                <th className="px-5 py-2">2-star reviews</th>
                                <td>0</td>
                            </tr>
                            <tr>
                                <th className="px-5 py-2">3-star reviews</th>
                                <td>0</td>
                            </tr>
                            <tr>
                                <th className="px-5 py-2">4-star reviews</th>
                                <td>0</td>
                            </tr>
                            <tr>
                                <th className="px-5 py-2">5-star reviews</th>
                                <td>1</td>
                            </tr>
                        </table>
                    </div>
                </Col>
                <Col xs={24} sm={24} md={24} lg={18}>
                    <Card>
                        <img src={star} alt="star" width={130} className="mb-2" />
                        <h4>Great Product Deliveries</h4>
                        <p>We worked with Engineer Master Team and we got a great product from them we still doing maintenance job with them.</p>
                        <p>by<span>Style Cabbie</span></p>
                        <p>Source: <span>Organic</span></p>
                        <Tabs defaultActiveKey="1" onChange={callback}>
                            <TabPane tab="Reply" key="1">
                                {/* {comments.length > 0 && <CommentList comments={comments} />} */}
                                <Comment
                                    avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
                                    content={
                                        <Editor
                                        />
                                    }
                                />
                            </TabPane>
                            <TabPane tab="Share activity" key="2">
                                <p>Share this review with colleagues, or show it off on your social media channels.
                                    Copy the direct link, download as an image, or style to make it your own.</p>
                                <span className="d-flex">
                                    <Button type="primary" className="m-2"><Link className="">Style</Link></Button>
                                    <Button className="m-2"><a href="#/" download>Download image</a></Button>
                                    <Button onClick={copy} className="m-2">{!copied ? "Copy link" : "Copied!"}</Button>
                                    <Button className="m-2"><FacebookFilled /></Button>
                                    <Button className="m-2"><TwitterCircleFilled /></Button>
                                    <Button className="m-2"><LinkedinFilled /></Button>
                                </span>
                            </TabPane>
                            <TabPane tab="Find Reviewer" key="3">
                                <div>
                                    <h2>Contact the reviewer</h2>
                                    <h3>How it works</h3>
                                    <h5>We’ll let the reviewer know you’d like more information to help you identify them and their experience with Engineer Master Solutions Pvt Ltd. It's up to them whether they choose to share their full name, email, order ID, phone number, or all of the above with you.

                                        They’ll have 3 days to reply.</h5>
                                    <h3>Here’s the email we’ll send to Style Cabbie:</h3>
                                    <h5>(We'll translate this message to match Style Cabbie’s own language)</h5>
                                    <div className="border p-5">
                                        <table>
                                            <tr>
                                                <th className="text-muted">From:</th>
                                                <th>Trustpilot</th>
                                            </tr>
                                            <tr>
                                                <th className="text-muted">To:</th>
                                                <th>Style Cabbie</th>
                                            </tr>
                                            <tr>
                                                <th className="text-muted">Subject:</th>
                                                <th>Engineer Master Solutions Pvt Ltd would like some information regarding your review</th>
                                            </tr>
                                        </table>
                                        <Divider />
                                        <p>Hi Style Cabbie,</p>
                                        <p>Thanks for your review on Trustpilot.</p>
                                        <p>Based on your review, Engineer Master Solutions Pvt Ltd would like a little more information about your experience. This will help them write a more useful reply to you. It'll also help them verify that you’ve had a genuine experience with their business.</p>
                                        <p>Of course, it’s totally up to you what you share.</p>
                                        <Link to="#/">Provide more information</Link>
                                        <p>Thanks for helping Engineer Master Solutions Pvt Ltd connect the dots!</p>
                                        <p>The Trustpilot Team</p>
                                        <Button type="primary">Send Request</Button>
                                    </div>
                                </div>
                            </TabPane>
                        </Tabs>

                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
};

export default Inbox;