import React from 'react';
import {
    CRow,
    CCol,
    CCard,
    CCardHeader,
    CCardBody
} from '@coreui/react';
import i18n from 'src/i18n';
const ReportingProvider = () => {
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
                <CRow>
                    <CCol xs={12} md={6} xl={6}>
                        config dashboard
                    </CCol>
                    <CCol xs={12} md={6} xl={6}>
                        config dashboard details
                        </CCol>
                </CRow>

            </CCardBody>
        </CCard>
    );
};

export default ReportingProvider;
