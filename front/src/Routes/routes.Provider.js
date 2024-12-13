import React from 'react'


const ReportingProvider = React.lazy(() => import('src/viewproviders/dashboard'))
const ProviderAdvertisements = React.lazy(() => import('src/viewproviders/advertisements'))
const ProviderPublications = React.lazy(() => import('src/viewproviders/publications'))

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const ProviderArticles = React.lazy(() => import('src/viewproviders/articles'))
const ProviderCustomers = React.lazy(() => import('src/viewproviders/customers'))
const CalendersProviders = React.lazy(() => import('src/viewproviders/calenders'))
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const ProviderOrders = React.lazy(() => import('src/viewproviders/orders'))
const ProviderSubscriptions = React.lazy(() => import('src/viewproviders/subscriptions'))
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const Page404 = React.lazy(() => import('src/Templates/pages/page404/Page404'))

const routeProviders = [
  { path: '/', exact: true, name: 'Home' },

  { path: '/providers/view/applications/reporting', name: 'ReportingProvider', element: ReportingProvider },
  { path: '/providers/view/advertisements/index', name: 'ProviderAdvertisements', element: ProviderAdvertisements },
  { path: '/providers/view/publications/index', name: 'ProviderPublications', element: ProviderPublications },
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  { path: '/providers/view/articles/index', name: 'ProviderArticles', element: ProviderArticles },
  { path: '/providers/view/customers/index', name: 'ProviderCustomers', element: ProviderCustomers },
  { path: '/providers/view/calendar/index', name: 'CalendersProviders', element: CalendersProviders },
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  { path: '/providers/view/orders/index', name: 'ProviderOrders', element: ProviderOrders },
  { path: '/providers/view/subscriptions/index', name: 'ProviderSubscriptions', element: ProviderSubscriptions },

  { path: '/*', name: 'PageNotFound', element: Page404 },
]

export default routeProviders
