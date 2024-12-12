const API_URL = "http://195.201.138.202:3005";
const API_URLPublic = API_URL + "/public/";

const Apis = {
  UserLoginAPI: `${API_URL}/api/method/login`,
  api_Dashboard: `${API_URL}/api/method/frappe.desk.query_report.get`,
  Api_RegisterCustomer: `${API_URL}/public/api/customers/config/`,
  api_customers: `${API_URL}/api/resource/Customer`,
  api_articles: `${API_URL}/api/resource/Item`,
  api_articlesBarcode: `${API_URL}/api/method/erpnext.stock.utils.scan_barcode`,
  api_warehouses: `${API_URL}/api/resource/Warehouse`,
  api_suppliers: `${API_URL}/api/resource/Supplier`,
  api_orders: `${API_URL}/api/resource/Sales Order`,
  api_invoices: `${API_URL}/api/resource/Sales Invoice`,
  api_quotations: `${API_URL}/api/resource/Quotation`,
  
  api_payments: `${API_URL}/api/resource/Payment Entry`,
  api_deliverynotes: `${API_URL}/api/resource/Delivery Note`,
  api_stockEntry: `${API_URL}/api/resource/Stock Entry`,


  api_purchaseOrders: `${API_URL}/api/resource/Purchase Order`,
  api_purchaseInvoces: `${API_URL}/api/resource/Purchase Invoice`,



  
  
  




};
export { API_URL, Apis, API_URLPublic };
