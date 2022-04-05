import { Button, Card, Col, Row, Switch, Modal, Tabs, Tooltip } from "antd";
import React, { useState } from "react";
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import reviewimg from "../../../../../../assets/img/004c1a5fe9e190cb1c25.png";
import trustimg from "../../../../../../assets/img/693d76c132efd9f943d2.png"

const Settings = () => {

    const { TabPane } = Tabs;

    function callback(key) {
        console.log(key);
    }

    const [isModalVisible, setIsModalVisible] = useState(false);
    // const [switchModal, setSwitchModal] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    // const switchDisable = () => {
    //     setSwitchModal(true)
    // }
    // const handleOkSwitch = () => {
    //     setSwitchModal(false);
    // };

    // const handleCancelSwitch = () => {
    //     setSwitchModal(false);
    // };
    const text = <>
    <span className="mb-3">Doing this removes attributes from all your products. Your customers will also no longer be able to rate individual product attributes.</span><br />
    <br />
    <span className="mt-4 pt-3">You can read more about product attribute ratings in our <Link to="3">Support article.</Link></span>
    </>

    return (
        <React.Fragment>
            <Row>
                <Col xs={24} sm={24} md={24} lg={24}>
                    <Card>
                        <h4>Product attributes</h4>
                        <div className="d-flex justify-content-between">
                            <div>
                                <h5>Ask customers to rate your product attributes</h5>
                                <p>Turn on this feature to get detailed product ratings for all your products.
                                    <Button onClick={showModal} className="text-info ml-3">Learn more.</Button>
                                </p>
                                <Modal title="What are product attribute ratings?" okText="Got it!" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} width={1000}>
                                    <Row>
                                        <Col xs={24} sm={24} md={24} lg={12}>
                                            <div className="border-right pr-5">
                                                <h3>Customers rate every part of your product</h3>
                                                <p>Let your customers rate your product’s attributes.
                                                    This gives your customers a chance to share the product information that matters
                                                    the most to them with you.</p>
                                                <h3>Every rating gives better product insights</h3>
                                                <p>Dig into the most important details of your products. Find out why certain products perform better
                                                    than others, what works well, and what needs improvement.</p>
                                                <h3>Leading to powerful product knowledge</h3>
                                                <p>Improve sales by promoting your product’s winning attributes and give your customers that little extra boost of confidence when buying from you at the same time.</p>
                                                <p>You can read more about Product Attributes in our <Link to="/#">Support article.</Link></p>
                                            </div>
                                        </Col>
                                        <Col xs={24} sm={24} md={24} lg={12} className="d-flex justify-content-center">
                                            <Tabs onChange={callback} className="position-absolute" type="card">
                                                <TabPane tab="Review page" key="1">
                                                    <img src={reviewimg} width={250} alt="reviewimg" />
                                                </TabPane>
                                                <TabPane tab="TrustBox" key="2">
                                                    <img src={trustimg} width={300} alt="trustimg" />
                                                </TabPane>
                                            </Tabs>,
                                        </Col>
                                    </Row>
                                </Modal>
                            </div>
                            <Tooltip placement="top" title={text}>
                                <Switch
                                    checkedChildren={<CheckOutlined />}
                                    unCheckedChildren={<CloseOutlined />}
                                    defaultChecked
                                />
                            </Tooltip>
                            {/* <Switch
                                checkedChildren={<CheckOutlined />}
                                unCheckedChildren={<CloseOutlined />
                            }
                                defaultChecked
                                onClick={switchDisable}
                            />
                            
                            <Modal title="Disable product attribute ratings?" visible={switchModal} okText="Yes, disable attributes" onOk={handleOkSwitch} onCancel={handleCancelSwitch}>
                                <h5>Doing this removes attributes from all your products. Your customers will also no longer be able to rate individual product attributes.</h5>
                                <h5>You can read more about product attribute ratings in our <Link to="#">Support article.</Link></h5>
                            </Modal> */}
                        </div>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xs={24} sm={24} md={24} lg={24}>
                    <Card>
                        <h4>User-generated photos and videos</h4>
                        <div className="d-flex justify-content-between">
                            <div>
                                <h5>Collect user-generated photos and videos of your products</h5>
                                <p>Turn on this feature to ask customers for photos or videos of your products whenever they leave a new review.</p>
                            </div>
                            <Switch
                                checkedChildren={<CheckOutlined />}
                                unCheckedChildren={<CloseOutlined />}
                                defaultChecked
                            />
                        </div>
                        <div className="setting-background">
                            <h5>How it works:</h5>
                            <ol className="pl-3">
                                <li className="py-2">Your customers can add up to 3 product photos or videos when leaving a review.</li>
                                <li className="py-2">To keep your brand safe, all uploaded photos and videos go through AI screening.</li>
                                <li className="py-2">Photos and videos will then be shown in TrustBox widgets alongside your reviews.</li>
                            </ol>
                            <Link to="/#">Read our support article for more information</Link>
                        </div>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
};

export default Settings;