import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilFilter,
  cilSpeedometer,
} from '@coreui/icons'
import { CNavGroup, CNavItem, /* CNavTitle */ } from '@coreui/react'
import i18n from 'src/i18n'
const _navProvider = [
  {
    component: CNavGroup,
    name: i18n.t('dashboardMenuTitle'),
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: i18n.t('reportingMenuTitle'),
        to: '/providers/view/applications/reporting',
      },
    ],
  },

  {
    component: CNavGroup,
    name: i18n.t('Config TMS'),
    to: '/dashboard',
    icon: <CIcon icon={cilFilter} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: i18n.t('AdvertisementsTitle'),
        to: '/providers/view/advertisements/index',
      },
      {
        component: CNavItem,
        name: i18n.t('ProviderPublicationsTitles'),
        to: '/providers/view/publications/index',
      },
      {
        component: CNavItem,
        name: i18n.t('articlesTitle'),
        to: '/providers/view/articles/index',
      },
      {
        component: CNavItem,
        name: i18n.t('ProviderCustomersTitle'),
        to: '/providers/view/customers/index',
      },



    ],
  },


  {
    component: CNavGroup,
    name: i18n.t('Subscriptions'),
    to: '/dashboard',
    icon: <CIcon icon={cilFilter} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: i18n.t('ProviderOrdersTitle'),
        to: '/providers/view/orders/index',
      },
      {
        component: CNavItem,
        name: i18n.t('ProviderSubscriptionsList'),
        to: '/providers/view/subscriptions/index',
      },



    ],
  },

]

export default _navProvider
