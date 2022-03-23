import { Col, Row, Input, Select, DatePicker, Button, Card, Comment, Avatar, Form, Tabs, Checkbox, Progress, Divider } from "antd";
import { FacebookFilled, TwitterCircleFilled, LinkedinFilled } from "@ant-design/icons"
import React, { useState } from "react";
// import moment from 'moment';
import { Link } from "react-router-dom";
import "../service.css"



const Inbox = () => {

    const { Search } = Input;
    const { Option } = Select;
    const { TextArea } = Input;
    const { TabPane } = Tabs;

    function onChange(e) {
        console.log(`checked = ${e.target.checked}`);
    }


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
    // const [comments, setComments] = useState([]);
    // const [submitting, setSubmitting] = useState(false);
    const [value, setValue] = useState('');
    console.log('value', value);

    // const handleSubmit = () => {
    //     if (value) {
    //         setSubmitting(true);
    //     }

    // }

    // const CommentList = ({ comments }) => (
    //     <List
    //         dataSource={comments}
    //         header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
    //         itemLayout="horizontal"
    //         renderItem={props => <Comment {...props} />}
    //     />
    // );

    const Editor = ({ onChange, value }) => (
        <>
            <Form.Item>
                <TextArea rows={4} onChange={onChange} value={value} />
            </Form.Item>
            <Form.Item>
                <Button htmlType="submit" type="primary">
                    Add Comment
                </Button>
            </Form.Item>
        </>
    );

    // const children = [];
    // children.push(<><Option >
    //     <ul className="p-0" style={{ listStyle: "none" }}>
    //         <li className="d-flex align-items-baseline">
    //             <Checkbox onChange={onChange} className="check-label">Bad</Checkbox>
    //             <Progress percent={100} className="progress" />
    //         </li>
    //     </ul>
    // </Option>
    //     <Option >
    //         <ul className="p-0" style={{ listStyle: "none" }}>
    //             <li className="d-flex align-items-baseline">
    //                 <Checkbox onChange={onChange} className="check-label">Poor</Checkbox>
    //                 <Progress percent={70} className="progress" />
    //             </li>
    //         </ul>
    //     </Option></>);
    function handleChange(value) {
        console.log(value);
    }

    function handleChangesecond(e) {
        setValue(e.target.value);
    }

    const onSearch = value => console.log(value);



    function callback(key) {
        console.log(key);
    }

    return (
        <React.Fragment>
            <Row>
                <Col xs={24} sm={24} md={24} lg={24}>
                    <Search placeholder="input search text"
                        style={{ width: '15%' }} className="mr-1" onSearch={onSearch} />
                    <Select
                        className="mr-1 select-option mb-2"
                        mode="multiple"
                        allowClear
                        style={{ width: '10%' }}
                        placeholder="Rating Star"
                        onChange={handleChange}
                    >
                        <Option>
                            <ul>
                                <li className="d-flex align-items-baseline">
                                    <Checkbox onChange={onChange} className="check-label">Poor</Checkbox>
                                    <Progress percent={70} className="progress" />
                                </li>
                            </ul>
                        </Option>
                        <Option>
                            <ul>
                                <li className="d-flex align-items-baseline">
                                    <Checkbox onChange={onChange} className="check-label">Poor</Checkbox>
                                    <Progress percent={70} className="progress" />
                                </li>
                            </ul>
                        </Option>
                        <Option>
                            <ul>
                                <li className="d-flex align-items-baseline">
                                    <Checkbox onChange={onChange} className="check-label">Poor</Checkbox>
                                    <Progress percent={70} className="progress" />
                                </li>
                            </ul>
                        </Option>

                    </Select>
                    <Select
                        className="mr-1"
                        mode="multiple"
                        allowClear
                        style={{ width: '10%' }}
                        placeholder="Reply"
                        onChange={handleChange}
                    >
                        <Option>gbg</Option>
                    </Select>
                    <DatePicker className="mr-1" renderExtraFooter={() => 'extra footer'} />
                    <Select
                        className="mr-1"
                        mode="multiple"
                        allowClear
                        style={{ width: '10%' }}
                        placeholder="Language"
                        onChange={handleChange}
                    >
                        <Option></Option>
                    </Select>
                    <Select
                        className="mr-1"
                        mode="multiple"
                        allowClear
                        style={{ width: '10%' }}
                        placeholder="Flag"
                        onChange={handleChange}
                    >
                        <Option></Option>
                    </Select>
                    <Select
                        className="mr-1"
                        mode="multiple"
                        allowClear
                        style={{ width: '10%' }}
                        placeholder="Find reviewer"
                        onChange={handleChange}
                    >
                        <Option></Option>
                    </Select>
                    <Select
                        className="mr-1"
                        mode="multiple"
                        allowClear
                        style={{ width: '10%' }}
                        placeholder="Source"
                        onChange={handleChange}
                    >
                        <Option></Option>
                    </Select>
                    <Button>Export</Button>
                </Col>
            </Row>
            <Row className="mt-3">
                <Col xs={24} sm={24} md={24} lg={6}>
                    <div className="p-4 border-right mr-2">
                        <h4>Awaiting reply</h4>
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
                                            onChange={(e) => handleChangesecond(e)}
                                            value={value}
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