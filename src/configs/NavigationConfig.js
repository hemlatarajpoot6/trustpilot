import { 
  SettingOutlined,
  HomeOutlined,
  FunnelPlotOutlined,
  NotificationOutlined,
  NumberOutlined,
  UnorderedListOutlined,
  AppstoreAddOutlined,
  DotChartOutlined,
  InteractionOutlined
} from '@ant-design/icons';
import { APP_PREFIX_PATH } from 'configs/AppConfig'

// const extraNavTree = [
//   {
//     key: 'extra',
//     path: `${APP_PREFIX_PATH}/pages`,
//     title: 'sidenav.pages',
//     icon: PlusCircleOutlined,
//     breadcrumb: true,
//     submenu: [
//       {
//         key: 'extra-pages',
//         path: `${APP_PREFIX_PATH}/pages`,
//         title: 'sidenav.pages',
//         icon: FileTextOutlined,
//         breadcrumb: true,
//         submenu: [
//           {
//             key: 'extra-pages-profile',
//             path: `${APP_PREFIX_PATH}/pages/profile`,
//             title: 'sidenav.pages.profile',
//             icon: '',
//             breadcrumb: false,
//             submenu: []
//           },
//           {
//             key: 'extra-pages-list',
//             path: `${APP_PREFIX_PATH}/pages/user-list`,
//             title: 'sidenav.pages.userlist',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           },
//           {
//             key: 'extra-pages-invoice',
//             path: `${APP_PREFIX_PATH}/pages/invoice`,
//             title: 'sidenav.pages.invoice',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           },
//           {
//             key: 'extra-pages-pricing',
//             path: `${APP_PREFIX_PATH}/pages/pricing`,
//             title: 'sidenav.pages.pricing',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           },
//           {
//             key: 'extra-pages-faq',
//             path: `${APP_PREFIX_PATH}/pages/faq`,
//             title: 'sidenav.pages.faq',
//             icon: '',
//             breadcrumb: false,
//             submenu: []
//           },
//           {
//             key: 'extra-pages-setting',
//             path: `${APP_PREFIX_PATH}/pages/setting`,
//             title: 'sidenav.pages.setting',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           }
//         ]
//       },
//       {
//         key: 'extra-auth',
//         path: `${AUTH_PREFIX_PATH}`,
//         title: 'sidenav.authentication',
//         icon: SafetyOutlined,
//         breadcrumb: true,
//         submenu: [
//           {
//             key: 'extra-auth-login-1',
//             path: `${AUTH_PREFIX_PATH}/login-1`,
//             title: 'sidenav.authentication.login.1',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           },
//           {
//             key: 'extra-auth-login-2',
//             path: `${AUTH_PREFIX_PATH}/login-2`,
//             title: 'sidenav.authentication.login.2',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           },
//           {
//             key: 'extra-auth-register-1',
//             path: `${AUTH_PREFIX_PATH}/register-1`,
//             title: 'sidenav.authentication.register.1',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           },
//           {
//             key: 'extra-auth-register-2',
//             path: `${AUTH_PREFIX_PATH}/register-2`,
//             title: 'sidenav.authentication.register.2',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           },
//           {
//             key: 'extra-auth-forgot-password',
//             path: `${AUTH_PREFIX_PATH}/forgot-password`,
//             title: 'sidenav.authentication.forgetPassword',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           }
//         ]
//       },
//       {
//         key: 'extra-errors',
//         path: `${AUTH_PREFIX_PATH}/error-1`,
//         title: 'sidenav.errors',
//         icon: StopOutlined,
//         breadcrumb: true,
//         submenu: [
//           {
//             key: 'extra-errors-error-1',
//             path: `${AUTH_PREFIX_PATH}/error-1`,
//             title: 'sidenav.errors.error.1',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           },
//           {
//             key: 'extra-errors-error-2',
//             path: `${AUTH_PREFIX_PATH}/error-2`,
//             title: 'sidenav.errors.error.2',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           }
//         ]
//       }
//     ]
//   }
// ]

