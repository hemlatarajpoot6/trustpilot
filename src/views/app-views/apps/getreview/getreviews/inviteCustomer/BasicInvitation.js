import { Row, Col, Card, Input, Button } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

const BasicInvitation = () => {

    return (
        <React.Fragment>
            <p className="h2">Invite customers / <b>Basic invitations</b></p>
            <Row>
                <Col xs={24} sm={24} md={24} lg={16}>
                    <Card>
                        <h4 className="mb-4">Simply include this link in your emails to customers:</h4>
                        <Input.Group compact>
                            <Input disabled className="mb-4 font-weight-bold text-dark"
                                style={{ width: 'calc(114% - 200px)' }}
                                defaultValue="https://www.trustpilot.com/evaluate/engineermaster.in" />
                            <Button type="primary">Copy link</Button>
                        </Input.Group>
                        <h5 className="mb-5">This link goes directly to your company’s review form on Trustpilot, where your c
                            ustomers can write a review. They will have to create a Trustpilot account to do so.
                            Reviews that come from <Link to="#" className="text-info">Basic Invitations</Link> get the label
                            “invited”, and are not eligible for Google Seller Ratings.</h5>

                    </Card>
                </Col>
                <Col xs={24} sm={24} md={24} lg={8}>
                    <Card className="ml-2 h-100">
                        <img src="http://www.w3.org/2000/svg" alt="best" /><b className="ml-2">Best practices for creating invitations</b>
                        <ol className="mt-3 mb-3 pl-3">
                            <li className="mt-3 mb-3">Invite <b>all customers or none</b></li>
                            <li className="mt-3 mb-3">Tell reviewers they’ll get a <b>user profile</b></li>
                            <li className="mt-3 mb-3">Feel free to  <b>link to our guidelines</b></li>
                            <li className="mt-3 mb-3"><b>Don’t offer incentives</b> for reviews</li>
                        </ol>
                        <Link to="#">Read more here</Link>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
};

export default BasicInvitation;