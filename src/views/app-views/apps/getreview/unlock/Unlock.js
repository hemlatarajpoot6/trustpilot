import React, {useState} from "react";
import ModalList from "./ModalList";
import { Button, Col, Row, Modal, Card } from "antd";
import upgradimg from "../../../../../assets/img/66910ad9d6acda66964b.png";
import { CheckOutlined } from "@ant-design/icons"

const Unlock = () =>{

    const [contact, setContact] = useState(false);

    const contactModal = () => {
        setContact(true);
    };


    return(
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
            <Card>
            <Row>
                <Col xs={24} sm={24} md={24} lg={8}>
                    <div className="border">
                        <p>Showcase reviews with TrustBox widgets</p>
                    </div>
                    <div className="border">
                        <p>Showcase reviews with TrustBox widgets</p>
                    </div>
                    <div className="border">
                        <p>Showcase reviews with TrustBox widgets</p>
                    </div>
                    <div className="border">
                        <p>Showcase reviews with TrustBox widgets</p>
                    </div>
                    <div className="border">
                        <p>Showcase reviews with TrustBox widgets</p>
                    </div>
                    <div className="border">
                        <p>Showcase reviews with TrustBox widgets</p>
                    </div>
                    <div className="border">
                        <p>Showcase reviews with TrustBox widgets</p>
                    </div>
                    <div className="border">
                        <p>Showcase reviews with TrustBox widgets</p>
                    </div>
                    <div className="border">
                        <p>Showcase reviews with TrustBox widgets</p>
                    </div>
                    <div className="border">
                        <p>Showcase reviews with TrustBox widgets</p>
                    </div>
                    <div className="border">
                        <p>Showcase reviews with TrustBox widgets</p>
                    </div>
                    <div className="border">
                        <p>Showcase reviews with TrustBox widgets</p>
                    </div>
                    <div className="border">
                        <p>Showcase reviews with TrustBox widgets</p>
                    </div>
                    <div className="border">
                        <p>Showcase reviews with TrustBox widgets</p>
                    </div>
                    <div className="border">
                        <p>Showcase reviews with TrustBox widgets</p>
                    </div>
                </Col>
                <Col xs={24} sm={24} md={24} lg={8}>
                    <div className="border">
                        <h1>Free</h1>
                        <p>For small businesses to start engaging with their customers</p>
                    </div>
                    <div className="border">
                        <h4>2 widgets included:</h4>
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
                            </ul>
                    </div>
                    <div className="border">
                        <p>Showcase reviews with TrustBox widgets</p>
                    </div>
                    <div className="border">
                        <p>Showcase reviews with TrustBox widgets</p>
                    </div>
                    <div className="border">
                        <p>Showcase reviews with TrustBox widgets</p>
                    </div>
                    <div className="border">
                        <p>Showcase reviews with TrustBox widgets</p>
                    </div>
                    <div className="border">
                        <p>Showcase reviews with TrustBox widgets</p>
                    </div>
                    <div className="border">
                        <p>Showcase reviews with TrustBox widgets</p>
                    </div>
                    <div className="border">
                        <p>Showcase reviews with TrustBox widgets</p>
                    </div>
                    <div className="border">
                        <p>Showcase reviews with TrustBox widgets</p>
                    </div>
                    <div className="border">
                        <p>Showcase reviews with TrustBox widgets</p>
                    </div>
                    <div className="border">
                        <p>Showcase reviews with TrustBox widgets</p>
                    </div>
                    <div className="border">
                        <p>Showcase reviews with TrustBox widgets</p>
                    </div>
                    <div className="border">
                        <p>Showcase reviews with TrustBox widgets</p>
                    </div>
                    <div className="border">
                        <p>Showcase reviews with TrustBox widgets</p>
                    </div>
                    <div className="border">
                        <p>Showcase reviews with TrustBox widgets</p>
                    </div>
                </Col>
                <Col xs={24} sm={24} md={24} lg={8}>
                    <div className="border">
                    <h1>Free</h1>
                        <p>For small businesses to start engaging with their customers</p>
                        <Button type="primary" onClick={contactModal} className="mt-4 Contact">Contact us</Button>
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
                    <div className="border">
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
                            </ul>
                    </div>
                    <div className="border">
                        <p>Showcase reviews with TrustBox widgets</p>
                    </div>
                    <div className="border">
                        <p>Showcase reviews with TrustBox widgets</p>
                    </div>
                    <div className="border">
                        <p>Showcase reviews with TrustBox widgets</p>
                    </div>
                    <div className="border">
                        <p>Showcase reviews with TrustBox widgets</p>
                    </div>
                    <div className="border">
                        <p>Showcase reviews with TrustBox widgets</p>
                    </div>
                    <div className="border">
                        <p>Showcase reviews with TrustBox widgets</p>
                    </div>
                    <div className="border">
                        <p>Showcase reviews with TrustBox widgets</p>
                    </div>
                    <div className="border">
                        <p>Showcase reviews with TrustBox widgets</p>
                    </div>
                    <div className="border">
                        <p>Showcase reviews with TrustBox widgets</p>
                    </div>
                    <div className="border">
                        <p>Showcase reviews with TrustBox widgets</p>
                    </div>
                    <div className="border">
                        <p>Showcase reviews with TrustBox widgets</p>
                    </div>
                    <div className="border">
                        <p>Showcase reviews with TrustBox widgets</p>
                    </div>
                    <div className="border">
                        <p>Showcase reviews with TrustBox widgets</p>
                    </div>
                    <div className="border">
                        <p>Showcase reviews with TrustBox widgets</p>
                    </div>
                </Col>
            </Row>
            </Card>
       <ModalList />
        </>
    )
};

export default Unlock;