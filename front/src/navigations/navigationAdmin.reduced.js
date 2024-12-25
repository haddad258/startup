import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilSpeedometer,
  cilSettings,
} from '@coreui/icons'
import { CNavGroup, CNavItem, /* CNavTitle */ } from '@coreui/react'
import i18n from 'src/i18n'
const _navAdminReduced = [
  {
    component: CNavGroup,
    name: i18n.t('dashboardMenuTitle'),
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: i18n.t('reportingMenuTitle'),
        to: '/supper/view/applications/reporting',
      },
    ],
  },
  {
    component: CNavGroup,
    name: i18n.t('generalSettingsMenuTitle'),
    icon: <CIcon icon={cilSettings} customClassName="nav-icon" />,
    items: [
  
      {
        component: CNavItem,
        name: i18n.t('privilegesMenuTitle'),
        to: '/supper/settings/privilege/users/list',
      },
      {
        component: CNavItem,
        name: i18n.t('usersMenuTitle'),
        to: '/supper/settings/admins/users/list',
      },
    ],
  },
  {
    component: CNavGroup,
    name: i18n.t('SettingsCustomers'),
    icon: <CIcon icon={cilSettings} customClassName="nav-icon" />,
    items: [
  
      {
        component: CNavItem,
        name: i18n.t('CustomersList'),
        to: '/settings/customers',
      },
      {
        component: CNavItem,
        name: i18n.t('customerInfo'),
        to: '/settings/info/customers',
      },
     
      {
        component: CNavItem,
        name: i18n.t('PaymentCardsList'),
        to: '/settings/payments/cards/customers',
      },
      {
        component: CNavItem,
        name: i18n.t('Subscriptions'),
        to: '/settings/subscriptions/customers',
      },
    ],
  },
  
  {
    component: CNavGroup,
    name: i18n.t('settingsApps'),
    icon: <CIcon icon={cilSettings} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: i18n.t('PaymentMode'),
        to: '/settings/payment/mode',
      },
      {
        component: CNavItem,
        name: i18n.t('profilesId'),
        to: '/settings/profiles/list',
      },
      
      {
        component: CNavItem,
        name: i18n.t('Categories'),
        to: '/settings/categories',
      },
      {
        component: CNavItem,
        name: i18n.t('ItemsKits'),
        to: '/settings/itemskits',
      },
      {
        component: CNavItem,
        name: i18n.t('Items'),
        to: '/settings/items',
      },
  
      {
        component: CNavItem,
        name: i18n.t('Brands'),
        to: '/settings/brands',
      },
      {
        component: CNavItem,
        name: i18n.t('articles'),
        to: '/settings/articles',
      },
      {
        component: CNavItem,
        name: i18n.t('advertisements'),
        to: '/settings/advertisements',
      },
    ],
  },

  {
    component: CNavGroup,
    name: i18n.t('SettingsOrders'),
    icon: <CIcon icon={cilSettings} customClassName="nav-icon" />,
    items: [
  
      {
        component: CNavItem,
        name: i18n.t('StatusOrders'),
        to: '/accounts/settings/status/orders',
      },
      {
        component: CNavItem,
        name: i18n.t('ordersList'),
        to: '/accounts/settings/orders',
      },
      {
        component: CNavItem,
        name: i18n.t('TransactionsOrders'),
        to: '/accounts/transactions/details/orders',
      },
    
    ],
  },
]

export default _navAdminReduced
