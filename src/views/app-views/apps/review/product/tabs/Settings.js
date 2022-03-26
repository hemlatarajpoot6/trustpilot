import { Button, Card, Col, Row, Switch } from "antd";
import React from "react";
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';

const Settings = () => {

    return (
        <React.Fragment>
            <Row>
                <Col xs={24} sm={24} md={24} lg={24}>
                    <Card>
                        <h4>Product attributes</h4>
                        <div className="d-flex justify-content-between">
                            <div>
                                <h5>Ask customers to rate your product attributes</h5>
                                <p>Turn on this feature to get detailed product ratings for all your products. <Button>Learn more.</Button></p>
                            </div>
                            <Switch
                                checkedChildren={<CheckOutlined />}
                                unCheckedChildren={<CloseOutlined />}
                                defaultChecked
                            />
                        </div>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
};

export default Settings;