
import React, { useState, useEffect, useMemo } from 'react';
import {
    CButton,
    CModal,
    CModalHeader,
    CModalTitle,
    CModalBody,
    CModalFooter,
    CForm,
    CCol,
    CFormLabel,
    CFormFeedback,
    CFormInput,
    CFormSelect
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cilPen, cilPlus } from '@coreui/icons';
import { settingsProviderCalendars, settingsProviders } from 'src/services/SupperSettings';
import PropTypes from 'prop-types';
import i18n from 'src/i18n';

const initialProviderCalendarstate = {
    start: '',
    end: '',

};


const ProviderCalendarsC = ({ refresh, selectedProviderCalendars }) => {
    const [visible, setVisible] = useState(false);
    const [validated, setValidated] = useState(false);
    const [isUpdateMode, setIsUpdateMode] = useState(false);
    const [listProviders, setListProviders] = useState([]);

    const [ProviderCalendar, setFormdata] = useState(initialProviderCalendarstate);

    useEffect(() => {
        setIsUpdateMode(!!selectedProviderCalendars);
        setFormdata(selectedProviderCalendars || initialProviderCalendarstate);
    }, [selectedProviderCalendars]);

    const handleAddOrUpdate = async () => {
        const result = isUpdateMode
            ? await settingsProviderCalendars.updateProviderCalendar(ProviderCalendar, ProviderCalendar.id)
            : await settingsProviderCalendars.addProviderCalendar(ProviderCalendar);

        if (result) {
            setVisible(false);
            setValidated(false);
            setIsUpdateMode(false);
            setFormdata(initialProviderCalendarstate);
            refresh();
        }
    };
    const fetchProviders = async () => {
        try {
            const list = await settingsProviders.getProviders();
            if (list) {
                setListProviders(list?.data);
                setVisible(!visible)
            }
        } catch (error) {
            console.error('Error fetching providers:', error);
        }
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;

        if (!form.checkValidity()) {
            event.stopPropagation();
        }
        setValidated(true);

        if (form.checkValidity()) {
            handleAddOrUpdate();
        }
    };

    const modalTitle = useMemo(() => (isUpdateMode ? i18n.t('updateProviderCalendarTitle') : i18n.t('addProviderCalendarTitle')), [isUpdateMode]);

    return (
        <>
            <CButton color={isUpdateMode ? 'secondary' : 'primary'} onClick={() => fetchProviders()}>
                <CIcon icon={isUpdateMode ? cilPen : cilPlus} />
            </CButton>

            <CModal
                alignment="center"
                visible={visible}
                onClose={() => setVisible(false)}
                aria-labelledby="VerticallyCenteredExample"
                size="xl"
            >
                <CModalHeader onClose={() => setVisible(false)}>
                    <CModalTitle id="LiveDemoExampleLabel">{modalTitle}</CModalTitle>
                </CModalHeader>
                <CModalBody>
                    <CForm
                        className="row g-3 needs-validation"
                        noValidate
                        validated={validated}
                        onSubmit={handleSubmit}
                    >

                        <CCol md={12} className="position-relative">
                            <CFormLabel htmlFor="providerSelect">{i18n.t('providerInputLabel')}</CFormLabel>
                            <CFormSelect
                                value={ProviderCalendar.providersId}
                                onChange={(e) => setFormdata({ ...ProviderCalendar, providersId: e.target.value })}
                                id="providerSelect"
                                required
                            >
                                <option value="">{i18n.t('selectProviderPlaceholder')}</option>
                                {listProviders?.map((provider) => (
                                    <option key={provider.id} value={provider.id}>
                                        {provider.username}
                                    </option>
                                ))}
                            </CFormSelect>
                            <CFormFeedback invalid>
                                {i18n.t('requiredProviderField')}
                            </CFormFeedback>
                        </CCol>
                        <CCol md={6} className="position-relative">
                            <CFormLabel htmlFor="startInput">{i18n.t('startInputLabel')}</CFormLabel>
                            <CFormInput
                                value={ProviderCalendar.start}
                                onChange={(e) => setFormdata({ ...ProviderCalendar, start: e.target.value })}
                                type="datetime-local"
                                id="startInput"
                                required
                            />
                            <CFormFeedback tooltip invalid>
                                {i18n.t('requiredStartField')}
                            </CFormFeedback>
                        </CCol>

                        <CCol md={6} className="position-relative">
                            <CFormLabel htmlFor="endInput">{i18n.t('endInputLabel')}</CFormLabel>
                            <CFormInput
                                value={ProviderCalendar.end}
                                onChange={(e) => setFormdata({ ...ProviderCalendar, end: e.target.value })}
                                type="datetime-local"
                                id="endInput"
                                required
                            />
                            <CFormFeedback tooltip invalid>
                                {i18n.t('requiredEndField')}
                            </CFormFeedback>
                        </CCol>
                        <CModalFooter>
                            <CButton color="secondary" onClick={() => setVisible(false)}>
                                {i18n.t('closeButton')}
                            </CButton>
                            <CButton color="primary" type="submit" >{i18n.t('saveButton')}</CButton>
                        </CModalFooter>
                    </CForm>
                </CModalBody>
            </CModal>
        </>
    );
};

ProviderCalendarsC.propTypes = {
    refresh: PropTypes.func.isRequired,
    selectedProviderCalendars: PropTypes.object,
};

export default ProviderCalendarsC;

