import { Button, Col, Row } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import upgradimg from "../../../../../../assets/img/66910ad9d6acda66964b.png";

const Upgrade = () =>{

    return(
        <React.Fragment>
            <h1>Upgrade and unlock more features</h1>
            <Row>
                <Col xs={24} sm={24} md={24} lg={16}>
                   <div className="text-center"> 
                       <img src={upgradimg} width={500} alt="upgradimg" />
                   </div>
                </Col>
                <Col xs={24} sm={24} md={24} lg={8}>
                    <div className="text-center">
                    <p>Standard subscription required</p>
                    <Link>What’s included?</Link><br />
                    <Button type="primary">Contact us</Button>
                    </div>
                </Col>
            </Row>
        </React.Fragment>
    )
};

export default Upgrade;