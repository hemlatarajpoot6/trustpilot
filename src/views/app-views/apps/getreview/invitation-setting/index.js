import React from "react";
import { Tabs } from 'antd';
import EmailSetting from "./tabs/EmailSetting";

const InvitationSetting = () =>{

    const { TabPane } = Tabs;

    function callback(key) {
        console.log(key);
      }

    return(
        <React.Fragment>
            <h1>Invitation Settings</h1>
             <Tabs defaultActiveKey="1" onChange={callback}>
    <TabPane tab="Email settings" key="1">
      <EmailSetting />
    </TabPane>
    <TabPane tab="Timing and frequency" key="2">
      Content of Tab Pane 2
    </TabPane>
    <TabPane tab="Legal notice" key="3">
      Content of Tab Pane 3
    </TabPane>
    <TabPane tab="Consumer privacy" key="4">
      Content of Tab Pane 3
    </TabPane>
  </Tabs>
        </React.Fragment>
    )
};

export default InvitationSetting;