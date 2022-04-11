import React from "react";
import { Tabs } from 'antd';
import EmailSetting from "./tabs/EmailSetting";
import TimingFrequency from "./tabs/TimingFrequency";
import LegalNotice from "./tabs/LegalNotice";
import ConsumerPrivacy from "./tabs/Consumer";

const InvitationSetting = () => {

  const { TabPane } = Tabs;

  function callback(key) {
    console.log(key);
  }

  return (
    <React.Fragment>
      <h1>Invitation Settings</h1>
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="Email settings" key="1">
          <EmailSetting />
        </TabPane>
        <TabPane tab="Timing and frequency" key="2">
          <TimingFrequency />
        </TabPane>
        <TabPane tab="Legal notice" key="3">
          <LegalNotice />
        </TabPane>
        <TabPane tab="Consumer privacy" key="4">
         <ConsumerPrivacy />
        </TabPane>
      </Tabs>
    </React.Fragment>
  )
};

export default InvitationSetting;