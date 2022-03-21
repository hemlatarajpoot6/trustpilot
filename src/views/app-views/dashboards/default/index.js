import React from "react";
import { Row, Col, Button } from 'antd';
// import { ReloadOutlined } from '@ant-design/icons';
import { withRouter } from 'react-router-dom';
import welcomeimg from "../../../../assets/img/logo-black (1).svg"
import "./dashboard.css";




export const DefaultDashboard = () => {

  return (
    <>
      <Row gutter={16}>
        <Col xs={24} sm={24} md={24} lg={24}>
          <div className="backimage">
            <h3 className="d-flex">Welcome to<img src={welcomeimg} className="ml-3" width={100} alt=''/></h3>
            <p>You have joined a community of businesses who care about building trustworthy relationship with their customers. Congrats!</p>
          </div>
        </Col>
      </Row>
      <div>
        <h3>Trust starts here</h3>
        <p>See how you can turn browsers into buyers in a few quick steps.</p>
      <Row>
        <Col xs={24} sm={24} md={24} lg={12}>
          <div>
            <h5>Recommended</h5>
            <h4>Show off that you're on Trustpilot</h4>
            <p>Set up a widget with the Trustpilot logo on your site—just like this one. It'll let customers know they can shop with confidence.</p>
            <Button>Explore widgets</Button>
          </div>
        </Col>
        <Col xs={24} sm={24} md={24} lg={12}>
        <div>
            <h4>Set up automatic review invitations</h4>
            <p>Set up a widget with the Trustpilot logo on your site—just like this one. It'll let customers know they can shop with confidence.</p>
            <Button>Start inviting</Button>
          </div>
        </Col>
      </Row>
</div>
    </>
  )
}


export default withRouter(DefaultDashboard);
