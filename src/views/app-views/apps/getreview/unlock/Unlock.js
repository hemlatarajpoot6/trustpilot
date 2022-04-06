import React, { useState } from "react";
import ModalList from "./ModalList";
import { Button, Col, Row, Modal, Tooltip, Select, Card, Form, Input, Divider, Tabs } from "antd";
import upgradimg from "../../../../../assets/img/66910ad9d6acda66964b.png";
import fivestar from "../../../../../assets/img/stars-5.svg"
import onestar from "../../../../../assets/img/logo-black (1).svg"
import { CheckOutlined, InfoCircleFilled, EyeOutlined } from "@ant-design/icons"
import { Link } from "react-router-dom";
import language from "./language"

const Unlock = () => {

    const { TabPane } = Tabs;

    function callback(key) {
        console.log(key);
    }

    const { Option } = Select;
    const [form] = Form.useForm();

    const [contact, setContact] = useState(false);
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

    const contactModal = () => {
        setContact(true);
    };

    function handleChange(value) {
        console.log(`selected ${value}`);
    }

    const Showcase = <>
        <span className="">TrustBoxes are embedded website widgets that display customer feedback directly on your website or in marketing assets. With them, you can display your reviews, TrustScore, and star rating.</span><br /><br />
        <Link to="#" className="text-info p-2">Learn more</Link>
    </>;
    const Share = <>
        <span className="">Trustpilot offers multiple ways to share and showcase your reviews, TrustScore, and star rating on social media. Displaying them shows that you’re open to feedback and can help lead to more reviews from both current and potential customers.</span><br /><br />
        <Link to="#" className="text-info p-2">Learn more</Link>
    </>;
    const Qualify = <>
        <span className="">You can use your Trustpilot reviews to qualify for Google Seller Ratings and boost ad campaigns.</span><br /><br />
        <Link to="#" className="text-info p-2">Learn more</Link>
    </>;
    const Enhanced = <>
        <span className="">Trustpilot’s Marketing assets are official and ready-made graphics, logos, and templates. You can download and use them to showcase your reviews, TrustScore, or star rating.</span><br /><br />
        <Link to="#" className="text-info p-2">Learn more</Link>
    </>;
    const Image = <>
        <span className="">The Image Generator helps you create and style images displaying your reviews or star rating. You can share them on social media, or download them for your marketing materials.</span><br /><br />
        <Link to="#" className="text-info p-2">Learn more</Link>
    </>;
    const Send = <>
        <span className="">Ask your customers to write a review with Automatic Feedback Service (AFS). We’ll send them invitations after a purchase or service experience with your business.</span><br /><br />
        <Link to="#" className="text-info p-2">Learn more</Link>
    </>;
    const Ask = <>
        <span className="">This integration allows you to send invitations to past customers who ordered between a week and three months ago.</span><br /><br />
        <Link to="#" className="text-info p-2">Learn more</Link>
    </>;
    const Reply = <>
        <span className="">Any business or customer can flag a review if they feel it violates Trustpilot’s guidelines. We’ll assess the situation and take action if necessary.</span><br /><br />
        <Link to="#" className="text-info p-2">Learn more</Link>
    </>;
    const Multiple = <>
        <span className="">As the admin of your Trustpilot Business account, you can assign roles to other people at your business and set permissions.</span><br /><br />
        <Link to="#" className="text-info p-2">Learn more</Link>
    </>;
    const Trustscore = <>
        <span className="">We estimate what your TrustScore will look like based on your business’s performance in the last 28 days.</span><br /><br />
        <Link to="#" className="text-info p-2">Learn more</Link>
    </>;
    const eCommerce = <>
        <span className="">Our eCommerce integrations allow you to easily and automatically send invitations to your customers.</span><br /><br />
        <Link to="#" className="text-info p-2">Learn more</Link>
    </>;
    const Trustpilot = <>
        <span className="">Our marketing integrations make it simple to connect with your marketing platforms, so you can use your Trustpilot data to boost your strategy.</span><br /><br />
        <Link to="#" className="text-info p-2">Learn more</Link>
    </>;
    const Access = <>
        <span className="">Our add-on modules offer exclusive features that can help boost your company’s performance on Trustpilot.</span><br /><br />
        <Link to="#" className="text-info p-2">Learn more</Link>
    </>;


    return (
        <>
            <h1 className="mb-5">Upgrade and unlock more features</h1>
            <Row>
                <Col xs={24} sm={24} md={24} lg={16}>
                    <div className="text-center">
                        <img src={upgradimg} width={500} alt="upgradimg" />
                    </div>
                </Col>
                <Col xs={24} sm={24} md={24} lg={8} className="d-flex align-items-center">
                    <div>
                        <h2 className="">Upgrade and unlock advanced features</h2>
                        <ul className="p-0">
                            <div className="d-flex mt-3">
                                <CheckOutlined className="text-success mr-3 mt-1" />
                                <div>
                                    <li className="list-box-product-overview">
                                        Get more verified reviews and drive Google Seller Ratings
                                    </li>
                                </div>
                            </div>
                            <div className="d-flex">
                                <CheckOutlined className="text-success mr-3 mt-1" />
                                <div>
                                    <li className="list-box-product-overview">
                                        Attract new customers with website widgets and marketing assets
                                    </li>
                                </div>
                            </div>
                            <div className="d-flex">
                                <CheckOutlined className="text-success mr-3 mt-1" />
                                <div>
                                    <li className="list-box-product-overview">
                                        Capture valuable insight into your customer feedback
                                    </li>
                                </div>
                            </div>
                        </ul>
                    </div>
                </Col>
            </Row>
            <div className="bg-white height overflow-auto mt-5 mb-2">
                <Row>
                    <Col xs={24} sm={24} md={24} lg={8}>
                        <div className="border p-4 unlock-features-height">

                        </div>
                        <div className="border p-4 unlock-features-height">
                            <p>Showcase reviews with TrustBox widgets  <Tooltip placement="topLeft" title={Showcase}>
                                <InfoCircleFilled className="float-right mt-2" />
                            </Tooltip>
                            </p>
                        </div>
                        <div className="border pl-4 pt-4 pb-4 unlock-small-box">
                            <p className="mr-2">Share reviews on Twitter, Facebook or LinkedIn <Tooltip placement="topLeft" title={Share}>
                                <InfoCircleFilled className="float-right mt-1" />
                            </Tooltip></p>
                        </div>
                        <div className="border p-4 unlock-small-box">
                            <p>Qualify for Google Seller Ratings <Tooltip placement="topLeft" title={Qualify}>
                                <InfoCircleFilled className="float-right mt-2" />
                            </Tooltip></p>
                        </div>
                        <div className="border p-4 unlock-small-box">
                            <p>Enhanced marketing assets <Tooltip placement="topLeft" title={Enhanced}>
                                <InfoCircleFilled className="float-right mt-2" />
                            </Tooltip></p>
                        </div>
                        <div className="border p-4 unlock-small-box">
                            <p>Image generator for social media channels <Tooltip placement="topLeft" title={Image}>
                                <InfoCircleFilled className="float-right mt-2" />
                            </Tooltip></p>
                        </div>
                        <div className="border p-4 unlock-small-box">
                            <p>Send review invitations <Tooltip placement="topLeft" title={Send}>
                                <InfoCircleFilled className="float-right mt-2" />
                            </Tooltip></p>
                        </div>
                        <div className="border p-4 unlock-small-box">
                            <p>Ask past customers to write a review <Tooltip placement="topLeft" title={Ask}>
                                <InfoCircleFilled className="float-right mt-2" />
                            </Tooltip></p>
                        </div>
                        <div className="border p-4 unlock-small-box">
                            <p>Analytics and insights</p>
                        </div>
                        <div className="border p-4 unlock-small-box">
                            <p>Reply to or flag reviews <Tooltip placement="topLeft" title={Reply}>
                                <InfoCircleFilled className="float-right mt-2" />
                            </Tooltip></p>
                        </div>
                        <div className="border p-4 unlock-small-box">
                            <p>Multiple user access <Tooltip placement="topLeft" title={Multiple}>
                                <InfoCircleFilled className="float-right mt-2" />
                            </Tooltip></p>
                        </div>
                        <div className="border p-4 unlock-small-box">
                            <p>Trustscore forecast <Tooltip placement="topLeft" title={Trustscore}>
                                <InfoCircleFilled className="float-right mt-2" />
                            </Tooltip></p>
                        </div>
                        <div className="border p-4 unlock-small-box">
                            <p>eCommerce integrations (e.g. Shopify, Salesforce) <Tooltip placement="topLeft" title={eCommerce}>
                                <InfoCircleFilled className="float-right" />
                            </Tooltip></p>
                        </div>
                        <div className="border p-4 unlock-small-box">
                            <p>Trustpilot’s marketing integrations (e.g. Slack, Google Tag Manager) <Tooltip placement="topLeft" title={Trustpilot}>
                                <InfoCircleFilled className="float-right ml-4" />
                            </Tooltip></p>
                        </div>
                        <div className="border p-4 unlock-small-box">
                            <p>Access to paid add-on modules for additional features <Tooltip placement="topLeft" title={Access}>
                                <InfoCircleFilled className="float-right ml-4" />
                            </Tooltip></p>
                        </div>
                        <div className="border p-4 unlock-features-height">
                            <p>Customer support channels</p>
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={8}>
                        <div className="border p-4 unlock-features-height">
                            <h1>Free</h1>
                            <p>For small businesses to start engaging with their customers</p>
                        </div>
                        <div className="border p-4 unlock-features-height">
                            <h4>2 widgets included:</h4>
                            <ul className="p-0">
                                <div className="d-flex">
                                    <CheckOutlined className="text-success mr-3 mt-1" />
                                    <div>
                                        <li className="list-box-product-box" onClick={showModal}>
                                            Micro Review Count  <EyeOutlined />
                                        </li>
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <CheckOutlined className="text-success mr-3 mt-1" />
                                    <div>
                                        <li className="list-box-product-box" onClick={showModal}>
                                            Review Collector  <EyeOutlined />
                                        </li>
                                    </div>
                                </div>
                            </ul>
                        </div>
                        <div className="border p-4 unlock-small-box">
                            <div className="text-center text-success">
                                <CheckOutlined />
                            </div>
                        </div>
                        <div className="border p-4 unlock-small-box">
                            <div className="text-center text-success">
                                <CheckOutlined />
                            </div>
                        </div>
                        <div className="border p-4 unlock-small-box">
                            <div className="text-center">
                                --
                            </div>
                        </div>
                        <div className="border p-4 unlock-small-box">
                            <div className="text-center">
                                --
                            </div>
                        </div>
                        <div className="border p-4 unlock-small-box">
                            <p>100 per month</p>
                        </div>
                        <div className="border p-4 unlock-small-box">
                            <div className="text-center">
                                --
                            </div>
                        </div>
                        <div className="border p-4 unlock-small-box">
                            <p>Performance overview</p>
                        </div>
                        <div className="border p-4 unlock-small-box">
                            <div className="text-center text-success">
                                <CheckOutlined />
                            </div>
                        </div>
                        <div className="border p-4 unlock-small-box">
                            <div className="text-center">
                                --
                            </div>
                        </div>
                        <div className="border p-4 unlock-small-box">
                            <div className="text-center text-success">
                                <CheckOutlined />
                            </div>
                        </div>
                        <div className="border p-4 unlock-small-box">
                            <div className="text-center text-success">
                                <CheckOutlined />
                            </div>
                        </div>
                        <div className="border p-4 unlock-small-box">
                            <div className="text-center">
                                --
                            </div>
                        </div>
                        <div className="border p-4 unlock-small-box">
                            <div className="text-center">
                                --
                            </div>
                        </div>
                        <div className="border p-4 unlock-features-height">
                            <ul className="p-0">
                                <div className="d-flex">
                                    <CheckOutlined className="text-success mr-3 mt-1" />
                                    <div>
                                        <li className="list-box-product-box">
                                            Email
                                        </li>
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <CheckOutlined className="text-success mr-3 mt-1" />
                                    <div>
                                        <li className="list-box-product-box">
                                            Web
                                        </li>
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <CheckOutlined className="text-success mr-3 mt-1" />
                                    <div>
                                        <li className="list-box-product-box">
                                            Support center
                                        </li>
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <CheckOutlined className="text-success mr-3 mt-1" />
                                    <div>
                                        <li className="list-box-product-box">
                                            Chatbot
                                        </li>
                                    </div>
                                </div>
                            </ul>
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={8}>
                        <div className="border p-4 unlock-features-height">
                            <h1>Free</h1>
                            <p>For small businesses to start engaging with their customers</p>
                            <Button type="primary" onClick={contactModal} className="mt-4 Contact w-100">Contact us</Button>
                            <Modal
                                title="Message"
                                centered
                                visible={contact}
                                onOk={() => setContact(false)}
                                onCancel={() => setContact(false)}
                                width={1000}
                            >
                                <div className="text-center align-items-center">
                                    <div><CheckOutlined className="text-success upgrade-contact" /></div>
                                    <h2>Thanks, we've received your request</h2>
                                    <p>We are happy to hear that you want to upgrade 🎉
                                        We’ll be in touch soon.</p>
                                </div>
                            </Modal>
                        </div>
                        <div className="border p-4 unlock-features-height">
                            <h4>8 widgets included:</h4>
                            <ul className="p-0">
                                <div className="d-flex">
                                    <CheckOutlined className="text-success mr-3 mt-1" />
                                    <div>
                                        <li className="list-box-product-box" onClick={showModal}>
                                            Micro Review Count  <EyeOutlined />
                                        </li>
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <CheckOutlined className="text-success mr-3 mt-1" />
                                    <div>
                                        <li className="list-box-product-box" onClick={showModal}>
                                            Review Collector  <EyeOutlined />
                                        </li>
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <CheckOutlined className="text-success mr-3 mt-1" />
                                    <div>
                                        <li className="list-box-product-box" onClick={showModal}>
                                            Starter  <EyeOutlined />
                                        </li>
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <CheckOutlined className="text-success mr-3 mt-1" />
                                    <div>
                                        <li className="list-box-product-box" onClick={showModal}>
                                            Micro Button  <EyeOutlined />
                                        </li>
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <CheckOutlined className="text-success mr-3 mt-1" />
                                    <div>
                                        <li className="list-box-product-box" onClick={showModal}>
                                            Micro Combo  <EyeOutlined />
                                        </li>
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <CheckOutlined className="text-success mr-3 mt-1" />
                                    <div>
                                        <li className="list-box-product-box" onClick={showModal}>
                                            Micro Star  <EyeOutlined />
                                        </li>
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <CheckOutlined className="text-success mr-3 mt-1" />
                                    <div>
                                        <li className="list-box-product-box" onClick={showModal}>
                                            Micro Trust Score  <EyeOutlined />
                                        </li>
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <CheckOutlined className="text-success mr-3 mt-1" />
                                    <div>
                                        <li className="list-box-product-box" onClick={showModal}>
                                            Mini  <EyeOutlined />
                                        </li>
                                    </div>
                                </div>
                            </ul>
                        </div>
                        <div className="border p-4 unlock-small-box">
                            <div className="text-center text-success">
                                <CheckOutlined />
                            </div>
                        </div>
                        <div className="border p-4 unlock-small-box">
                            <div className="text-center text-success">
                                <CheckOutlined />
                            </div>
                        </div>
                        <div className="border p-4 unlock-small-box">
                            <div className="text-center text-success">
                                <CheckOutlined />
                            </div>
                        </div>
                        <div className="border p-4 unlock-small-box">
                            <div className="text-center text-success">
                                <CheckOutlined />
                            </div>
                        </div>
                        <div className="border p-4 unlock-small-box">
                            <p>500 per month</p>
                        </div>
                        <div className="border p-4 unlock-small-box">
                            <div className="text-center text-success">
                                <CheckOutlined />
                            </div>
                        </div>
                        <div className="border p-4 unlock-small-box">
                            <p>Extended insights with benchmarking</p>
                        </div>
                        <div className="border p-4 unlock-small-box">
                            <div className="text-center text-success">
                                <CheckOutlined />
                            </div>
                        </div>
                        <div className="border p-4 unlock-small-box">
                            <div className="text-center text-success">
                                <CheckOutlined />
                            </div>
                        </div>
                        <div className="border p-4 unlock-small-box">
                            <div className="text-center text-success">
                                <CheckOutlined />
                            </div>
                        </div>
                        <div className="border p-4 unlock-small-box">
                            <div className="text-center text-success">
                                <CheckOutlined />
                            </div>
                        </div>
                        <div className="border p-4 unlock-small-box">
                            <div className="text-center text-success">
                                <CheckOutlined />
                            </div>
                        </div>
                        <div className="border p-4 unlock-small-box">
                            <div className="text-center text-success">
                                <CheckOutlined />
                            </div>
                        </div>
                        <div className="border p-4 unlock-features-height">
                            <ul className="p-0">
                                <div className="d-flex">
                                    <CheckOutlined className="text-success mr-3 mt-1" />
                                    <div>
                                        <li className="list-box-product-box">
                                            Email
                                        </li>
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <CheckOutlined className="text-success mr-3 mt-1" />
                                    <div>
                                        <li className="list-box-product-box">
                                            Web
                                        </li>
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <CheckOutlined className="text-success mr-3 mt-1" />
                                    <div>
                                        <li className="list-box-product-box">
                                            Support center
                                        </li>
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <CheckOutlined className="text-success mr-3 mt-1" />
                                    <div>
                                        <li className="list-box-product-box">
                                            Live chat with a Support Agent
                                        </li>
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <CheckOutlined className="text-success mr-3 mt-1" />
                                    <div>
                                        <li className="list-box-product-box">
                                            Call back
                                        </li>
                                    </div>
                                </div>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </div>
            <ModalList />
            <Modal title="Micro Review Count" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} width={1000}>
                <Row gutter={[16, 16]} className="bg-eye-modal">
                    <Col xs={8} sm={8} md={8} lg={8} className="p-0">
                        <Card className="p-0 border-radius-0">
                            <h3>About</h3>
                            <p>Displays your current review count, or you can hide the number until you’re ready to show it.</p>
                            <Divider />
                            <span className="d-flex justify-content-between">
                                <h3>Customize</h3>
                                <Link to="#" className="mt-2">Need help?</Link>
                            </span>
                            <Form form={form} layout="vertical" name="register-form">
                                <Form.Item
                                    name="language"
                                    label="Widget language"
                                    hasFeedback
                                    className="mt-3"
                                >
                                    <Select defaultValue='choose' onChange={handleChange}>
                                        <Option value='choose'>English (New Zealand)</Option>
                                        {language && language.length > 0 && language.map((item, index) =>
                                            <Option value={item.code} key={index}>{item.name}</Option>

                                        )}
                                    </Select>
                                </Form.Item>
                                <Form.Item
                                    name="width"
                                    label="Width"
                                    hasFeedback
                                    defaultValue='100%'

                                >
                                    <Input defaultValue='100%' />
                                </Form.Item>
                                <Form.Item
                                    name="height"
                                    label='Height'
                                    hasFeedback
                                >
                                    <Input defaultValue='24PX' />
                                </Form.Item>
                            </Form>
                        </Card>
                    </Col>
                    <Col xs={8} sm={8} md={8} lg={16} className="p-0">
                       <Card className="p-0 m-0">
                       <div className="d-flex justify-content-between">
                       <h3>Preview</h3>
                        <Tabs onChange={callback} type="card">
                            <TabPane tab="Desktop" key="1">
                            </TabPane>
                            <TabPane tab="Mobile" key="2">
                            </TabPane>
                        </Tabs>
                       </div>
                       </Card>
                       <div className="justify-content mt-3">
                           <Link to="#" className="d-flex align-items-baseline justify-content-center">
                               <h3>Excellent</h3>
                               <img src={fivestar} alt="fivestar" width={100} className="ml-2" />
                               <p className="ml-2 h3"><b>259</b>reviews on</p>
                               <img src={onestar} alt="onestar" width={90} className="ml-2 mt-1" />
                           </Link>
                       </div>
                    </Col>
                </Row>
            </Modal>
        </>
    )
};

export default Unlock;