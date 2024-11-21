import React, { useEffect, useState } from 'react';
import {
    CRow,
    CCol,
    CCard,
    CCardBody,
} from '@coreui/react';
import { KpiCountingDashboard } from 'src/services/common.settings';
import i18n from 'src/i18n';

const ReportingDashboardCounting = () => {
    //const [list, listurls] = useState([])
    const [List, setList] = useState([]); // Initialize as an object since it's not an array

    const FetchCountings = async () => {
        try {
            const list = await KpiCountingDashboard.getDataCountingsTables();
            if (list?.data) {
                setList(list.data); // Assuming the object is in list.data
            }
        } catch (error) {
            console.error('Error fetching admin list:', error);
        }
    };

    useEffect(() => {
        FetchCountings();
    }, []);

    return (
        <CCard className="mb-4">
            <CCardBody>
                <CRow>
                    <CCol xs="12">
                        <CRow>
                            <CCol xs>
                                <CRow>
                                    <CCol xs={12} md={12} xl={12}>
                                        <CRow>
                                            {/* Map over object entries to get key-value pairs */}
                                            {Object.entries(List).map(([key, value], index) => (
                                                <CCol key={index} xs={3}>
                                                    <div className="border-start border-start-4  py-1 px-3">
                                                        <div className="text-body-secondary text-truncate small" style={{ fontSize: '12px' }}>{i18n.t(key)}</div>
                                                        <div className="fs-5 fw-semibold">{value}</div>
                                                    </div>
                                                    <hr className="mt-0" />
                                                </CCol>

                                            ))}
                                        </CRow>
                                        <hr className="mt-0" />
                                    </CCol>
                                </CRow>
                            </CCol>
                        </CRow>
                    </CCol>
                </CRow>
            </CCardBody>
        </CCard>
    );
};

export default ReportingDashboardCounting;
