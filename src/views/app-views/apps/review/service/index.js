import React from "react";
import { Tabs } from 'antd';
import Inbox from "./tabs/Inbox";

const review = () =>{

    
const { TabPane } = Tabs;

    function callback(key) {
        console.log(key);
      }

    return(
        <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="Inbox" key="1">
        <Inbox />
        </TabPane>
        <TabPane tab="Flagging activity" key="2">
          Content of Tab Pane 2
        </TabPane>
      </Tabs>
    )
};

export default review;