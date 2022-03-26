import React from "react";
import { Tabs } from 'antd';
import Inbox from "./tabs/Inbox";
import QandA from "./tabs/Q&A";
import ProductCatalog from "./tabs/ProductCatalog";
import ProductAttributes from "./tabs/ProductAttributes";
import Analytics from "./tabs/Analytics";
import ThirdPartyReview from "./tabs/ThirdPartyReview";
import Settings from "./tabs/Settings";
import TestProduct from "./tabs/TestProduct";

const Product = () =>{

        
const { TabPane } = Tabs;

function callback(key) {
    console.log(key);
  }

    return(
        <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="Inbox" key="1">
           <Inbox />
        </TabPane>
        <TabPane tab="Q&A" key="2">
       <QandA />
        </TabPane>
        <TabPane tab="Product catalog" key="3">
          <ProductCatalog />
        </TabPane>
        <TabPane tab="Product attributes" key="4">
         <ProductAttributes />
        </TabPane>
        <TabPane tab="Analytics" key="5">
          <Analytics />
        </TabPane>
        <TabPane tab="Third-party reviews" key="6">
      <ThirdPartyReview />
        </TabPane>
        <TabPane tab="Settings" key="7">
          <Settings />
        </TabPane>
        <TabPane tab="Test product reviews" key="8">
          <TestProduct />
        </TabPane>
      </Tabs>
    )
};

export default Product;