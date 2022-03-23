import React from "react";
import { Row, Col, Button, Card, Rate, Checkbox, Progress } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import { withRouter } from 'react-router-dom';
import welcomeimg from "../../../../assets/img/logo-black (1).svg"
import "./dashboard.css";




export const DefaultDashboard = () => {


  function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }
  return (
    <>
      <Row gutter={16}>
        <Col xs={24} sm={24} md={24} lg={24}>
          <div className="backimage">
            <h3 className="d-flex">Welcome to<img src={welcomeimg} className="ml-3" width={100} alt='' /></h3>
            <p>You have joined a community of businesses who care about building trustworthy relationship with their customers. Congrats!</p>
          </div>
        </Col>
      </Row>
      <div className="trust-start mb-3">
        <h3>Trust starts here</h3>
        <p>See how you can turn browsers into buyers in a few quick steps.</p>
        <Row>
          <Col xs={24} sm={24} md={24} lg={12}>
            <div className="mr-3">
              <Card className="card-padding">
                <div className="height"></div>
                <div className="p-3">
                  <h5>Recommended</h5>
                  <h4>Show off that you're on Trustpilot</h4>
                  <p>Set up a widget with the Trustpilot logo on your site—just like this one. It'll let customers know they can shop with confidence.</p>
                  <Button>Explore widgets</Button>
                </div>
              </Card>
            </div>
          </Col>
          <Col xs={24} sm={24} md={24} lg={12}>
            <div className="ml-3">
              <Card className="card-padding">
                <div className="height"></div>
                <div className="p-3">
                  <h4>Set up automatic review invitations</h4>
                  <p>Set up a widget with the Trustpilot logo on your site—just like this one. It'll let customers know they can shop with confidence.</p>
                  <Button>Start inviting</Button>
                </div>
              </Card>
            </div>
          </Col>
        </Row>
      </div>
      <Row>
        <Col xs={24} sm={24} md={24} lg={24}>
          <Card>
            <div className="d-flex justify-content-between">
              <span>
                <h4>Looks like your TrustScore is about to increase!</h4>
                <p>If it does, you’ll earn more stars to show off on your profile and widgets.</p>
              </span>
              <Button type="primary" className="float-right">See your forecast</Button>
            </div>
          </Card>
        </Col>
      </Row>
      <div>
        <h2>Service reviews</h2>
        <Row>
          <Col xs={24} sm={24} md={24} lg={16}>
            <Card className="mr-3">
              <div className="d-flex justify-content-between align-items-baseline">
                <span>
                  <h4>Current TrustScore</h4>
                  3.7<Rate allowHalf defaultValue={2.5} />
                  <h5>Based on 1 reviews</h5>
                </span>
                <RightOutlined className="float-right text-center text-muted" />
              </div>
            </Card>
          </Col>
          <Col xs={24} sm={24} md={24} lg={8}>
            <Card className="mr-3">
              <h4>New service reviews</h4>
              <h5>1</h5>
              <h5 className="text-muted">Since Feb 24, 2022</h5>
            </Card>
          </Col>
        </Row>
      </div>
      <Row>
        <Col xs={24} sm={24} md={24} lg={12}>
          <Card className="mr-3">
            <div className="d-flex justify-content-between align-items-baseline">
              <span>
                <h4>Awaiting reply</h4>
              </span>
              <RightOutlined className="float-right text-center text-muted" />
            </div>
            <span className="text-center">
              <h5 className="py-5 my-4">You’ve replied to all 1, 2, and 3-star reviews</h5>
            </span>
          </Card>
        </Col>
        <Col xs={24} sm={24} md={24} lg={12}>
          <Card className="ml-3">
            <h4>Distribution of stars</h4>
            <ul className="p-0" style={{ listStyle: "none" }}>
              <li className="d-flex align-items-baseline">
                <Checkbox onChange={onChange} className="check-label">Excellent</Checkbox>
                <Progress percent={100} className="progress" />
              </li>
              <li className="d-flex align-items-baseline">
                <Checkbox onChange={onChange} className="check-label">Great</Checkbox>
                <Progress percent={70} className="progress" />
              </li>
              <li className="d-flex align-items-baseline">
                <Checkbox onChange={onChange} className="check-label">Average</Checkbox>
                <Progress percent={50} className="progress" />
              </li>
              <li className="d-flex align-items-baseline">
                <Checkbox onChange={onChange} className="check-label">Poor</Checkbox>
                <Progress percent={20} className="progress" />
              </li>
              <li className="d-flex align-items-baseline">
                <Checkbox onChange={onChange} className="check-label">Bad</Checkbox>
                <Progress percent={0} className="progress" />
              </li>
            </ul>
          </Card>
        </Col>
      </Row>
      <div>
        <h2>Reach</h2>
        <Row>
        <Col xs={24} sm={24} md={24} lg={12}>
          <Card className="mr-3">
           <h4>How many people have viewed your profile?</h4>
           <p>Since Feb 23, 2022, you’ve received</p>
           <h5><span className="h3">18</span>views</h5>
           <Button type="primary" className="btn-width">See who’s looking at your profile</Button>
          </Card>
        </Col>
        <Col xs={24} sm={24} md={24} lg={12}>
          <Card className="ml-3">
          <h4>Add a widget to help customers find your profile</h4>
          <div className="text-center Review-bg">
          <h5 className="border border-success"><span>Review us on</span><img src={welcomeimg} className="ml-1" width={80} alt='' style={{marginTop: "-5px"}} /></h5>
          </div>
          <Button type="primary" className="btn-width">View widgets</Button>
          </Card>
        </Col>
        </Row>
      </div>
    </>
  )
}


export default withRouter(DefaultDashboard);
