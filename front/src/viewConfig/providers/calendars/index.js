
import React, { useEffect, useState } from 'react';
import {
    CRow,
    CCol,
    CCard,
    CCardHeader,
    CCardBody,
} from '@coreui/react';
import { settingsProviderCalendars } from 'src/services/SupperSettings/index';
import GenericTable from 'src/components/Generic.Table';
import ProviderCalendarsC from './ProviderCalendar'
import StatusRow from 'src/components/module.common/status.row';
import i18n from 'src/i18n';
const ProviderCalendars = () => {
    const [List, setList] = useState([]);

    const fetchProviderCalendars = async () => {
        try {
            const list = await settingsProviderCalendars.getProviderCalendar();
            if (list) {
                setList(list?.data);
            }
        } catch (error) {
            console.error('Error fetching admin list:', error);
        }
    };
    useEffect(() => {
        fetchProviderCalendars();
    }, []);

    const columns = [
        //{ label: '#', field: 'index' },
        { label: i18n.t('providerInputLabel'), field: 'providersId' },
        { label: i18n.t('startInputLabel'), field: 'start' },
        { label: i18n.t('endInputLabel'), field: 'end' },

        {
            label: i18n.t('actionLabel'),
            field: 'actions',
            render: (item) =>
            (<>

                <ProviderCalendarsC refresh={() => fetchProviderCalendars()} selectedProviderCalendars={item} />
                <StatusRow refresh={() => fetchProviderCalendars()} status={item.status} data={"providercalendar"} entityName={i18n.t('PaymentCardsList')} id={item.id} />
            </>)
        },
    ];

    return (
        <CCard className="mb-4">
            <CCardHeader>
                <CRow className="align-items-center">
                    <CCol md="6" xs="12">
                        <strong>   {i18n.t('ProviderCalendarsTableTitle')}</strong>
                    </CCol>
                    <CCol md="6" xs="12" className="text-md-end mt-md-0 mt-3">
                        <ProviderCalendarsC refresh={() => fetchProviderCalendars()} />
                    </CCol>
                </CRow>
            </CCardHeader>
            <CCardBody>
                <CRow>
                    <CCol xs="12">
                        <CCard className="mb-4">
                            <CCardHeader>
                                <strong>{i18n.t('ProviderCalendarsList')}</strong>
                            </CCardHeader>
                            <CCardBody>
                                <GenericTable columns={columns} data={List} />
                            </CCardBody>
                        </CCard>
                    </CCol>
                </CRow>
            </CCardBody>
        </CCard>
    );
};

export default ProviderCalendars;

