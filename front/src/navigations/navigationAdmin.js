import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilSpeedometer,
  cilSettings,
} from '@coreui/icons'
import { CNavGroup, CNavItem, /* CNavTitle */ } from '@coreui/react'
import i18n from 'src/i18n'
const _navAdmin = [
  {
    component: CNavGroup,
    name: i18n.t('dashboardMenuTitle'),
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: i18n.t('reportingMenuTitle'),
        to: '/supper/reporting',
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
  
 
]

export default _navAdmin
