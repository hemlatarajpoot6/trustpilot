import React from "react";
import { Tabs } from 'antd';
import Inbox from "./tabs/Inbox";
import QandA from "./tabs/Q&A";
import ProductCatalog from "./tabs/ProductCatalog";

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
          Content of Tab Pane 2
        </TabPane>
        <TabPane tab="Analytics" key="5">
          Content of Tab Pane 2
        </TabPane>
        <TabPane tab="Third-party reviews" key="6">
          Content of Tab Pane 2
        </TabPane>
        <TabPane tab="Settings" key="7">
          Content of Tab Pane 2
        </TabPane>
        <TabPane tab="Test product reviews" key="8">
          Content of Tab Pane 2
        </TabPane>
      </Tabs>
    )
};

export default Product;