import React from 'react';
import {
    CRow,
    CCol,
    CCard,
    CCardHeader,
    CCardBody
} from '@coreui/react';
import i18n from 'src/i18n';
import ReportingDashboardCounting from './dashboard/dashbord.counting';
import HandleError from 'src/components/Handle.Error';
const Reporting = () => {
    return (
        <CCard className="mb-4">
            <CCardHeader>
                <CRow className="align-items-center">
                    <CCol md="6" xs="12">
                        <strong>{i18n.t('reportingMenuTitle')} </strong>
                    </CCol>
                </CRow>
            </CCardHeader>
            <CCardBody>
                <ReportingDashboardCounting />
                <CRow>
                    <CCol xs={12} md={6} xl={6}>
                        other details <HandleError/>
                    </CCol>
                    <CCol xs={12} md={6} xl={6}>
                        other details
                    </CCol>
                </CRow>

            </CCardBody>
        </CCard>
    );
};

export default Reporting;
