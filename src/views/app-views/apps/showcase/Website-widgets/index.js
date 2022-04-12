import { Button, Col, Divider, Row, Modal } from "antd";
import React, {useState} from "react";
import { Link } from "react-router-dom";
import essential from "../../../../../assets/img/essential.svg";
import "../showcase.css";

const WebsiteWidgets = () =>{
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

    return(
        <React.Fragment>
            <div>
                <h4>Find the right widget for you</h4>
                <p>Add the right widget to your website to help more customers easily find and review your business.</p>
                <Button>Load recommended widgets</Button>
                <Divider />
                <Row>
                    <Col xs={24} sm={24} md={24} lg={6}>
                        <h4>Essentials</h4>
                        <p>Get the must-have widgets and share what customers are saying about your business.</p>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={9}>
                        
                        <div className="ml-3 mr-3 mb-3">
                        <div className="image-box ">
                        <Link to="#">
                            <img src={essential} alt="essential" />
                            </Link>
                        </div>
                            <Link to="#">
                            <div className="image-box">
                                <p className="recommented pl-1 pr-1 ml-3">Recommended</p>
                                <h5 className="text-left p-3 border bg-white shadow" onClick={showModal}>Micro Review Count</h5>
                            </div>
                        </Link>
                        </div>
                       
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={9}>
                    <div className="ml-3 mr-3 mb-3">
                        <div className="image-box ">
                        <Link to="#">
                            <img src={essential} alt="essential" />
                            </Link>
                        </div>
                            <Link to="#">
                            <div className="image-box">
                                <p className="recommented pl-1 pr-1 ml-3">Popular</p>
                                <h5 className="text-left p-3 border bg-white shadow ">Horizontal</h5>
                            </div>
                        </Link>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={24} sm={24} md={24} lg={6}>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={9}>
                        <div className="ml-3 mr-3 mb-3">
                        <div className="image-box ">
                        <Link to="#">
                            <img src={essential} alt="essential" />
                            </Link>
                        </div>
                            <Link to="#">
                            <div className="image-box">
                                <p className="recommented pl-1 pr-1 ml-3 invisible">Recommended</p>
                                <h5 className="text-left p-3 border bg-white shadow ">Micro Button</h5>
                            </div>
                        </Link>
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={9}>
                    <div className="ml-3 mr-3 mb-3">
                        <div className="image-box ">
                        <Link to="#">
                            <img src={essential} alt="essential" />
                            </Link>
                        </div>
                            <Link to="#">
                            <div className="image-box">
                                <p className="recommented pl-1 pr-1 ml-3">Popular</p>
                                <h5 className="text-left p-3 border bg-white shadow ">Micro Combo</h5>
                            </div>
                        </Link>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={24} sm={24} md={24} lg={6}>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={9}>
                        <div className="ml-3 mr-3 mb-3">
                        <div className="image-box ">
                        <Link to="#">
                            <img src={essential} alt="essential" />
                            </Link>
                        </div>
                            <Link to="#">
                            <div className="image-box">
                                <p className="recommented pl-1 pr-1 ml-3">Popular</p>
                                <h5 className="text-left p-3 border bg-white shadow ">Micro Star</h5>
                            </div>
                        </Link>
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={9}>
                    <div className="ml-3 mr-3 mb-3">
                        <div className="image-box ">
                        <Link to="#">
                            <img src={essential} alt="essential" />
                            </Link>
                        </div>
                            <Link to="#">
                            <div className="image-box">
                                <p className="recommented pl-1 pr-1 ml-3 invisible">Recommended</p>
                                <h5 className="text-left p-3 border bg-white shadow ">Micro TrustScore</h5>
                            </div>
                        </Link>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={24} sm={24} md={24} lg={6}>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={9}>
                        <div className="ml-3 mr-3 mb-3">
                        <div className="image-box ">
                        <Link to="#">
                            <img src={essential} alt="essential" />
                            </Link>
                        </div>
                            <Link to="#">
                            <div className="image-box">
                                <p className="recommented pl-1 pr-1 ml-3">Popular</p>
                                <h5 className="text-left p-3 border bg-white shadow ">Mini</h5>
                            </div>
                        </Link>
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={9}>
                    <div className="ml-3 mr-3 mb-3">
                        <div className="image-box ">
                        <Link to="#">
                            <img src={essential} alt="essential" />
                            </Link>
                        </div>
                            <Link to="#">
                            <div className="image-box">
                                <p className="recommented pl-1 pr-1 ml-3 invisible">Recommended</p>
                                <h5 className="text-left p-3 border bg-white shadow ">Starter</h5>
                            </div>
                        </Link>
                        </div>
                    </Col>
                </Row>


                <Row>
                    <Col xs={24} sm={24} md={24} lg={6}>
                        <h4>Collect reviews</h4>
                        <p>Want more reviews? Ask your customers for feedback right on your website.</p>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={9}>
                        
                        <div className="ml-3 mr-3 mb-3">
                        <div className="image-box ">
                        <Link to="#">
                            <img src={essential} alt="essential" />
                            </Link>
                        </div>
                            <Link to="#">
                            <div className="image-box">
                                <p className="recommented pl-1 pr-1 ml-3 invisible">Recommended</p>
                                <h5 className="text-left p-3 border bg-white shadow ">Evaluate</h5>
                            </div>
                        </Link>
                        </div>
                       
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={9}>
                    <div className="ml-3 mr-3 mb-3">
                        <div className="image-box ">
                        <Link to="#">
                            <img src={essential} alt="essential" />
                            </Link>
                        </div>
                            <Link to="#">
                            <div className="image-box">
                                <p className="recommented pl-1 pr-1 ml-3 invisible">Recommended</p>
                                <h5 className="text-left p-3 border bg-white shadow ">Review Collector</h5>
                            </div>
                        </Link>
                        </div>
                    </Col>
                </Row>


                <Row>
                    <Col xs={24} sm={24} md={24} lg={6}>
                        <h4>Testimonials</h4>
                        <p>Display customer quotes and reviews front and center.</p>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={9}>
                        
                        <div className="ml-3 mr-3 mb-3">
                        <div className="image-box ">
                        <Link to="#">
                            <img src={essential} alt="essential" />
                            </Link>
                        </div>
                            <Link to="#">
                            <div className="image-box">
                                <p className="recommented pl-1 pr-1 ml-3">Popular</p>
                                <h5 className="text-left p-3 border bg-white shadow ">Carousel</h5>
                            </div>
                        </Link>
                        </div>
                       
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={9}>
                    <div className="ml-3 mr-3 mb-3">
                        <div className="image-box ">
                        <Link to="#">
                            <img src={essential} alt="essential" />
                            </Link>
                        </div>
                            <Link to="#">
                            <div className="image-box">
                                <p className="recommented pl-1 pr-1 ml-3 invisible">Recommended</p>
                                <h5 className="text-left p-3 border bg-white shadow ">Drop-Down</h5>
                            </div>
                        </Link>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={24} sm={24} md={24} lg={6}>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={9}>
                        <div className="ml-3 mr-3 mb-3">
                        <div className="image-box ">
                        <Link to="#">
                            <img src={essential} alt="essential" />
                            </Link>
                        </div>
                            <Link to="#">
                            <div className="image-box">
                                <p className="recommented pl-1 pr-1 ml-3 invisible">Recommended</p>
                                <h5 className="text-left p-3 border bg-white shadow ">Grid Review Count</h5>
                            </div>
                        </Link>
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={9}>
                    <div className="ml-3 mr-3 mb-3">
                        <div className="image-box ">
                        <Link to="#">
                            <img src={essential} alt="essential" />
                            </Link>
                        </div>
                            <Link to="#">
                            <div className="image-box">
                                <p className="recommented pl-1 pr-1 ml-3 invisible">Recommended</p>
                                <h5 className="text-left p-3 border bg-white shadow ">List</h5>
                            </div>
                        </Link>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={24} sm={24} md={24} lg={6}>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={9}>
                        <div className="ml-3 mr-3 mb-3">
                        <div className="image-box ">
                        <Link to="#">
                            <img src={essential} alt="essential" />
                            </Link>
                        </div>
                            <Link to="#">
                            <div className="image-box">
                                <p className="recommented pl-1 pr-1 ml-3 invisible">Recommended</p>
                                <h5 className="text-left p-3 border bg-white shadow ">List Filtered</h5>
                            </div>
                        </Link>
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={9}>
                    <div className="ml-3 mr-3 mb-3">
                        <div className="image-box ">
                        <Link to="#">
                            <img src={essential} alt="essential" />
                            </Link>
                        </div>
                            <Link to="#">
                            <div className="image-box">
                                <p className="recommented pl-1 pr-1 ml-3 invisible">Recommended</p>
                                <h5 className="text-left p-3 border bg-white shadow ">Mini Carousel</h5>
                            </div>
                        </Link>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={24} sm={24} md={24} lg={6}>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={9}>
                        <div className="ml-3 mr-3 mb-3">
                        <div className="image-box ">
                        <Link to="#">
                            <img src={essential} alt="essential" />
                            </Link>
                        </div>
                            <Link to="#">
                            <div className="image-box">
                                <p className="recommented pl-1 pr-1 ml-3 invisible">Recommended</p>
                                <h5 className="text-left p-3 border bg-white shadow ">Pop-up</h5>
                            </div>
                        </Link>
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={9}>
                    <div className="ml-3 mr-3 mb-3">
                        <div className="image-box ">
                        <Link to="#">
                            <img src={essential} alt="essential" />
                            </Link>
                        </div>
                            <Link to="#">
                            <div className="image-box">
                                <p className="recommented pl-1 pr-1 ml-3 invisible">Recommended</p>
                                <h5 className="text-left p-3 border bg-white shadow ">Quote</h5>
                            </div>
                        </Link>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={24} sm={24} md={24} lg={6}>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={9}>
                        <div className="ml-3 mr-3 mb-3">
                        <div className="image-box ">
                        <Link to="#">
                            <img src={essential} alt="essential" />
                            </Link>
                        </div>
                            <Link to="#">
                            <div className="image-box">
                                <p className="recommented pl-1 pr-1 ml-3 invisible">Recommended</p>
                                <h5 className="text-left p-3 border bg-white shadow ">Slider</h5>
                            </div>
                        </Link>
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={9}>
                    </Col>
                </Row>


                <Row>
                    <Col xs={24} sm={24} md={24} lg={6}>
                        <h4>Product Reviews</h4>
                        <p>Showcase customer reviews, photos, and videos directly on your product pages.</p>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={9}>
                        
                        <div className="ml-3 mr-3 mb-3">
                        <div className="image-box ">
                        <Link to="#">
                            <img src={essential} alt="essential" />
                            </Link>
                        </div>
                            <Link to="#">
                            <div className="image-box">
                                <p className="recommented pl-1 pr-1 ml-3 invisible">Recommended</p>
                                <h5 className="text-left p-3 border bg-white shadow ">Product Mini</h5>
                            </div>
                        </Link>
                        </div>
                       
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={9}>
                    <div className="ml-3 mr-3 mb-3">
                        <div className="image-box ">
                        <Link to="#">
                            <img src={essential} alt="essential" />
                            </Link>
                        </div>
                            <Link to="#">
                            <div className="image-box">
                                <p className="recommented pl-1 pr-1 ml-3">Popular</p>
                                <h5 className="text-left p-3 border bg-white shadow ">Product Mini MultiSource</h5>
                            </div>
                        </Link>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={24} sm={24} md={24} lg={6}>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={9}>
                        <div className="ml-3 mr-3 mb-3">
                        <div className="image-box ">
                        <Link to="#">
                            <img src={essential} alt="essential" />
                            </Link>
                        </div>
                            <Link to="#">
                            <div className="image-box">
                                <p className="recommented pl-1 pr-1 ml-3 invisible">Recommended</p>
                                <h5 className="text-left p-3 border bg-white shadow ">Product Q&A</h5>
                            </div>
                        </Link>
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={9}>
                    <div className="ml-3 mr-3 mb-3">
                        <div className="image-box ">
                        <Link to="#">
                            <img src={essential} alt="essential" />
                            </Link>
                        </div>
                            <Link to="#">
                            <div className="image-box">
                                <p className="recommented pl-1 pr-1 ml-3 invisible">Recommended</p>
                                <h5 className="text-left p-3 border bg-white shadow ">Product Reviews</h5>
                            </div>
                        </Link>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={24} sm={24} md={24} lg={6}>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={9}>
                        <div className="ml-3 mr-3 mb-3">
                        <div className="image-box ">
                        <Link to="#">
                            <img src={essential} alt="essential" />
                            </Link>
                        </div>
                            <Link to="#">
                            <div className="image-box">
                                <p className="recommented pl-1 pr-1 ml-3 invisible">Recommended</p>
                                <h5 className="text-left p-3 border bg-white shadow ">Product Reviews Carousel</h5>
                            </div>
                        </Link>
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={9}>
                    <div className="ml-3 mr-3 mb-3">
                        <div className="image-box ">
                        <Link to="#">
                            <img src={essential} alt="essential" />
                            </Link>
                        </div>
                            <Link to="#">
                            <div className="image-box">
                                <p className="recommented pl-1 pr-1 ml-3 invisible">Recommended</p>
                                <h5 className="text-left p-3 border bg-white shadow ">Product Reviews Gallery</h5>
                            </div>
                        </Link>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={24} sm={24} md={24} lg={6}>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={9}>
                        <div className="ml-3 mr-3 mb-3">
                        <div className="image-box ">
                        <Link to="#">
                            <img src={essential} alt="essential" />
                            </Link>
                        </div>
                            <Link to="#">
                            <div className="image-box">
                                <p className="recommented pl-1 pr-1 ml-3 invisible">Recommended</p>
                                <h5 className="text-left p-3 border bg-white shadow ">Product Reviews MultiSource</h5>
                            </div>
                        </Link>
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={9}>
                    <div className="ml-3 mr-3 mb-3">
                        <div className="image-box ">
                        <Link to="#">
                            <img src={essential} alt="essential" />
                            </Link>
                        </div>
                            <Link to="#">
                            <div className="image-box">
                                <p className="recommented pl-1 pr-1 ml-3 invisible">Recommended</p>
                                <h5 className="text-left p-3 border bg-white shadow ">Product Reviews MultiSource SEO</h5>
                            </div>
                        </Link>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={24} sm={24} md={24} lg={6}>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={9}>
                        <div className="ml-3 mr-3 mb-3">
                        <div className="image-box ">
                        <Link to="#">
                            <img src={essential} alt="essential" />
                            </Link>
                        </div>
                            <Link to="#">
                            <div className="image-box">
                                <p className="recommented pl-1 pr-1 ml-3 invisible">Recommended</p>
                                <h5 className="text-left p-3 border bg-white shadow ">Product Reviews SEO</h5>
                            </div>
                        </Link>
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={9}>
                    </Col>
                </Row>
            </div>
            <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
        </React.Fragment>
    )
};

export default WebsiteWidgets;