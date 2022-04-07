import React, { useState } from "react";
import { Button, Select, Col, Row, Input, Table, DatePicker, Card, Modal } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const InvitationsHistory = () => {

    const [CancleModal, setCancleModal] = useState(false);

    const { Search } = Input;
    const { Option } = Select;

    // const [isModalVisible, setIsModalVisible] = useState(false);


    function handleChange(value) {
        console.log(value);
    }

    const onSearch = value => console.log(value);


    const showModal = () => {
        setCancleModal(true);
    };

    const handleOk = () => {
        setCancleModal(false);
    };

    const handleCancel = () => {
        setCancleModal(false);
    };

    const columns = [
        {
            title: 'Recipient',
            dataIndex: 'recipient',
            key: 'recipient',
        },
        {
            title: 'Delivery status',
            dataIndex: 'status',
            key: 'status',
        },
        {
            title: 'Date created',
            dataIndex: 'created',
            key: 'created',
        },
        {
            title: 'Date sent',
            dataIndex: 'sent',
            key: 'sent',
        },
        {
            title: 'Invitation type',
            dataIndex: 'type',
            key: 'type',
        },
        {
            title: 'Reference number',
            dataIndex: 'reference',
            key: 'reference',
        },
    ];

    return (
        <React.Fragment>
            <h1>Invitation status</h1>
            <Row>
                <Col xs={24} sm={24} md={24} lg={24}>
                    <Search placeholder="Search by email, name, or reference number"
                        style={{ width: '40%' }} className="mr-1 font-weight-bold" onSearch={onSearch} />

                    <Select className="mr-1"
                        allowClear
                        onChange={handleChange}
                        placeholder="Delivery status"
                    >
                        <Option value="sending">
                            Sending
                        </Option>
                        <Option value="delivered">
                            Delivered
                        </Option>
                        <Option value="queued">
                            Queued
                        </Option>
                        <Option value="notdelivered">
                            Not delivered
                        </Option>
                        <Button>Apply</Button>
                    </Select>


                    <Select
                        className="mr-1 select-option mb-2 font-weight-bold"
                        mode="multiple"
                        allowClear
                        placeholder="Invitation method"
                        onChange={handleChange}
                        style={{ width: '20%' }}
                    >
                        <Option value='Automatic' className="star-option">
                            <ul>
                                <li className="d-flex align-items-baseline">
                                    Automatic Invitation

                                </li>
                            </ul>
                        </Option>
                        <Option value='Manual' className="star-option">
                            <ul>
                                <li className="d-flex align-items-baseline">
                                    Manual Invitation

                                </li>
                            </ul>
                        </Option>
                        <Option value='Organic' className="star-option">
                            <ul>
                                <li className="d-flex align-items-baseline">
                                    Organic

                                </li>
                            </ul>
                        </Option>
                        <Option value='Generated' className="star-option">
                            <ul>
                                <li className="d-flex align-items-baseline">
                                    Generated Link

                                </li>
                            </ul>
                        </Option>
                        <Option value='Basic' className="star-option">
                            <ul>
                                <li className="d-flex align-items-baseline">
                                    Basic Invitation

                                </li>
                            </ul>
                        </Option>
                        <Option value='Embedded' className="star-option">
                            <ul>
                                <li className="d-flex align-items-baseline">
                                    Embedded Review Form

                                </li>
                            </ul>
                        </Option>
                        <Button>Apply</Button>
                    </Select>
                    <Select
                        className="mr-1 select-option mb-2 font-weight-bold"
                        mode="multiple"
                        allowClear
                        placeholder="Invitation type"
                        onChange={handleChange}
                        style={{ width: '20%' }}
                    >
                        <Option value='Service' className="star-option">
                            <ul>
                                <li className="d-flex align-items-baseline">
                                    Service Review

                                </li>
                            </ul>
                        </Option>
                        <Option value='Product' className="star-option">
                            <ul>
                                <li className="d-flex align-items-baseline">
                                    Product Review

                                </li>
                            </ul>
                        </Option>
                        <Option value='Service&Product' className="star-option">
                            <ul>
                                <li className="d-flex align-items-baseline">
                                    Service & Product Review

                                </li>
                            </ul>
                        </Option>
                        <Option value='Servicereminder' className="star-option">
                            <ul>
                                <li className="d-flex align-items-baseline">
                                    Service Review Reminder

                                </li>
                            </ul>
                        </Option>
                        <Option value='Productreminder' className="star-option">
                            <ul>
                                <li className="d-flex align-items-baseline">
                                    Product Review Reminder

                                </li>
                            </ul>
                        </Option>
                        <Option value='Service&Productreminder' className="star-option">
                            <ul>
                                <li className="d-flex align-items-baseline">
                                    Service & Product Review Reminder

                                </li>
                            </ul>
                        </Option>
                        <Button>Apply</Button>
                    </Select>
                    <DatePicker className="mr-1" placeholder="Date created" renderExtraFooter={() => 'extra footer'} />
                    <DatePicker className="mr-1" placeholder="Date sent" renderExtraFooter={() => 'extra footer'} />
                    <Button className="font-weight-bold text-dark" disabled>Export</Button>
                </Col>
            </Row>
            <Row>
                <Col xs={24} sm={24} md={24} lg={24}>
                    <Card className="mt-4">
                        <span className="d-flex justify-content-between">
                            <h3>Showing 0 invitations from the last 12 months</h3>
                            <Button onClick={showModal}><DeleteOutlined /> <b>Cancel invitations</b></Button>
                            <Modal title="You’re cancelling all invitations in the queue" visible={CancleModal} okText="Cancel invitations" okType="danger" cancelText="Back" onOk={handleOk} onCancel={handleCancel}>
                                <p>Once you cancel review invitations, they’ll be removed from the queue and won’t be sent to your customers.</p>
                            </Modal>
                        </span>
                        <Table columns={columns} />
                        <div className="text-right mt-3">
                            <Link to="#">Clear filter</Link>
                            </div>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
};

export default InvitationsHistory;