import { Card, Col, Row, Modal } from "antd";
import React, { useState } from "react";
import list1 from "../../../../../assets/img/453baf4acf5e2274e51d.svg";
import list2 from "../../../../../assets/img/f53542bff056e55906a4.svg";
import list3 from "../../../../../assets/img/2c308e1b2432f858d3b4.svg";
import shopify from "../../../../../assets/img/shopify.svg";
import wix from "../../../../../assets/img/wix.svg";
import woo from "../../../../../assets/img/woo.svg";
import mongo from "../../../../../assets/img/mongo.svg";
import big from "../../../../../assets/img/big.svg";
import paypal from "../../../../../assets/img/paypal.svg";
import square from "../../../../../assets/img/square.svg";
import presta from "../../../../../assets/img/presta.svg";
import opencart from "../../../../../assets/img/opencart.svg";
import shopware from "../../../../../assets/img/shopware.svg";
import { Link } from "react-router-dom";
import { RightOutlined, MailOutlined } from "@ant-design/icons";
import Modals from "./Modal";

const GetReviews = () => {

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

    return (
        <React.Fragment>
            <h1>Get reviews</h1>
            <Row>
                <Col xs={24} sm={24} md={24} lg={24}>
                    <h2>Get reviews and grow trust in your brand</h2>
                    <p>Grow your business by asking customers to write a review after every purchase. Businesses that regularly send automatic invitations tend to have a higher TrustScore. You can also qualify for Google Seller Ratings with verified reviews and show off your stars in search results.</p>
                    <Card>
                        <h3>How automatic invitations work on Trustpilot</h3>
                        <span>
                            <ol className="p-0">
                                <div className="d-flex m-4">
                                    <img src={list1} alt="list1" />
                                    <li className="ml-5">Your customer makes a transaction with your business (e.g. places an order, receives an invoice, or similar)</li>
                                </div>
                                <div className="d-flex m-4">
                                    <img src={list2} alt="list1" />
                                    <li className="ml-5">An invitation email is then sent from Trustpilot to their inbox and they write a review</li>
                                </div>
                                <div className="d-flex m-4">
                                    <img src={list3} alt="list1" />
                                    <li className="ml-5">Their review counts towards your TrustScore and is displayed as a verified review on Trustpilot</li>
                                </div>
                            </ol>
                        </span>
                    </Card>
                    
                    <h3>Integrations<span className="recommended">RECOMMENDED</span></h3>
                    <p>Our plug-and-play integrations are the easiest way to send automatic invitations.</p>
                    <Row>
                        <Col xs={24} sm={24} md={24} lg={6}>
                            <Card className="text-center mr-4 card-height">
                                <img src={shopify} alt="shopify" />
                                <h5 className="mb-4">Shopify</h5>
                                <Link to="#" className="p-2 border border-info">Connect</Link>
                            </Card>
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={6}>
                            <Card className="text-center mr-4 card-height">
                                <img src={wix} alt="wix" />
                                <h5 className="mb-4">Wix</h5>
                                <Link to="#" className="p-2 border border-info">Connect</Link>
                            </Card>
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={6}>
                            <Card className="text-center mr-2 card-height">
                                <img src={woo} alt="woo" />
                                <h5 className="mb-4 mt-3">WooCommerce</h5>
                                <Link to="#" className="p-2 border border-info">Connect</Link>
                            </Card>
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={6}>
                            <Card className="text-center ml-3 card-height">
                                <img src={mongo} alt="mongo" />
                                <h5 className="mb-4 mt-1">Magento 2.x</h5>
                                <Link to="#" className="p-2 border border-info">Connect</Link>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={24} sm={24} md={24} lg={6}>
                            <Card className="text-center mr-4 card-height">
                                <img src={big} alt="big" />
                                <h5 className="mb-4">BigCommerce</h5>
                                <Link to="#" className="p-2 border border-info">Connect</Link>
                            </Card>
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={6}>
                            <Card className="text-center mr-4 card-height">
                                <img src={paypal} alt="paypal" />
                                <h5 className="mb-4">PayPal</h5>
                                <Link to="#" className="p-2 border border-info">Connect</Link>
                            </Card>
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={6}>
                            <Card className="text-center mr-2 card-height">
                                <img src={square} alt="square" />
                                <h5 className="mb-4 mt-3">Square</h5>
                                <Link to="#" className="p-2 border border-info">Connect</Link>
                            </Card>
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={6}>
                            <Card className="text-center ml-3 card-height">
                                <img src={presta} alt="presta" />
                                <h5 className="mb-4">PrestaShop</h5>
                                <Link to="#" className="p-2 border border-info">Connect</Link>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={24} sm={24} md={24} lg={6}>
                            <Card className="text-center mr-4 card-height">
                                <img src={mongo} alt="mongo" />
                                <h5 className="mb-4">Magento 1.x</h5>
                                <Link to="#" className="p-2 border border-info">Connect</Link>
                            </Card>
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={6}>
                            <Card className="text-center mr-4 card-height">
                                <img src={opencart} alt="opencart" />
                                <h5 className="mb-4">OpenCart</h5>
                                <Link to="#" className="p-2 border border-info">Connect</Link>
                            </Card>
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={6}>
                            <Card className="text-center mr-2 card-height">
                                <img src={shopware} alt="shopware" />
                                <h5 className="mb-4">Shopware</h5>
                                <Link to="#" className="p-2 border border-info">Connect</Link>
                            </Card>
                        </Col>
                    </Row>
                    <h3 className="mb-2 mt-4">Can’t use an integration? No problem</h3>
                    <p>If you use a different eCommerce marketing system that sends emails to your customers (such as order confirmations, invoices, etc.), you can easily connect it to Trustpilot Automatic Invitations (AFS) and get the same reliable results.</p>
                    <Link to="#">
                        <Card className="mt-4">
                            <span className="d-flex justify-content-between align-items-center">

                                <div className="d-flex align-items-center">
                                    <MailOutlined className="mr-5" />
                                    <div> <p><b>Trustpilot Automatic Invitations (AFS)</b></p>
                                        <p>Integrate transactional emails from any other system to send invitations automatically </p></div>
                                </div>
                                <RightOutlined />
                            </span>
                        </Card>
                    </Link>
                    <b> <p>Can’t use any of the above? <span onClick={showModal} className="text-info cursor-pointer">Try a different way to get reviews.</span></p></b>
                    <Modal title="Other ways to get reviews" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} width={1000}>
                        <Modals />
                      
                    </Modal>
                </Col>
            </Row>
        </React.Fragment>
    )
};

export default GetReviews;