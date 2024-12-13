/////////////authentification
require("./Authentification/authentification.api");
require("./src/apis/settings/router/index");//admins privileges
/////////////settings/////////////

require('./src/apis/dashboard/router/index') // Settings Dashboard
require('./src/apis/common.settings/router/index') // Settings common status -filter
require('./src/images.configs') //imageConfig APPS 
///////////////////////////////////
require('./src/apis/config/router/index') // config app data
require('./src/apis/config.orders/router/index')  //orderManagemendts


require('./src/public.api/router/index')  //customers APIs  - Config Public APIs
require('./src/public.api/customers/images.Customers') //Customers Images APIs
// require('./payment/app') //Customers Images APIs



