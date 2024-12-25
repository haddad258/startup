import React, { useState, useEffect } from 'react';
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
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cilLockLocked } from '@coreui/icons';
import { settingsCustomers } from 'src/services/SupperSettings';
import PropTypes from 'prop-types';
import i18n from 'src/i18n';

const initialCustomerState = {
    password: '',
};

const CustomersCridentials = ({ refresh, selectedCustomers }) => {
    const [visible, setVisible] = useState(false);
    const [validated, setValidated] = useState(false);
    const [Customers, setFormData] = useState(initialCustomerState);
    const [error, setError] = useState('');

    useEffect(() => {
        setFormData(initialCustomerState);
    }, [selectedCustomers]);

    const handleAddOrUpdate = async () => {
        const result = await settingsCustomers.updateCustomersCridentials(
            { password: Customers.password },
            selectedCustomers.id
        );

        if (result) {
            setVisible(false);
            setValidated(false);
            setFormData(initialCustomerState);
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

        // Vérification du mot de passe selon le pattern
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if (!passwordPattern.test(Customers.password)) {
            // Réinitialiser le mot de passe et afficher un message d'erreur
            setError(i18n.t('invalidPasswordError'));
            setFormData({ ...Customers, password: '' });
            return;
        }

        if (form.checkValidity()) {
            handleAddOrUpdate();
        }
    };

    return (
        <>
            <CButton color={"warning"} onClick={() => setVisible(!visible)}>
                <CIcon icon={cilLockLocked} />
            </CButton>

            <CModal
                alignment="center"
                visible={visible}
                onClose={() => setVisible(false)}
                aria-labelledby="VerticallyCenteredExample"
                size="xl"
            >
                <CModalHeader onClose={() => setVisible(false)}>
                    <CModalTitle id="LiveDemoExampleLabel">
                        {i18n.t('updateCustomersPaswword')}
                    </CModalTitle>
                </CModalHeader>
                <CModalBody>
                    <CForm
                        className="row g-3 needs-validation"
                        noValidate
                        validated={validated}
                        onSubmit={handleSubmit}
                    >
                        <CCol md={6} className="position-relative">
                            <CFormLabel htmlFor="password">
                                {i18n.t('passwordInputLabel')}
                            </CFormLabel>
                            <CFormInput
                                value={Customers.password}
                                onChange={(e) =>
                                    setFormData({ ...Customers, password: e.target.value })
                                }
                                type="password"
                                id="password"
                                required
                                pattern="^(?=.*[a-z])(?=.*[A-Z]).{6,}$" 
                            />
                            <CFormFeedback tooltip invalid>
                                {i18n.t('requiredPasswordField')}:
                                {i18n.t('requiredPasswordFieldCustomer')}
                            </CFormFeedback>
                            {error && <CFormFeedback invalid>{i18n.t('requiredPasswordFieldCustomer')}</CFormFeedback>}
                        </CCol>

                        <CModalFooter>
                            <CButton color="secondary" onClick={() => setVisible(false)}>
                                {i18n.t('closeButton')}
                            </CButton>
                            <CButton color="primary" type="submit">
                                {i18n.t('saveButton')}
                            </CButton>
                        </CModalFooter>
                    </CForm>
                </CModalBody>
            </CModal>
        </>
    );
};

CustomersCridentials.propTypes = {
    refresh: PropTypes.func.isRequired,
    selectedCustomers: PropTypes.object,
};

export default CustomersCridentials;
