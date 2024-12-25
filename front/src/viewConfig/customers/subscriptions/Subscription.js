
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
import { settingsSubscriptions } from 'src/services/SupperSettings';
import { settingsCustomers } from 'src/services/SupperSettings/index';
import { settingsProfilesIds } from 'src/services/SupperSettings/index';
import PropTypes from 'prop-types';
import i18n from 'src/i18n';

const initialSubscriptionstate = {
    note: ''
};


const SubscriptionsC = ({ refresh, selectedSubscriptions }) => {
    const [visible, setVisible] = useState(false);
    const [validated, setValidated] = useState(false);
    const [isUpdateMode, setIsUpdateMode] = useState(false);
    const [Listcustomers, setListcustomers] = useState([]);
    const [ListProfiles, setListProfiles] = useState([]);
    const [Subscription, setFormdata] = useState(initialSubscriptionstate);

    useEffect(() => {
        setIsUpdateMode(!!selectedSubscriptions);
        setFormdata(selectedSubscriptions || initialSubscriptionstate);
    }, [selectedSubscriptions]);

    const handleAddOrUpdate = async () => {
        const result = isUpdateMode
            ? await settingsSubscriptions.updateSubscription(Subscription, Subscription.id)
            : await settingsSubscriptions.addSubscription(Subscription);

        if (result) {
            setVisible(false);
            setValidated(false);
            setIsUpdateMode(false);
            setFormdata(initialSubscriptionstate);
            refresh();
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


    const fetchCustomers = async () => {
        try {
            const list = await settingsCustomers.getCustomers();
            if (list) {
                setListcustomers(list?.data);
            }
        } catch (error) {
            console.error('Error fetching customers list:', error);
        }
    };

    const fetchProfilesIds = async () => {
        try {
            const list = await settingsProfilesIds.getProfilesIds();
            if (list) {
                setListProfiles(list?.data);
            }
        } catch (error) {
            console.error('Error fetching profiles list:', error);
        }
    };

    // Use Promise.all to run both fetch functions concurrently
    const fetchData = async () => {
        try {
            await Promise.all([fetchCustomers(), fetchProfilesIds()]);
            setVisible(!visible)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };



    const modalTitle = useMemo(() => (isUpdateMode ? i18n.t('updateSubscriptionTitle') : i18n.t('addSubscriptionTitle')), [isUpdateMode]);

    return (
        <>

            <CButton color={isUpdateMode ? 'secondary' : 'primary'} onClick={() => fetchData()}>
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
                                 <CCol md={6} className="position-relative">
                            <CFormLabel htmlFor="ProfileSelect">{i18n.t('ProfileInputLabel')}</CFormLabel>
                            <CFormSelect
                                value={Subscription.profileId}
                                onChange={(e) => setFormdata({ ...Subscription, profileId: e.target.value })}
                                id="ProfileSelect"
                                required
                            >
                                <option value="">{i18n.t('selectprofileIdPlaceholder')}</option>
                                {ListProfiles?.map((Profile) => (
                                    <option key={Profile.id} value={Profile.id}>
                                        
                                        {Profile.iccid}:{Profile.lpa_esim}
                                    </option>
                                ))}
                            </CFormSelect>
                            <CFormFeedback invalid>
                                {i18n.t('requiredprofileIdField')}
                            </CFormFeedback>
                        </CCol>
                        <CCol md={6} className="position-relative">
                            <CFormLabel htmlFor="customerIdSelect">{i18n.t('customerIdInputLabel')}</CFormLabel>
                            <CFormSelect
                                value={Subscription.customerId}
                                onChange={(e) => setFormdata({ ...Subscription, customerId: e.target.value })}
                                id="customerIdSelect"
                                disabled
                            >
                                <option value="">{i18n.t('selectcustomerIdPlaceholder')}</option>
                                {Listcustomers?.map((customer) => (
                                    <option key={customer.id} value={customer.id}>
                                        {customer.cin} : {customer.username}
                                    </option>
                                ))}
                            </CFormSelect>
                            <CFormFeedback invalid>
                                {i18n.t('requiredcustomerField')}
                            </CFormFeedback>
                        </CCol>
                      
                        <CCol md={12} className="position-relative">
                            <CFormLabel htmlFor="validationTooltip03">{i18n.t('noteInputLabel')}</CFormLabel>
                            <CFormInput value={Subscription.note} onChange={(e) => setFormdata({ ...Subscription, note: e.target.value })} type="text" id="validationTooltip03" required />
                            <CFormFeedback tooltip invalid>
                                {i18n.t('requirednoteField')}
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

SubscriptionsC.propTypes = {
    refresh: PropTypes.func.isRequired,
    selectedSubscriptions: PropTypes.object,
};

export default SubscriptionsC;

