import { Col, Row, Form, Input, Card, Checkbox, Divider, Select, Button, Image, Rate, Progress, Avatar  } from "antd";
import { GlobalOutlined, RightOutlined, EditOutlined } from '@ant-design/icons';
import React from "react";
import { Link } from "react-router-dom";
import countries from "../../components/CountryCode";
// import logoimage from "../../../../../public/img/0x0.png"
import logoimage from "../../../../../src/assets/0x0.png";
import "../../components/Authentication.css";

const SecondRegister = () => {

    const [form] = Form.useForm();

    function onChange(e) {
        console.log(`checked = ${e.target.checked}`);
    }

    const { Option } = Select;

    function handleChange(value) {
        console.log(`selected ${value}`);
    }

    return (
        <React.Fragment>
            <div className="overflow-hidden">
                <Row gutter={[16, 16]}>
                    <Col xs={8} sm={8} md={8} lg={8}>
                        <Card>
                            <h3>Contact information</h3>
                            <p>Help customers get in touch by adding your business contact information.</p>
                            <Form form={form} layout="vertical" name="register-form">
                                <Form.Item
                                    name="email"
                                    label="Email"
                                    hasFeedback
                                    required
                                >
                                    <Input />
                                </Form.Item>
                                <Form.Item
                                    name="phonenumber"
                                    label='Phone Number'
                                    hasFeedback
                                    required
                                >
                                    <Input />
                                </Form.Item>
                                <Checkbox onChange={onChange}>My business doesn't have a public phone number</Checkbox>
                                <Divider />
                                <h3>Business Address</h3>
                                <p>Add your main office address if you have multiple locations.</p>
                                <Row gutter={[16, 16]}>
                                    <Col xs={12} sm={12} md={12} lg={12}>
                                        <Form.Item
                                            name="city"
                                            label="City"
                                            hasFeedback
                                            required
                                            id='numberInput'
                                        >
                                            <Input />
                                        </Form.Item>
                                    </Col>
                                    <Col xs={12} sm={12} md={12} lg={12}>
                                        <Form.Item
                                            name="zip"
                                            label="Zip"
                                            hasFeedback
                                            required
                                            id='numberInput'
                                        >
                                            <Input />
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Form.Item
                                    name="address"
                                    label="Address"
                                    hasFeedback
                                    required
                                >
                                    <Input />
                                </Form.Item>
                                <Form.Item
                                    name="country"
                                    label="Country"
                                    hasFeedback
                                    required
                                    className="mb-5 pb-5"
                                >
                                    <Select defaultValue='choose' onChange={handleChange}>
                                        <Option value='choose'>Choose country</Option>
                                        {countries && countries.length > 0 && countries.map((item, index) =>
                                            <Option value={item.code} key={index}>{item.name}</Option>

                                        )}
                                    </Select>
                                </Form.Item>
                            </Form>
                            <Divider />
                            <span className="d-flex float-right align-items-baseline">
                                <p className="mr-3">i will do this later</p>
                                <Link to='/auth/register-2'><Button>Back</Button></Link>
                                <Link to='/auth/register-4'><Button>Save</Button></Link>
                            </span>

                        </Card>
                    </Col>
                    <Col xs={16} sm={16} md={16} lg={16}>
                        <Card>
                            <Row className="align-items-center">
                                <Col xs={5} sm={5} md={5} lg={5}>
                                    <div className="">
                                        <Image
                                            width={150}
                                            src={logoimage}
                                        />
                                    </div>
                                </Col>
                                <Col xs={11} sm={11} md={11} lg={11}>
                                    <h1>Engineer Master Solutions Pvt Ltd</h1>
                                    <span>Reviews&nbsp;1   &nbsp; •   &nbsp;Average</span><br />
                                    <Rate allowHalf defaultValue={2.5} />
                                </Col>
                                <Col xs={8} sm={8} md={8} lg={8}>
                                    <div className="border px-3 pt-2 align-items-center">
                                        <Link to="/#">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <span>
                                                    <h5 className="mt-2"><GlobalOutlined className="mr-2" />engineermaster.in</h5>
                                                    <p>visit company website</p>

                                                </span>
                                                <RightOutlined className="float-right text-center text-muted" />
                                            </div>
                                        </Link>
                                    </div>
                                </Col>
                            </Row>
                        </Card>
                        <Row gutter={[16, 16]}>
                            <Col xs={16} sm={16} md={16} lg={16}>
                                <Card>
                                    <h1>Review</h1>
                                    <ul className="p-0" style={{listStyle: "none"}}>
                                        <li className="d-flex align-items-baseline">
                                            <Checkbox onChange={onChange} className="check-label">Bad</Checkbox>
                                            <Progress percent={100} className="progress" />
                                        </li>
                                        <li className="d-flex align-items-baseline">
                                            <Checkbox onChange={onChange} className="check-label">Poor</Checkbox>
                                            <Progress percent={70} className="progress" />
                                        </li>
                                        <li className="d-flex align-items-baseline">
                                            <Checkbox onChange={onChange} className="check-label">Average</Checkbox>
                                            <Progress percent={50} className="progress" />
                                        </li>
                                        <li className="d-flex align-items-baseline">
                                            <Checkbox onChange={onChange} className="check-label">Great</Checkbox>
                                            <Progress percent={20} className="progress" />
                                        </li>
                                        <li className="d-flex align-items-baseline">
                                            <Checkbox onChange={onChange} className="check-label">Excellent</Checkbox>
                                            <Progress percent={0} className="progress" />
                                        </li>
                                    </ul>
                                </Card>
                                <Card>
                                    <Row>
                                        <Col xs={24} sm={24} md={24} lg={24}>
                                            <span className="d-flex">
                                                <Avatar size={64} className="mr-3" />
                                            <div>
                                            <h2>UserName</h2>
                                            <p><EditOutlined className="mr-2" />Reviews</p>
                                            </div>
                                            </span>
                                        </Col>
                                        <Divider />
                                        <Col xs={24} sm={24} md={24} lg={24}>
                                        <Rate allowHalf defaultValue={2.5} />
                                        <h1>Happy customer</h1>
                                        <p>We worked with Engineer Master Team and we got a great product from them we still doing maintenance job with them.</p>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                            <Col xs={8} sm={8} md={8} lg={8}>
                                <Card>
                                    <h2>About</h2>
                                    <p>We are and have Masters in technologies and solutions We established ourselves well in the development sector and software services; we have been awarded and recognized by many since 2013 and still counting… with a plethora of technologies to work on various IT and Software solutions for every business you own. We keep promises alive with our best practices and timely delivery of the product with 24*7 support in case you need any.</p>
                                    <Button className="button-width mb-5">Contact</Button><br />
                                    <Button className="button-width">Category</Button>
                                    <p className="text-center">Software Company</p>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </React.Fragment>
    )
};

export default SecondRegister;