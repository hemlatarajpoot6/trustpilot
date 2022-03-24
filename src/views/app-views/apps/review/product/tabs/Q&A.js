import { Card, Col, Row } from "antd";
import React from "react";
import qandaimage from "../../../../../../assets/img/18c40f7307ae05ba135c.png"

const QandA = () =>{

    return(
        <React.Fragment>
            <Row>
                <Col xs={24} sm={24} md={24} lg={12}>
                    <Card>
                        <div>
                            <img src={qandaimage} alt='q&aimg' />
                        </div>
                    </Card>
                </Col>
                <Col xs={24} sm={24} md={24} lg={12}>
                <Card>
                        <div></div>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
};

export default QandA;