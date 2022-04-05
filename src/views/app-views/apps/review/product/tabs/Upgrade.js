import { Button, Col, Row, Divider, Modal, Card } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import upgradimg from "../../../../../../assets/img/66910ad9d6acda66964b.png";
import { CheckOutlined } from "@ant-design/icons"

const Upgrade = () => {

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [convertVisible, setConvertVisible] = useState(false);
    const [Enhance, setEnhance] = useState(false);
    const [Connect, setConnect] = useState(false);
    const [ProductReviews, setProductReviews] = useState(false);
    const [Insights, setInsights] = useState(false);
    const [Support, setSupport] = useState(false);
    const [contact, setContact] = useState(false);

    const contactModal = () => {
        setContact(true);
    };

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    const convertModal = () => {
        setConvertVisible(true);
    };

    const convertOk = () => {
        setConvertVisible(false);
    };

    const convertCancel = () => {
        setConvertVisible(false);
    };
    const enhanceModal = () => {
        setEnhance(true);
    };

    const enhanceOk = () => {
        setEnhance(false);
    };

    const enhanceCancel = () => {
        setEnhance(false);
    };
    const connectModal = () => {
        setConnect(true);
    };

    const connectOk = () => {
        setConnect(false);
    };

    const connectCancel = () => {
        setConnect(false);
    };
    const productModal = () => {
        setProductReviews(true);
    };

    const productOk = () => {
        setProductReviews(false);
    };

    const productCancel = () => {
        setProductReviews(false);
    };
    const insightModal = () => {
        setInsights(true);
    };

    const insightOk = () => {
        setInsights(false);
    };

    const insightCancel = () => {
        setInsights(false);
    };
    const supportModal = () => {
        setSupport(true);
    };

    const supportOk = () => {
        setSupport(false);
    };

    const supportCancel = () => {
        setSupport(false);
    };


    return (
        <React.Fragment>
            <h1 className="mb-5">Upgrade and unlock more features</h1>
            <Row>
                <Col xs={24} sm={24} md={24} lg={16}>
                    <div className="text-center">
                        <img src={upgradimg} width={500} alt="upgradimg" />
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
            <Row>
                <Col xs={24} sm={24} md={24} lg={24}>
                    <div className="text-center">
                        <h2 className="text-center m-5">Other powerful add-ons to serve your specific business needs</h2>
                    </div>
                </Col>
            </Row>
            <div>
                <h2>Add-on modules</h2>
                <Row>
                    <Col xs={24} sm={24} md={24} lg={8}>
                        <Card className="card-box mr-3">
                            <h2>Invite</h2>
                            <h4>Unlimited invitations</h4>
                            <Divider />
                            <p>Automatically send review invitations to as many customers as you’d like.</p>
                            <Button onClick={showModal} className="text-info">Learn more</Button>
                            <Modal title="Invite" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} width={600}>
                                <h4>Automatically invite your customers to write reviews after every order</h4>
                                <p>Get an unlimited supply of review invitations so that after every transaction, you can automatically invite customers to write verified reviews that count towards your Google Seller Ratings.</p>
                                <h4>This add-on module includes:</h4>
                                <ul>
                                    <li className="list"><b>Unlimited review invitations</b> that are automatically triggered after every transaction and count toward your Google Seller Ratings</li>
                                    <li className="list"><b>A constant flow of new reviews</b> that provide valuable insights about how your customers perceive your business, products, and locations</li>
                                    <li className="list"><b>A continuous collection of current review content</b> A continuous collection of current review content</li>
                                </ul>
                            </Modal>
                        </Card>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={8}>
                        <Card className="card-box mr-3">
                            <h2>Convert</h2>
                            <h4>Customizable widgets</h4>
                            <Divider />
                            <p>Increase conversion with targeted widgets that help turn browsers into buyers.</p>
                            <Button onClick={convertModal} className="text-info">Learn more</Button>
                            <Modal title="Convert" visible={convertVisible} onOk={convertOk} onCancel={convertCancel} width={600}>
                                <h4>Increase conversions with widgets directly on-site</h4>
                                <p>Build trust and increase conversions across your business (on-site, in marketing channels and on social) with our extensive library of service review TrustBox widgets.</p>
                                <h4>This add-on module includes:</h4>
                                <ul>
                                    <li>Showcase reviews across your website, email, and digital marketing</li>
                                    <li className="list"><b>TrustBox Optimizer</b> to track and optimize the performance of your TrustBox widgets with built-in split testing.</li>
                                    <li className="list"><b>Targeted Trustboxes</b> to show your most relevant reviews</li>
                                    <li className="list"><b>Facebook integration</b> to display reviews on your company’s Facebook page</li>
                                </ul>
                            </Modal>
                        </Card>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={8}>
                        <Card className="card-box">
                            <h2>Enhance</h2>
                            <h4>Get personal</h4>
                            <Divider />
                            <p>Showcase your brand with unique and customizable email templates, profile content, and invitations.</p>
                            <Button onClick={enhanceModal} className="text-info">Learn more</Button>
                            <Modal title="Enhance" visible={Enhance} onOk={enhanceOk} onCancel={enhanceCancel} width={600}>
                                <h4>Personalize your public profile and review invitations with your brand</h4>
                                <p>Add unique company content to your Trustpilot public profile and create email templates that fit your brand and tone of voice.</p>
                                <h4>This add-on module includes:</h4>
                                <ul>
                                    <li className="list">
                                        <b>Promotion and guarantee content boxes </b> to build brand awareness on your Trustpilot public profile</li>
                                    <li className="list">
                                        <b>Facebook Like content box</b> to highlight your Facebook page on your Trustpilot public profile</li>
                                    <li className="list">
                                        <b>Customized review invitations</b>  to add your company’s logo and branding</li>
                                    <li className="list">
                                        <b>Advanced analytics</b>  to track Google organic search performance and invitation-to-review conversion</li>
                                    <li className="list">
                                        <b>Export review data</b>  to share and analyze with team members in your company</li>
                                </ul>
                            </Modal>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col xs={24} sm={24} md={24} lg={8}>
                        <Card className="card-box mr-3">
                            <h2>Connect</h2>
                            <h4>Customized APIs</h4>
                            <Divider />
                            <p>Choose exactly how Trustpilot reviews appear on your site with our advanced APIs.</p>
                            <Button onClick={connectModal} className="text-info">Learn more</Button>
                            <Modal title="Connect" visible={Connect} onOk={connectOk} onCancel={connectCancel} width={600}>
                                <h4>Create your own custom APIs to get the most out of your Trustpilot solution</h4>
                                <p>Through our APIs, you can customize how your Trustpilot reviews look on your site and create a review collection solution that is uniquely adapted to your technical setup.</p>
                                <h4>This add-on module includes:</h4>
                                <ul>
                                    <li className="list"><b>APIs</b> to build a custom integration with your business: customize how your reviews look on your site and in marketing assets, trigger review invitations directly from your CRM, generate invitation links, and more</li>
                                    <li className="list"><b>Embedded Review Form</b> to collect reviews directly on your own website</li>
                                </ul>
                            </Modal>
                        </Card>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={8}>
                        <Card className="card-box mr-3">
                            <h2>Product Reviews</h2>
                            <h4>Show off your products</h4>
                            <Divider />
                            <p>Increase product sales with widgets directly on product pages</p>
                            <Button onClick={productModal} className="text-info">Learn more</Button>
                            <Modal title="Product Reviews" visible={ProductReviews} onOk={productOk} onCancel={productCancel} width={600}>
                                <h4>Increase product sales with widgets directly on product pages</h4>
                                <p>Unlock product review TrustBox widgets for your product pages to improve your SEO and help people shop with confidence.</p>
                                <h4>This add-on module includes:</h4>
                                <ul>
                                    <li className="list"><b>Product TrustBoxes</b> to showcase reviews on your product and category pages</li>
                                    <li className="list"><b>Rich snippet stars</b> to stand out in organic search results</li>
                                    <li className="list"><b>User-generated photos in product reviews</b> you can showcase on your site and in your marketing materials</li>
                                    <li className="list"><b>Google Seller Ratings for product ads</b> to increase traffic and sales</li>
                                    <li className="list"><b>Import existing third-party product reviews</b> for a head start on your collection</li>
                                </ul>
                            </Modal>
                        </Card>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={8}>
                        <Card className="card-box">
                            <h2>Insights</h2>
                            <h4>Understand your data</h4>
                            <Divider />
                            <p>Get the full breakdown of your review data and actionable insights on how your business is performing on Trustpilot.</p>
                            <Button onClick={insightModal} className="text-info">Learn more</Button>
                            <Modal title="Insights" visible={Insights} onOk={insightOk} onCancel={insightCancel} width={600}>
                                <h4>Get a deeper, data-driven understanding of your reviews</h4>
                                <p>With artificial intelligence doing the heavy lifting, we break down your review data to give you actionable insights that help you optimize your business processes and your performance over time.</p>
                                <h4>This add-on module includes:</h4>
                                <ul>
                                    <li className="list">
                                        <b>Review Insights</b> to automatically detect topics in your reviews and the sentiment of those topics</li>
                                    <li className="list">
                                        <b>Custom topics</b> to discover insights tailored to your company or industry</li>
                                    <li className="list">
                                        <b>Trend reports</b>  on statistics and insights based on an automated analysis of last month's reviews</li>
                                    <li className="list">
                                        <b>Sentiment heat maps</b>  to identify your company’s strengths and areas of improvement</li>
                                </ul>
                            </Modal>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col xs={24} sm={24} md={24} lg={8}>
                        <Card className="card-box mr-3">
                            <h2>Support</h2>
                            <h4>We're here to help</h4>
                            <Divider />
                            <p>Get support and advice on increasing brand trust from our experts in Customer Success.</p>
                            <Button onClick={supportModal} className="text-info">Learn more</Button>
                            <Modal title="Support" visible={Support} onOk={supportOk} onCancel={supportCancel} width={600}>
                                <h4>Get help from Customer Success</h4>
                                <p>Work directly with our Customer Success Managers, Implementation Managers and Support Engineers to develop and deploy your review strategy to quickly grow brand trust.</p>
                                <h4>This add-on module includes:</h4>
                                <ul>
                                    <li className="list"><b>A dedicated Customer Success Manager</b> who will develop your review strategy with you</li>
                                    <li className="list"><b>Best practice consultation</b> to get you started on the right foot</li>
                                    <li className="list"><b>Reputation management advice</b></li>
                                    <li className="list"><b>Technical assistance</b> from our Implementation Managers and Support Engineers</li>
                                    <li className="list"><b>More support options</b> including chat, callback, and live onboarding</li>
                                </ul>
                            </Modal>
                        </Card>
                    </Col>
                </Row>
            </div>
        </React.Fragment>
    )
};

export default Upgrade;