const dashBoardNavTree =  [
    { 
      key: 'dashboards-default',
      path: `${APP_PREFIX_PATH}/dashboards/default`,
      title: 'sidenav.dashboard.default',
      icon: HomeOutlined,
      breadcrumb: false,
      submenu: []
    },
    { 
      submenu: [     {
        key: 'apps-review',
        path: `${APP_PREFIX_PATH}/apps/review`,
        title: 'sidenav.apps.review',
        icon: InteractionOutlined,
        breadcrumb: true,
        submenu: [
          {
            key: 'apps-review-service',
            path: `${APP_PREFIX_PATH}/apps/review/service`,
            title: 'sidenav.apps.review.service',
            icon: '',
            breadcrumb: true,
            submenu: []
          },
          {
            key: 'apps-review-product',
            path: `${APP_PREFIX_PATH}/apps/review/product`,
            title: 'sidenav.apps.review.product',
            icon: '',
            breadcrumb: true,
            submenu: []
          }
        ]
      },]
    },
    { 
      submenu: [     {
        key: 'apps-getreview',
        path: `${APP_PREFIX_PATH}/apps/getreview`,
        title: 'sidenav.apps.getreview',
        icon: FunnelPlotOutlined,
        breadcrumb: true,
        submenu: [
          {
            key: 'apps-getreview-overview',
            path: `${APP_PREFIX_PATH}/apps/getreview/overview`,
            title: 'sidenav.apps.getreview.overview',
            icon: '',
            breadcrumb: false,
            submenu: []
          },
          {
            key: 'apps-getreview-getreviews',
            path: `${APP_PREFIX_PATH}/apps/getreview/getreviews`,
            title: 'sidenav.apps.getreview.getreviews',
            icon: '',
            breadcrumb: false,
            submenu: []
          },
          {
            key: 'apps-getreview-Invitationstatus',
            path: `${APP_PREFIX_PATH}/apps/getreview/Invitationstatus`,
            title: 'sidenav.apps.review.Invitationstatus',
            icon: '',
            breadcrumb: false,
            submenu: []
          },
          {
            key: 'apps-getreview-AutomaticFeedbackService',
            path: `${APP_PREFIX_PATH}/apps/getreview/AutomaticFeedbackService`,
            title: 'sidenav.apps.review.AutomaticFeedbackService',
            icon: '',
            breadcrumb: false,
            submenu: []
          },
          {
            key: 'apps-getreview-Invitationsettings',
            path: `${APP_PREFIX_PATH}/apps/getreview/Invitationsettings`,
            title: 'sidenav.apps.review.Invitationsettings',
            icon: '',
            breadcrumb: false,
            submenu: []
          },
          {
            key: 'apps-getreview-Templateeditor',
            path: `${APP_PREFIX_PATH}/apps/getreview/Templateeditor`,
            title: 'sidenav.apps.review.Templateeditor',
            icon: '',
            breadcrumb: false,
            submenu: []
          }
        ]
      },]
    },
    { 
      submenu: [     {
        key: 'apps-showcase',
        path: `${APP_PREFIX_PATH}/apps/showcase`,
        title: 'sidenav.apps.showcase',
        icon: NotificationOutlined,
        breadcrumb: true,
        submenu: [
          {
            key: 'apps-showcase-website',
            path: `${APP_PREFIX_PATH}/apps/showcase/website`,
            title: 'sidenav.apps.showcase.website',
            icon: '',
            breadcrumb: true,
            submenu: []
          },
          {
            key: 'apps-showcase-social',
            path: `${APP_PREFIX_PATH}/apps/showcase/social`,
            title: 'sidenav.apps.showcase.social',
            icon: '',
            breadcrumb: true,
            submenu: []
          },
          {
            key: 'apps-showcase-Emailwidgets',
            path: `${APP_PREFIX_PATH}/apps/showcase/Emailwidgets`,
            title: 'sidenav.apps.showcase.Emailwidgets',
            icon: '',
            breadcrumb: true,
            submenu: []
          },
          {
            key: 'apps-showcase-Marketingassets',
            path: `${APP_PREFIX_PATH}/apps/showcase/Marketingassets`,
            title: 'sidenav.apps.showcase.Marketingassets',
            icon: '',
            breadcrumb: true,
            submenu: []
          }
        ]
      },]
    },
    { 
      key: 'dashboards-reach',
      path: `${APP_PREFIX_PATH}/dashboards/reach`,
      title: 'sidenav.dashboard.reach',
      icon: NumberOutlined,
      breadcrumb: false,
      submenu: []
    },
    { 
      submenu: [     {
        key: 'apps-analytics',
        path: `${APP_PREFIX_PATH}/apps/analytics`,
        title: 'sidenav.apps.analytics',
        icon: DotChartOutlined,
        breadcrumb: true,
        submenu: [
          {
            key: 'apps-analytics-overview',
            path: `${APP_PREFIX_PATH}/apps/analytics/overview`,
            title: 'sidenav.apps.analytics.overview',
            icon: '',
            breadcrumb: false,
            submenu: []
          },
          {
            key: 'apps-analytics-trustscore',
            path: `${APP_PREFIX_PATH}/apps/analytics/trustscore`,
            title: 'sidenav.apps.analytics.trustscore',
            icon: '',
            breadcrumb: false,
            submenu: []
          },
          {
            key: 'apps-analytics-Servicereviewratings',
            path: `${APP_PREFIX_PATH}/apps/analytics/Servicereviewratings`,
            title: 'sidenav.apps.analytics.Servicereviewratings',
            icon: '',
            breadcrumb: false,
            submenu: []
          },
          {
            key: 'apps-analytics-Invitationconversion',
            path: `${APP_PREFIX_PATH}/apps/analytics/Invitationconversion`,
            title: 'sidenav.apps.analytics.Invitationconversion',
            icon: '',
            breadcrumb: false,
            submenu: []
          },
          {
            key: 'apps-analytics-Organicreach',
            path: `${APP_PREFIX_PATH}/apps/analytics/Organicreach`,
            title: 'sidenav.apps.analytics.Organicreach',
            icon: '',
            breadcrumb: false,
            submenu: []
          },
          {
            key: 'apps-analytics-Benchmark',
            path: `${APP_PREFIX_PATH}/apps/analytics/Benchmark`,
            title: 'sidenav.apps.analytics.Benchmark',
            icon: '',
            breadcrumb: false,
            submenu: []
          }
        ]
      },]
    },
    { 
      key: 'dashboards-getstarted',
      path: `${APP_PREFIX_PATH}/dashboards/getstarted`,
      title: 'sidenav.dashboard.getstarted',
      icon: UnorderedListOutlined,
      breadcrumb: false,
      submenu: []
    },
    { 
      submenu: [     {
        key: 'apps-integrations',
        path: `${APP_PREFIX_PATH}/apps/integrations`,
        title: 'sidenav.apps.integrations',
        icon: AppstoreAddOutlined,
        breadcrumb: true,
        submenu: [
          {
            key: 'apps-integrations-ecommerce',
            path: `${APP_PREFIX_PATH}/apps/integrations/ecommerce`,
            title: 'sidenav.apps.integrations.ecommerce',
            icon: '',
            breadcrumb: false,
            submenu: []
          },
          {
            key: 'apps-integrations-payment',
            path: `${APP_PREFIX_PATH}/apps/integrations/payment`,
            title: 'sidenav.apps.integrations.payment',
            icon: '',
            breadcrumb: false,
            submenu: []
          },
          {
            key: 'apps-integrations-Developers',
            path: `${APP_PREFIX_PATH}/apps/integrations/Developers`,
            title: 'sidenav.apps.integrations.Developers',
            icon: '',
            breadcrumb: false,
            submenu: []
          },
          {
            key: 'apps-integrations-Marketing',
            path: `${APP_PREFIX_PATH}/apps/integrations/Marketing`,
            title: 'sidenav.apps.integrations.Marketing',
            icon: '',
            breadcrumb: false,
            submenu: []
          },
          {
            key: 'apps-integrations-Customersupport',
            path: `${APP_PREFIX_PATH}/apps/integrations/Customersupport`,
            title: 'sidenav.apps.integrations.Customersupport',
            icon: '',
            breadcrumb: false,
            submenu: []
          },
          {
            key: 'apps-integrations-Labs',
            path: `${APP_PREFIX_PATH}/apps/integrations/Labs`,
            title: 'sidenav.apps.integrations.Labs',
            icon: '',
            breadcrumb: false,
            submenu: []
          },
        ]
      },]
    },
    { 
      key: 'dashboards-settings',
      path: `${APP_PREFIX_PATH}/dashboards/settings`,
      title: 'sidenav.dashboard.settings',
      icon: SettingOutlined,
      breadcrumb: false,
      submenu: []
    },
  ]


