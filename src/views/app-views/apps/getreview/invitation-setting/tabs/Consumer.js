import { Card, Row, Radio, Col, Button, DatePicker, Input, Modal, Form } from 'antd';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ConsumerPrivacy = () => {

    const [value, setValue] = useState(2);
    const [textValue, setTextValue] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const { TextArea } = Input;
    const [form] = Form.useForm();

    const onChange = e => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
        if (e.target.value === 1) {
            setTextValue(true)
        } else {
            setTextValue(false)
        }
    };

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
            <Row>
                <Col xs={24} sm={24} md={24} lg={16}>
                    <Card className="mr-2 h-100">
                        <h3>Delete invitation data</h3>
                        <Radio.Group onChange={onChange} value={value}>
                            <Radio value={1} className="align-items-center mb-2 font-weight-bold">Delete the invitations data of <b>specific customers</b></Radio><br />
                            <Radio value={2} className="align-items-center font-weight-bold">Delete all invitations created <b>before a specific date</b></Radio><br />
                        </Radio.Group><br />

                        {
                            textValue ?
                                <TextArea rows={7} placeholder="Enter recipient(s) email address(es), separated by new line, comma or semicolon" className="mt-4 mb-3 border font-weight-bold text-muted" />
                                : <DatePicker onChange={onChange} className="mt-4 mb-3" />
                        }<br />
                        <Button onClick={showModal} type="primary">Delete now</Button>
                        <Modal title="Are you sure?" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} okText="Remove the data permanently" okType="danger">
                            <Form form={form} layout="vertical" name="register-form">

                                <Form.Item
                                    label="Type in your domain to confirm:"
                                    name="typedomain"
                                    hasFeedback
                                    id='numberInput'
                                    required
                                >
                                    <Input />
                                </Form.Item>
                            </Form>
                        </Modal>
                    </Card>
                </Col>
                <Col xs={24} sm={24} md={24} lg={8}>
                    <Card className="ml-2 h-100">
                        <h2>Guidelines for invitation removal</h2>
                        <h5>This feature allows you to delete review invitations data for the following reasons:</h5>
                        <ul className="p-2">
                            <li>If a data subject requests personal data to be deleted</li>
                            <li>If your company has a retention period for review invitations data which is shorter than 3 years</li>
                        </ul>
                        <Link to="#" className="text-info font-weight-bold">Read more about consumer privacy here</Link>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
};

export default ConsumerPrivacy;