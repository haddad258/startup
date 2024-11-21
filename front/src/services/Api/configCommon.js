const API_URL_Common = process.env.REACT_APP_API_URL;
const ApisCommon = {
  api_update_status_row: `${API_URL_Common}/api/common/update/status/rows`,
  api_update_status_rowops: `${API_URL_Common}/api/common/update/status/ops/rows`,
  ///////////////////////////dashboard and KPI//////////////////////////////////:
  api_get_Kpi_countings_tables: `${API_URL_Common}/kpi/dashboard/count/tables/index`,
};


export { API_URL_Common, ApisCommon };