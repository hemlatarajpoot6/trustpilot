import React from 'react';
import { Card } from "antd";
import { Link } from "react-router-dom";
import { RightOutlined, MailOutlined, FileTextOutlined } from "@ant-design/icons";

const Modals = () =>{

    return (
        <React.Fragment>
            <p>We have several other options for sending invites automatically. These might require some coding skills.</p>
            <Link to="#">
                        <Card className="mt-4 card-border-modal">
                            <span className="d-flex justify-content-between align-items-center">

                                <div className="d-flex align-items-center">
                                
                                    <FileTextOutlined className="mr-5" />
                                    <div> <p><b>JavaScript Integration</b></p>
                                        <p>Add JavaScript to your website to trigger invitations at different points in the customer journey</p></div>
                                </div>
                                <RightOutlined />
                            </span>
                        </Card>
                    </Link>
                    <Link to="#">
                        <Card className="mt-4 card-border-modal">
                            <span className="d-flex justify-content-between align-items-center">

                                <div className="d-flex align-items-center">
                                    <MailOutlined className="mr-5" />
                                    <div> 
                                        <p><b>Segment</b></p>
                                        <p>Use Segment events to trigger invitations</p></div>
                                </div>
                                <RightOutlined />
                            </span>
                        </Card>
                    </Link>
                    <Link to="#">
                        <Card className="mt-4 card-border-modal">
                            <span className="d-flex justify-content-between align-items-center">

                                <div className="d-flex align-items-center">
                                    <MailOutlined className="mr-5" />
                                    <div> <p><b>Zapier</b></p>
                                        <p>Connect Trustpilot to Zapier and use your existing tools to trigger invitations</p></div>
                                </div>
                                <RightOutlined />
                            </span>
                        </Card>
                    </Link>
                    <h4 className="mt-3">None of these work for you? Try another way</h4>
                    <p>If you can’t automate the way you ask for reviews, we have a number of other options. However, these will not be as reliable in building your TrustScore and will take more work.</p>
                    <Link to="#">
                        <Card className="mt-4 card-border-modal">
                            <span className="d-flex justify-content-between align-items-center">

                                <div className="d-flex align-items-center">
                                    <MailOutlined className="mr-5" />
                                    <div> <p><b>Simple File Upload</b></p>
                                        <p>For 90 days only, you can upload a list of customers you want to send invitations to</p></div>
                                </div>
                                <RightOutlined />
                            </span>
                        </Card>
                    </Link>
                    <Link to="#">
                        <Card className="mt-4 card-border-modal">
                            <span className="d-flex justify-content-between align-items-center">

                                <div className="d-flex align-items-center">
                                    <MailOutlined className="mr-5" />
                                    <div> <p><b>File Upload with Product Reviews</b></p>
                                        <p>Upload a list of customers and products they’ve purchased to send invitations</p></div>
                                </div>
                                <RightOutlined />
                            </span>
                        </Card>
                    </Link>
                    <Link to="#">
                        <Card className="mt-4 card-border-modal">
                            <span className="d-flex justify-content-between align-items-center">

                                <div className="d-flex align-items-center">
                                    <MailOutlined className="mr-5" />
                                    <div> <p><b>Basic Link</b></p>
                                        <p>Get the link to your review page on Trustpilot and send it to your customers ad-hoc</p></div>
                                </div>
                                <RightOutlined />
                            </span>
                        </Card>
                    </Link>
        </React.Fragment>
    )
};

export default Modals;