// const appsNavTree = [{
//   key: 'apps',
//   path: `${APP_PREFIX_PATH}/apps`,
//   title: 'sidenav.apps',
//   icon: AppstoreOutlined,
//   breadcrumb: false,
//   submenu: [
//       {
//       key: 'apps-project',
//       path: `${APP_PREFIX_PATH}/apps/project`,
//       title: 'sidenav.apps.project',
//       icon: BulbOutlined,
//       breadcrumb: true,
//       submenu: [
//         {
//           key: 'apps-project-list',
//           path: `${APP_PREFIX_PATH}/apps/project/list`,
//           title: 'sidenav.apps.project.list',
//           icon: '',
//           breadcrumb: false,
//           submenu: []
//         },
//         {
//           key: 'apps-project-scrumboard',
//           path: `${APP_PREFIX_PATH}/apps/project/scrumboard`,
//           title: 'sidenav.apps.project.scrumboard',
//           icon: '',
//           breadcrumb: false,
//           submenu: []
//         }
//       ]
//     },
//     {
//       key: 'apps-ecommerce',
//       path: `${APP_PREFIX_PATH}/apps/ecommerce`,
//       title: 'sidenav.apps.ecommerce',
//       icon: ShoppingCartOutlined,
//       breadcrumb: true,
//       submenu: [
//         {
//           key: 'apps-ecommerce-productList',
//           path: `${APP_PREFIX_PATH}/apps/ecommerce/product-list`,
//           title: 'sidenav.apps.ecommerce.productList',
//           icon: '',
//           breadcrumb: true,
//           submenu: []
//         },
//         {
//           key: 'apps-ecommerce-addProduct',
//           path: `${APP_PREFIX_PATH}/apps/ecommerce/add-product`,
//           title: 'sidenav.apps.ecommerce.addProduct',
//           icon: '',
//           breadcrumb: false,
//           submenu: []
//         },
//         {
//           key: 'apps-ecommerce-editProduct',
//           path: `${APP_PREFIX_PATH}/apps/ecommerce/edit-product/12`,
//           title: 'sidenav.apps.ecommerce.editProduct',
//           icon: '',
//           breadcrumb: false,
//           submenu: []
//         },
//         {
//           key: 'apps-ecommerce-orders',
//           path: `${APP_PREFIX_PATH}/apps/ecommerce/orders`,
//           title: 'sidenav.apps.ecommerce.orders',
//           icon: '',
//           breadcrumb: false,
//           submenu: []
//         }
//       ]
//     }
//   ]
// }]

