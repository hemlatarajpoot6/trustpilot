import React, {useState} from "react";
import ModalList from "./ModalList";
import { Button, Col, Row, Modal } from "antd";
import { Link } from "react-router-dom";
// import upgradimg from "../../../../../../assets/img/66910ad9d6acda66964b.png";
import { CheckOutlined } from "@ant-design/icons"

const Unlock = () =>{

    const [contact, setContact] = useState(false);

    const contactModal = () => {
        setContact(true);
    };


    return(
        <>
         <h1 className="mb-5">Upgrade and unlock more features</h1>
            <Row>
                <Col xs={24} sm={24} md={24} lg={16}>
                    <div className="text-center">
                        {/* <img src={upgradimg} width={500} alt="upgradimg" /> */}
                    </div>
                </Col>
                <Col xs={24} sm={24} md={24} lg={8} className="d-flex align-items-center">
                    <div>
                        <p className="h3 text-muted">Standard subscription required</p>
                        <Link className="my-5">What’s included?</Link><br />
                        <Button type="primary" onClick={contactModal} className="mt-4 Contact">Contact us</Button>
                        <Modal
                            title="Message"
                            centered
                            visible={contact}
                            onOk={() => setContact(false)}
                            onCancel={() => setContact(false)}
                            width={1000}
                        >
                            <div className="text-center align-items-center">
                                <div><CheckOutlined className="text-success upgrade-contact" /></div>
                                <h2>Thanks, we've received your request</h2>
                                <p>We are happy to hear that you want to upgrade 🎉
                                    We’ll be in touch soon.</p>
                            </div>
                        </Modal>
                    </div>
                </Col>
            </Row>
       <ModalList />
        </>
    )
};

export default Unlock;