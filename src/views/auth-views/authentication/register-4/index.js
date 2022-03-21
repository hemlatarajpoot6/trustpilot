import { Col, Row, Form, Input, Card, Checkbox, Divider, Select, Upload, Button, Image, Rate, Progress, Avatar } from "antd";
import { GlobalOutlined, RightOutlined, EditOutlined } from '@ant-design/icons';
import React from "react";
import { Link } from "react-router-dom";
// import countries from "../../components/CountryCode";
// import logoimage from "../../../../../public/img/0x0.png"
import logoimage from "../../../../../src/assets/0x0.png";
import "../../components/Authentication.css";

const { TextArea } = Input;

const fileList = [
    {
      uid: '-1',
      name: logoimage,
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      thumbUrl: logoimage,
    },
    // {
    //     uid: '-2',
    //     name: '0x0.png',
    //     status: 'error',
    // },
];

const ThirdRegisterForm = () => {

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
                    <Col xs={24} sm={24} md={8} lg={8}>
                        <Card>
                            <h3>Customize your profile page</h3>
                            <p>A small few tweaks can help your business stand out and get founs</p>
                            <Form form={form} layout="vertical" name="register-form">
                            <Form.Item
                                    name="business_name"
                                    label="Logo"
                                    hasFeedback
                                    required
                                >
                                <Upload
                                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                    listType="picture"
                                    defaultFileList={[...fileList]}
                                    className="upload-list-inline d-flex align-items-center"
                                >
                                    <Button className="mr-3">Upload</Button>
                                   
                                </Upload>
                                <p className="mt-2">Recommended size: 400px x 300px. Maximum file size 1MB</p>
                                </Form.Item>
                                <Form.Item
                                    name="business_name"
                                    label="Business name"
                                    hasFeedback
                                    required
                                >
                                    <Input />
                                </Form.Item>
                                <Form.Item
                                    name="website"
                                    label='Website'
                                    hasFeedback
                                    required
                                >
                                    <Input />
                                </Form.Item>
                                <Divider className="my-3" />
                                        <Form.Item
                                            name="description"
                                            label="Description"
                                            hasFeedback
                                            required
                                            id='numberInput'
                                        >
                                            <TextArea rows={4} maxLength={6} />
                                        </Form.Item>
                                <Form.Item
                                    name="category"
                                    label="Category"
                                    hasFeedback
                                    required
                                    className="mb-5 pb-5"
                                >
                                    <p>Select a category that best represents your business. This make it easier for your business to be discover on Trustpilot</p>
                                    <Select defaultValue='it' onChange={handleChange}>
                                        <Option value='it'>IT</Option>
                                        <Option value='software'>Software Developer</Option>
                                    </Select>
                                </Form.Item>
                            </Form>
                            <Divider />
                            <span className="d-flex float-right align-items-baseline">
                                <p className="mr-3">i will do this later</p>
                                <Button>Continue</Button>
                            </span>

                        </Card>
                    </Col>
                    <Col xs={24} sm={24} md={16} lg={16}>
                        <Card>
                            <Row className="align-items-center">
                                <Col xs={24} sm={24} md={24} lg={5} xl={5}>
                                    <div className="">
                                        <Image
                                            width={150}
                                            src={logoimage}
                                        />
                                    </div>
                                </Col>
                                <Col xs={24} sm={24} md={24} lg={11} xl={11}>
                                    <h1>Engineer Master Solutions Pvt Ltd</h1>
                                    <span>Reviews&nbsp;1   &nbsp; •   &nbsp;Average</span><br />
                                    <Rate allowHalf defaultValue={2.5} />
                                </Col>
                                <Col xs={24} sm={24} md={24} lg={8} xl={8}>
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
                            <Col xs={24} sm={24} md={24} lg={16}>
                                <Card>
                                    <h1>Review</h1>
                                    <ul className="p-0" style={{ listStyle: "none" }}>
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
                            <Col xs={24} sm={24} md={24} lg={8}>
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

export default ThirdRegisterForm;