// const componentsNavTree = [
//   {
//     key: 'components',
//     path: `${APP_PREFIX_PATH}/components`,
//     title: 'sidenav.components',
//     icon: AntDesignOutlined,
//     breadcrumb: true,
//     submenu: [
//       {
//         key: 'components-general',
//         path: `${APP_PREFIX_PATH}/components/general`,
//         title: 'sidenav.components.general',
//         icon: InfoCircleOutlined,
//         breadcrumb: true,
//         submenu: [
//           {
//             key: 'components-general-button',
//             path: `${APP_PREFIX_PATH}/components/general/button`,
//             title: 'sidenav.components.general.button',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           },
//           {
//             key: 'components-general-icon',
//             path: `${APP_PREFIX_PATH}/components/general/icon`,
//             title: 'sidenav.components.general.icon',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           },
//           {
//             key: 'components-general-typography',
//             path: `${APP_PREFIX_PATH}/components/general/typography`,
//             title: 'sidenav.components.general.typography',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           }
//         ]
//       },
//       {
//         key: 'components-layout',
//         path: `${APP_PREFIX_PATH}/components/layout`,
//         title: 'sidenav.components.layout',
//         icon: LayoutOutlined,
//         breadcrumb: true,
//         submenu: [
//           {
//             key: 'components-layout-grid',
//             path: `${APP_PREFIX_PATH}/components/layout/grid`,
//             title: 'sidenav.components.layout.grid',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           },
//           {
//             key: 'components-layout-layout',
//             path: `${APP_PREFIX_PATH}/components/layout/layout`,
//             title: 'sidenav.components.layout.layout',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           }
//         ]
//       },
//       {
//         key: 'components-navigation',
//         path: `${APP_PREFIX_PATH}/components/navigation`,
//         title: 'sidenav.components.navigation',
//         icon: CompassOutlined,
//         breadcrumb: true,
//         submenu: [
//           {
//             key: 'components-navigation-affix',
//             path: `${APP_PREFIX_PATH}/components/navigation/affix`,
//             title: 'sidenav.components.navigation.affix',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           },
//           {
//             key: 'components-navigation-breadcrumb',
//             path: `${APP_PREFIX_PATH}/components/navigation/breadcrumb`,
//             title: 'sidenav.components.navigation.breadcrumb',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           },
//           {
//             key: 'components-navigation-dropdown',
//             path: `${APP_PREFIX_PATH}/components/navigation/dropdown`,
//             title: 'sidenav.components.navigation.dropdown',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           },
//           {
//             key: 'components-navigation-menu',
//             path: `${APP_PREFIX_PATH}/components/navigation/menu`,
//             title: 'sidenav.components.navigation.menu',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           },
//           {
//             key: 'components-navigation-pagination',
//             path: `${APP_PREFIX_PATH}/components/navigation/pagination`,
//             title: 'sidenav.components.navigation.pagination',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           },
//           {
//             key: 'components-navigation-page-header',
//             path: `${APP_PREFIX_PATH}/components/navigation/page-header`,
//             title: 'sidenav.components.navigation.pageHeader',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           },
//           {
//             key: 'components-navigation-steps',
//             path: `${APP_PREFIX_PATH}/components/navigation/steps`,
//             title: 'sidenav.components.navigation.steps',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           }
//         ]
//       },
//       {
//         key: 'components-data-entry',
//         path: `${APP_PREFIX_PATH}/components/data-entry`,
//         title: 'sidenav.components.dataEntry',
//         icon: FileDoneOutlined,
//         breadcrumb: true,
//         submenu: [
//           {
//             key: 'components-data-entry-auto-complete',
//             path: `${APP_PREFIX_PATH}/components/data-entry/auto-complete`,
//             title: 'sidenav.components.dataEntry.autoComplete',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           },
//           {
//             key: 'components-data-entry-checkbox',
//             path: `${APP_PREFIX_PATH}/components/data-entry/checkbox`,
//             title: 'sidenav.components.dataEntry.checkbox',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           },
//           {
//             key: 'components-data-entry-cascader',
//             path: `${APP_PREFIX_PATH}/components/data-entry/cascader`,
//             title: 'sidenav.components.dataEntry.cascader',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           },
//           {
//             key: 'components-data-entry-date-picker',
//             path: `${APP_PREFIX_PATH}/components/data-entry/date-picker`,
//             title: 'sidenav.components.dataEntry.datePicker',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           },
//           {
//             key: 'components-data-entry-form',
//             path: `${APP_PREFIX_PATH}/components/data-entry/form`,
//             title: 'sidenav.components.dataEntry.form',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           },
//           {
//             key: 'components-data-entry-input-number',
//             path: `${APP_PREFIX_PATH}/components/data-entry/input-number`,
//             title: 'sidenav.components.dataEntry.inputNumber',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           },
//           {
//             key: 'components-data-entry-input',
//             path: `${APP_PREFIX_PATH}/components/data-entry/input`,
//             title: 'sidenav.components.dataEntry.input',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           },
//           {
//             key: 'components-data-entry-mentions',
//             path: `${APP_PREFIX_PATH}/components/data-entry/mentions`,
//             title: 'sidenav.components.dataEntry.mentions',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           },
//           {
//             key: 'components-data-entry-rate',
//             path: `${APP_PREFIX_PATH}/components/data-entry/rate`,
//             title: 'sidenav.components.dataEntry.rate',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           },
//           {
//             key: 'components-data-entry-radio',
//             path: `${APP_PREFIX_PATH}/components/data-entry/radio`,
//             title: 'sidenav.components.dataEntry.radio',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           },
//           {
//             key: 'components-data-entry-switch',
//             path: `${APP_PREFIX_PATH}/components/data-entry/switch`,
//             title: 'sidenav.components.dataEntry.switch',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           },
//           {
//             key: 'components-data-entry-slider',
//             path: `${APP_PREFIX_PATH}/components/data-entry/slider`,
//             title: 'sidenav.components.dataEntry.slider',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           },
//           {
//             key: 'components-data-entry-select',
//             path: `${APP_PREFIX_PATH}/components/data-entry/select`,
//             title: 'sidenav.components.dataEntry.select',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           },
//           {
//             key: 'components-data-entry-tree-select',
//             path: `${APP_PREFIX_PATH}/components/data-entry/tree-select`,
//             title: 'sidenav.components.dataEntry.treeSelect',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           },
//           {
//             key: 'components-data-entry-transfer',
//             path: `${APP_PREFIX_PATH}/components/data-entry/transfer`,
//             title: 'sidenav.components.dataEntry.transfer',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           },
//           {
//             key: 'components-data-entry-time-picker',
//             path: `${APP_PREFIX_PATH}/components/data-entry/time-picker`,
//             title: 'sidenav.components.dataEntry.timePicker',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           },
//           {
//             key: 'components-data-entry-upload',
//             path: `${APP_PREFIX_PATH}/components/data-entry/upload`,
//             title: 'sidenav.components.dataEntry.upload',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           },
//         ]
//       },
//       {
//         key: 'components-data-display',
//         path: `${APP_PREFIX_PATH}/components/data-display`,
//         title: 'sidenav.components.dataDisplay',
//         icon: DesktopOutlined,
//         breadcrumb: true,
//         submenu: [
//           {
//             key: 'components-data-display-avatar',
//             path: `${APP_PREFIX_PATH}/components/data-display/avatar`,
//             title: 'sidenav.components.dataDisplay.avatar',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           },
//           {
//             key: 'components-data-display-badge',
//             path: `${APP_PREFIX_PATH}/components/data-display/badge`,
//             title: 'sidenav.components.dataDisplay.badge',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           },
//           {
//             key: 'components-data-display-comment',
//             path: `${APP_PREFIX_PATH}/components/data-display/comment`,
//             title: 'sidenav.components.dataDisplay.comment',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           },
//           {
//             key: 'components-data-display-collapse',
//             path: `${APP_PREFIX_PATH}/components/data-display/collapse`,
//             title: 'sidenav.components.dataDisplay.collapse',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           },
//           {
//             key: 'components-data-display-carousel',
//             path: `${APP_PREFIX_PATH}/components/data-display/carousel`,
//             title: 'sidenav.components.dataDisplay.carousel',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           },
//           {
//             key: 'components-data-display-card',
//             path: `${APP_PREFIX_PATH}/components/data-display/card`,
//             title: 'sidenav.components.dataDisplay.card',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           },
//           {
//             key: 'components-data-display-calendar',
//             path: `${APP_PREFIX_PATH}/components/data-display/calendar`,
//             title: 'sidenav.components.dataDisplay.calendar',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           },
//           {
//             key: 'components-data-display-descriptions',
//             path: `${APP_PREFIX_PATH}/components/data-display/descriptions`,
//             title: 'sidenav.components.dataDisplay.descriptions',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           },
//           {
//             key: 'components-data-display-empty',
//             path: `${APP_PREFIX_PATH}/components/data-display/empty`,
//             title: 'sidenav.components.dataDisplay.empty',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           },
//           {
//             key: 'components-data-display-list',
//             path: `${APP_PREFIX_PATH}/components/data-display/list`,
//             title: 'sidenav.components.dataDisplay.list',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           },
//           {
//             key: 'components-data-display-popover',
//             path: `${APP_PREFIX_PATH}/components/data-display/popover`,
//             title: 'sidenav.components.dataDisplay.popover',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           },
//           {
//             key: 'components-data-display-statistic',
//             path: `${APP_PREFIX_PATH}/components/data-display/statistic`,
//             title: 'sidenav.components.dataDisplay.statistic',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           },
//           {
//             key: 'components-data-display-tree',
//             path: `${APP_PREFIX_PATH}/components/data-display/tree`,
//             title: 'sidenav.components.dataDisplay.tree',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           },
//           {
//             key: 'components-data-display-tooltip',
//             path: `${APP_PREFIX_PATH}/components/data-display/tooltip`,
//             title: 'sidenav.components.dataDisplay.tooltip',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           },
//           {
//             key: 'components-data-display-timeline',
//             path: `${APP_PREFIX_PATH}/components/data-display/timeline`,
//             title: 'sidenav.components.dataDisplay.timeline',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           },
//           {
//             key: 'components-data-display-tag',
//             path: `${APP_PREFIX_PATH}/components/data-display/tag`,
//             title: 'sidenav.components.dataDisplay.tag',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           },
//           {
//             key: 'components-data-display-tabs',
//             path: `${APP_PREFIX_PATH}/components/data-display/tabs`,
//             title: 'sidenav.components.dataDisplay.tabs',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           },
//           {
//             key: 'components-data-display-table',
//             path: `${APP_PREFIX_PATH}/components/data-display/table`,
//             title: 'sidenav.components.dataDisplay.table',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           },
//         ]
//       },
//       {
//         key: 'components-feedback',
//         path: `${APP_PREFIX_PATH}/components/feedback`,
//         title: 'sidenav.components.feedback',
//         icon: CommentOutlined,
//         breadcrumb: true,
//         submenu: [
//           {
//             key: 'components-feedback-alert',
//             path: `${APP_PREFIX_PATH}/components/feedback/alert`,
//             title: 'sidenav.components.feedback.alert',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           },
//           {
//             key: 'components-feedback-drawer',
//             path: `${APP_PREFIX_PATH}/components/feedback/drawer`,
//             title: 'sidenav.components.feedback.drawer',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           },
//           {
//             key: 'components-feedback-modal',
//             path: `${APP_PREFIX_PATH}/components/feedback/modal`,
//             title: 'sidenav.components.feedback.modal',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           },
//           {
//             key: 'components-feedback-message',
//             path: `${APP_PREFIX_PATH}/components/feedback/message`,
//             title: 'sidenav.components.feedback.message',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           },
//           {
//             key: 'components-feedback-notification',
//             path: `${APP_PREFIX_PATH}/components/feedback/notification`,
//             title: 'sidenav.components.feedback.notification',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           },
//           {
//             key: 'components-feedback-progress',
//             path: `${APP_PREFIX_PATH}/components/feedback/progress`,
//             title: 'sidenav.components.feedback.progress',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           },
//           {
//             key: 'components-feedback-popconfirm',
//             path: `${APP_PREFIX_PATH}/components/feedback/popconfirm`,
//             title: 'sidenav.components.feedback.popconfirm',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           },
//           {
//             key: 'components-feedback-result',
//             path: `${APP_PREFIX_PATH}/components/feedback/result`,
//             title: 'sidenav.components.feedback.result',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           },
//           {
//             key: 'components-feedback-spin',
//             path: `${APP_PREFIX_PATH}/components/feedback/spin`,
//             title: 'sidenav.components.feedback.spin',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           },
//           {
//             key: 'components-feedback-skeleton',
//             path: `${APP_PREFIX_PATH}/components/feedback/skeleton`,
//             title: 'sidenav.components.feedback.skeleton',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           }
//         ]
//       },
//       {
//         key: 'components-other',
//         path: `${APP_PREFIX_PATH}/components/other`,
//         title: 'sidenav.components.other',
//         icon: RobotOutlined,
//         breadcrumb: true,
//         submenu: [
//           {
//             key: 'components-other-anchor',
//             path: `${APP_PREFIX_PATH}/components/other/anchor`,
//             title: 'sidenav.components.other.anchor',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           },
//           {
//             key: 'components-other-backtop',
//             path: `${APP_PREFIX_PATH}/components/other/backtop`,
//             title: 'sidenav.components.other.backtop',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           },
//           {
//             key: 'components-other-config-provider',
//             path: `${APP_PREFIX_PATH}/components/other/config-provider`,
//             title: 'sidenav.components.other.configProvider',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           },
//           {
//             key: 'components-other-divider',
//             path: `${APP_PREFIX_PATH}/components/other/divider`,
//             title: 'sidenav.components.other.divider',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           }
//         ]
//       },
//       {
//         key: 'components-charts',
//         path: `${APP_PREFIX_PATH}/components/charts`,
//         title: 'sidenav.charts',
//         icon: PieChartOutlined,
//         breadcrumb: true,
//         submenu: [
//           {
//             key: 'components-charts-apex',
//             path: `${APP_PREFIX_PATH}/components/charts/apex-charts`,
//             title: 'sidenav.charts.apex',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           },
//           {
//             key: 'components-charts-chartjs',
//             path: `${APP_PREFIX_PATH}/components/charts/chartjs`,
//             title: 'sidenav.charts.chartjs',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           }
//         ]
//       },
//       {
//         key: 'components-maps',
//         path: `${APP_PREFIX_PATH}/components/maps`,
//         title: 'sidenav.maps',
//         icon: EnvironmentOutlined,
//         breadcrumb: true,
//         submenu: [
//           {
//             key: 'components-maps-google',
//             path: `${APP_PREFIX_PATH}/components/maps/google-map`,
//             title: 'sidenav.maps.google',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           },
//           {
//             key: 'components-maps-simple',
//             path: `${APP_PREFIX_PATH}/components/maps/simple-map`,
//             title: 'sidenav.maps.simple',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           }
//         ]
//       }
//     ]
//   }
// ]

// const docsNavTree = [{
//   key: 'docs',
//   path: `${APP_PREFIX_PATH}/docs`,
//   title: 'sidenav.docs',
//   icon: BookOutlined,
//   breadcrumb: false,
//   submenu: [
//     {
//       key: 'docs-documentation',
//       path: `${APP_PREFIX_PATH}/docs/documentation`,
//       title: 'sidenav.docs.documentation',
//       icon: FileUnknownOutlined,
//       breadcrumb: false,
//       submenu: []
//     },
//     {
//       key: 'docs-changelog',
//       path: `${APP_PREFIX_PATH}/docs/documentation/changelog`,
//       title: 'sidenav.docs.changelog',
//       icon: ProfileOutlined,
//       breadcrumb: false,
//       submenu: []
//     }
//   ]
// }]

const navigationConfig = [
  ...dashBoardNavTree,
  // ...appsNavTree,
  // ...componentsNavTree,
  // ...extraNavTree,
  // ...docsNavTree
]

export default navigationConfig;
