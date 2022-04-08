import { Col, Row, Card } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const AutomaticFedback = () =>{

    return(
       <React.Fragment>
            <h1>Automatic Feedback Service</h1>
           <Row>
               <Col xs={24} sm={24} md={24} lg={16}>
               <Card>
                  <h3>Collect reviews automatically</h3>
                  <h4>Set up automation to get a continuous flow of verified reviews</h4>
                  <p>Automated invitations are the fastest way to qualify for Google Seller Ratings and use your stars to stand out in Google Search. Once you hit 100 verified reviews your business could qualify for Google Seller Ratings.
                      <Link to="#"> Need help?</Link>
                  </p>
                  <h4>Do you send your customers confirmation emails after a purchase?</h4>
                  <p>If yes, follow the simple steps below to start collecting reviews automatically.</p>
               </Card>
               </Col>
               <Col xs={24} sm={24} md={24} lg={8}>
                   </Col>
           </Row>
       </React.Fragment>
    )
};

export default AutomaticFedback;