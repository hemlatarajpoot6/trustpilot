import React from 'react'
import { SIDE_NAV_WIDTH, SIDE_NAV_COLLAPSED_WIDTH, NAV_TYPE_TOP } from 'constants/ThemeConstant';
// import { APP_NAME } from 'configs/AppConfig';
import { connect } from "react-redux";
import utils from 'utils';
import { Grid, Menu, Dropdown, Divider } from 'antd';
import { DownOutlined } from "@ant-design/icons"

const { useBreakpoint } = Grid;

const getLogoWidthGutter = (props, isMobile) => {
  const { navCollapsed, navType } = props;
  const isNavTop = navType === NAV_TYPE_TOP ? true : false
  if(isMobile && !props.mobileLogo) {
    return 0
  }
  if(isNavTop) {
    return 'auto'
  }
  if(navCollapsed) {
    return `${SIDE_NAV_COLLAPSED_WIDTH}px`
  } else {
    return `${SIDE_NAV_WIDTH}px`
  }
}

// const getLogo = (props) => {
//   const { navCollapsed, logoType } = props;
//   if(logoType === 'light') {
//     if(navCollapsed) {
//       return '/img/logo-sm-white.png'
//     }
//     return '/img/logo-white.png'
//   }

//   if (navCollapsed) {
//     return '/img/logo-sm.png'
//   }
//   return '/img/logo.png'
// }

const getLogoDisplay = (isMobile, mobileLogo) => {
  if(isMobile && !mobileLogo) {
    return 'd-none'
  } else {
    return 'logo'
  }
}

export const Logo = (props) => {
  const isMobile = !utils.getBreakPoint(useBreakpoint()).includes('lg')


  const profileMenu = (
    <div className="nav-profile nav-dropdown">
      <div className="nav-profile-header">
        <div className="d-flex">
          <div className="pl-3">
            <h4 className="mb-0">Public profile setup</h4>
            <Divider />
            <span className="text-muted">Go to public profile</span>
          </div>
        </div>
      </div>
    
    </div>
  );


  return (
    <div
      className={getLogoDisplay(isMobile, props.mobileLogo)} 
      style={{width: `${getLogoWidthGutter(props, isMobile)}`}}>
        <h3>engineermaster.in</h3>
        <Dropdown placement="bottomRight" overlay={profileMenu} trigger={["click"]}>
      <Menu className="d-flex align-item-center" mode="horizontal">
        <Menu.Item>
         <DownOutlined />
        </Menu.Item>
      </Menu>
    </Dropdown>
      {/* <img src={getLogo(props)} alt={`${APP_NAME} logo`}/> */}
    </div>
  )
}

const mapStateToProps = ({ theme }) => {
  const { navCollapsed, navType } =  theme;
  return { navCollapsed, navType }
};

export default connect(mapStateToProps)(Logo);
