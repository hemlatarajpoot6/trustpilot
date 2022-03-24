import { Button, Card, Col, Divider, Row } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import qandaimage from "../../../../../../assets/img/18c40f7307ae05ba135c.png"
import "../../service/service.css";

const QandA = () =>{

    return(
        <React.Fragment>
            <Row>
                <Col xs={24} sm={24} md={24} lg={12}>
                    <Card>
                        <div className="background-color">
                            <img src={qandaimage} alt='q&aimg' />
                            <h1>Decrease customer hesitation</h1>
                            <h4>Make it easy for new customers to ask their product questions and provide them with answers – straight from your product page.</h4>
                        </div>
                    </Card>
                </Col>
                <Col xs={24} sm={24} md={24} lg={12}>
                <Card>
                        <div>
                            <h3>This feature is part of the Product Reviews add-on module. You can unlock it by upgrading your plan.</h3>
                            <Divider />
                            <h5>The add-on module includes:</h5>
                            <ul>
                                <li>Product TrustBoxes to showcase reviews on your product and category pages</li>
                                <li>Rich snippet stars to stand out in organic search results</li>
                                <li>User-generated photos in product reviews you can showcase on your site and in your marketing materials</li>
                                <li>Google Seller Ratings for product ads to increase traffic and sales</li>
                                <li>Import existing third-party product reviews for a head start on your collection</li>
                                <Link to="/#"><Button>Upgrade to access</Button></Link>
                            </ul>
                        </div>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
};

export default QandA;