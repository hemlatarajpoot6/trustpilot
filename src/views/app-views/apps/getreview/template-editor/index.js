import { Button, Card, Col, Divider, Row } from "antd";
import React from "react";
import { Link } from "react-router-dom";
// import qandaimage from "../../../../../../assets/img/18c40f7307ae05ba135c.png"
import qandaimage from "../../../../../assets/img/template.svg"
import { CheckCircleFilled } from "@ant-design/icons"

const TemplateEditor = () =>{

    return(
        <React.Fragment>
            <Row>
                <Col xs={24} sm={24} md={24} lg={14}>
                    <Card className="mr-3">
                        <div className="background-color-temp">
                            <img src={qandaimage} alt='q&aimg' className="mt-5 mb-5" />
                            <h1 className="mb-3">Increase reviews with optimized email templates</h1>
                            <h4 className="mb-5">Use one of our proven templates to drive high invitation-to-review conversion rates. Or create custom templates that fit your brand and tone of voice.</h4>
                        </div>
                    </Card>
                </Col>
                <Col xs={24} sm={24} md={24} lg={10}>
                    <Card className="ml-3">
                        <div>
                            <h3>This feature is part of the Product Reviews add-on module. You can unlock it by upgrading your plan.</h3>
                            <Divider />
                            <h5>The add-on module includes:</h5>
                            <ul>
                                <div className="d-flex mt-3">
                                    <CheckCircleFilled className="text-success mr-3 mt-1" />
                                    <div>
                                        <li className="list-box-product">
                                            <b> Product TrustBoxes</b> to showcase reviews on your product and category pages
                                        </li>
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <CheckCircleFilled className="text-success mr-3 mt-1" />
                                    <div>
                                        <li className="list-box-product">
                                            <b>Rich snippet stars</b> to stand out in organic search results
                                        </li>
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <CheckCircleFilled className="text-success mr-3 mt-1" />
                                    <div>
                                        <li className="list-box-product">
                                            <b> User-generated photos in product reviews</b> you can showcase on your site and in your marketing materials
                                        </li>
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <CheckCircleFilled className="text-success mr-3 mt-1" />
                                    <div>
                                        <li className="list-box-product">
                                            <b> Google Seller Ratings for product ads</b> to increase traffic and sales
                                        </li>
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <CheckCircleFilled className="text-success mr-3 mt-1" />
                                    <div>
                                        <li className="list-box-product">
                                            <b>Import existing third-party product reviews</b> for a head start on your collection
                                        </li>
                                    </div>
                                </div>
                                <Link to="/app/apps/review/upgrade"><Button type="primary">Upgrade to access</Button></Link>
                            </ul>
                        </div>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
};

export default TemplateEditor;