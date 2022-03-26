import { Button, Row, Col } from "antd";
import React from "react";

const TestProduct = () =>{

    return(
        <React.Fragment>
        <Row className="mt-5">
                        <Col xs={24} sm={24} md={24} lg={24} className="text-center">
                            <Button type="primary" className="font-weight-bold h4 text-white">Send test email to kapil.karda@engineermaster.in</Button>
                        </Col>
                        </Row>
                </React.Fragment>
    )
};

export default TestProduct;