import { Button, Card, Col, Divider, Row, Modal, Checkbox, Input } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PlusCircleOutlined, LockOutlined } from "@ant-design/icons";
import product from "../../../../../../assets/img/stars-0 (1).svg";
import productreviw from "../../../../../../assets/img/74a4a6c15f9e4b9b3d54.svg"

const ProductAttributes = () => {

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [checkbox, setCheckbox] = useState(false);


    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    function onChange(e) {
        console.log(`checked = ${e.target.checked}`);
        setCheckbox(e.target.value)
    }

    return (
        <React.Fragment>
            <h3>You're collecting attribute ratings in these categories
            </h3>
            <Row>
                <Col xs={24} sm={24} md={24} lg={24}>
                    <Card>
                        <h3>Toys & Games</h3>
                        <Divider />
                        <p>Stuffed Animals2 products</p>
                        <div className="d-flex">
                            <ul className="d-flex pl-3">
                                <li className="preselected">Quality <LockOutlined /></li>
                                <li className="preselected">Value for money <LockOutlined /></li>
                            </ul>
                            <Button onClick={showModal}><PlusCircleOutlined /> Add attribute</Button>
                        </div>

                        <Modal title="What attributes would you like to be rated?" okText="Save attributes" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} width={1000}>
                            <div>
                                <p>Select up to 3 extra attributes in <b>Stuffed Animals.</b></p>
                                <ul className="d-flex pl-3">
                                    <li className="preselected">Quality <LockOutlined /></li>
                                    <li className="preselected">Value for money <LockOutlined /></li>
                                    <li className="preselected">{checkbox ? checkbox : null}</li>
                                </ul>
                            </div>
                            <Divider />
                            <Row>
                                <Col xs={24} sm={24} md={24} lg={12}>
                                    <div className="scroll-height">
                                        <ul className="pl-3">
                                            <li><Checkbox onChange={onChange} disabled>Quality</Checkbox></li>
                                            <li><Checkbox onChange={onChange} disabled>Value for money</Checkbox></li>
                                            <li><Checkbox onChange={onChange} value="Accommodation">Accommodation</Checkbox></li>
                                            <li><Checkbox onChange={onChange} value="Battery life">Battery life</Checkbox></li>
                                            <li><Checkbox onChange={onChange}>Capacity</Checkbox></li>
                                            <li><Checkbox onChange={onChange}>Clarity of policy information</Checkbox></li>
                                            <li><Checkbox onChange={onChange}>Cleanliness</Checkbox></li>
                                            <li><Checkbox onChange={onChange}>Comfort</Checkbox></li>
                                            <li><Checkbox onChange={onChange}>Compatibility</Checkbox></li>
                                            <li><Checkbox onChange={onChange}>Couple friendly</Checkbox></li>
                                            <li><Checkbox onChange={onChange}>Customer service</Checkbox></li>
                                            <li><Checkbox onChange={onChange}>Delivery</Checkbox></li>
                                            <li><Checkbox onChange={onChange}>Delivery time</Checkbox></li>
                                            <li><Checkbox onChange={onChange}>Design</Checkbox></li>
                                            <li><Checkbox onChange={onChange}>Discretion</Checkbox></li>
                                            <li><Checkbox onChange={onChange}>Durability</Checkbox></li>
                                            <li><Checkbox onChange={onChange}>Ease of assembly</Checkbox></li>
                                            <li><Checkbox onChange={onChange}>Ease of installation</Checkbox></li>
                                            <li><Checkbox onChange={onChange}>Ease of purchase</Checkbox></li>
                                            <li><Checkbox onChange={onChange}>Ease of use</Checkbox></li>
                                            <li><Checkbox onChange={onChange}>Educational</Checkbox></li>
                                            <li><Checkbox onChange={onChange}>Effectiveness</Checkbox></li>
                                            <li><Checkbox onChange={onChange}>Family friendly</Checkbox></li>
                                            <li><Checkbox onChange={onChange}>Fit</Checkbox></li>
                                            <li><Checkbox onChange={onChange}>Flexibility</Checkbox></li>
                                            <li><Checkbox onChange={onChange}>Food</Checkbox></li>
                                            <li><Checkbox onChange={onChange}>Freshness</Checkbox></li>
                                            <li><Checkbox onChange={onChange}>Fun</Checkbox></li>
                                            <li><Checkbox onChange={onChange}>Functionality</Checkbox></li>
                                            <li><Checkbox onChange={onChange}>Location</Checkbox></li>
                                            <li><Checkbox onChange={onChange}>Maintenance</Checkbox></li>
                                            <li><Checkbox onChange={onChange}>Materials</Checkbox></li>
                                            <li><Checkbox onChange={onChange}>Mileage</Checkbox></li>
                                            <li><Checkbox onChange={onChange}>Mixability</Checkbox></li>
                                            <li><Checkbox onChange={onChange}>Packaging</Checkbox></li>
                                            <li><Checkbox onChange={onChange}>Performance</Checkbox></li>
                                            <li><Checkbox onChange={onChange}>Portability</Checkbox></li>
                                            <li><Checkbox onChange={onChange}>Product meets description</Checkbox></li>
                                            <li><Checkbox onChange={onChange}>Quietness</Checkbox></li>
                                            <li><Checkbox onChange={onChange}>Reliability</Checkbox></li>
                                            <li><Checkbox onChange={onChange}>Safety</Checkbox></li>
                                            <li><Checkbox onChange={onChange}>Scent</Checkbox></li>
                                            <li><Checkbox onChange={onChange}>Sound quality</Checkbox></li>
                                            <li><Checkbox onChange={onChange}>Staff</Checkbox></li>
                                            <li><Checkbox onChange={onChange}>Style</Checkbox></li>
                                            <li><Checkbox onChange={onChange}>Sustainability</Checkbox></li>
                                            <li><Checkbox onChange={onChange}>Taste</Checkbox></li>
                                            <li><Checkbox onChange={onChange}>Texture</Checkbox></li>
                                            <li><Checkbox onChange={onChange}>Usefulness</Checkbox></li>
                                            <li className="mt-3"><Button>+ Request attribute</Button></li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col xs={24} sm={24} md={24} lg={12}>
                                    <div className="text-center">
                                        <p>Product review form</p>
                                    </div>
                                    <div className="box-product">
                                        <div className="d-flex">
                                            <img src={productreviw} alt="productreviw" className="mx-4 mt-1" />
                                            <div>
                                                <h5>Product name</h5>
                                                <img src={product} alt="product" />
                                            </div>
                                        </div>
                                        <Divider />
                                        <div>
                                            <h5>Taste</h5>
                                            <img src={product} width={100} alt="product" />
                                            <h5>Location</h5>
                                            <img src={product} width={100} alt="product" />
                                            <h5>Family friendly</h5>
                                            <img src={product} width={100} alt="product" />
                                            <Input placeholder="Write review" className="mt-4 mb-5" disabled />
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Modal>
                        <Divider />
                        <p>Toy Cars2 products</p>
                        <div className="d-flex">
                            <ul className="d-flex pl-3">
                                <li className="preselected">Quality <LockOutlined /></li>
                                <li className="preselected">Value for money <LockOutlined /></li>
                            </ul>
                            <Button onClick={showModal}><PlusCircleOutlined /> Add attribute</Button>
                        </div>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xs={24} sm={24} md={24} lg={25}>
                    <Card>
                        <p>Uncategorized3 products</p>
                        <div className="d-flex">
                            <ul className="d-flex pl-3">
                                <li className="preselected">Quality <LockOutlined /></li>
                                <li className="preselected">Value for money <LockOutlined /></li>
                            </ul>
                            <Button onClick={showModal}><PlusCircleOutlined /> Add attribute</Button>
                        </div>
                        <div className="setting-background">
                            <p><b>Tip</b>: Got different products?  <Link to="">Organize
                                your products into categories</Link>  so you can easily add more attributes.</p>
                        </div>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
};

export default ProductAttributes;