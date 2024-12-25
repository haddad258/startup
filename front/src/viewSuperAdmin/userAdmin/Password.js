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
import { settingsUserAdmins } from 'src/services/SupperSettings';
import PropTypes from 'prop-types';
import i18n from 'src/i18n';

const initialUserAdminState = {
    password: '',
    passwordValidation: '',
};

const PasswordAdmin = ({ refresh, selectedUserAdmin }) => {
    const [visible, setVisible] = useState(false);
    const [validated, setValidated] = useState(false);
    const [UserAdmin, setUserAdmin] = useState(initialUserAdminState);
    const [passwordValidationError, setPasswordValidationError] = useState(false);

    useEffect(() => {
        setUserAdmin(initialUserAdminState);
        setPasswordValidationError(false);
        setValidated(false);
    }, [selectedUserAdmin]);

    const handleAddOrUpdate = async () => {
        const result = await settingsUserAdmins.updateUsersAdminPassword(
            { password: UserAdmin.password },
            selectedUserAdmin.id
        );

        if (result) {
            setVisible(false);
            setValidated(false);
            setUserAdmin(initialUserAdminState);
            refresh();
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if(passwordValidationError){
            setPasswordValidationError(true)

        }
        if (!form.checkValidity()) {
            event.stopPropagation();
        }
        setValidated(true);

        if (form.checkValidity() && !passwordValidationError) {
            handleAddOrUpdate();
        }
    };

    const handlePasswordChange = (e) => {
        setUserAdmin({ ...UserAdmin, password: e.target.value });
        setValidated(false);
        setPasswordValidationError(UserAdmin.passwordValidation !== e.target.value);
    };

    const handleConfirmPasswordChange = (e) => {
        const confirmPassword = e.target.value;
        setPasswordValidationError(confirmPassword !== UserAdmin.password);
        setValidated(false);
        setUserAdmin({ ...UserAdmin, passwordValidation: confirmPassword });
    };

    return (
        <>
            <CButton color="warning" onClick={() => setVisible(!visible)}>
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
                    <CModalTitle id="LiveDemoExampleLabel">{i18n.t('updatePasswordTitle')}</CModalTitle>
                </CModalHeader>
                <CModalBody>
                    <CForm
                        className="row g-3 needs-validation"
                        noValidate
                        validated={validated}
                        onSubmit={handleSubmit}
                    >
                        <CCol md={6} className="position-relative">
                            <CFormLabel htmlFor="passwordInput">{i18n.t('passwordInputLabel')}</CFormLabel>
                            <CFormInput
                                value={UserAdmin.password}
                                onChange={handlePasswordChange}
                                type="password"
                                id="passwordInput"
                                required
                                pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
                            />
                            <CFormFeedback tooltip invalid>
                                {i18n.t('requiredPasswordField')} :{i18n.t('passwordMismatchError')}
                            </CFormFeedback>
                        </CCol>

                        <CCol md={6} className="position-relative">
                            <CFormLabel htmlFor="confirmPasswordInput">{i18n.t('confirmPasswordInputLabel')}</CFormLabel>
                            <CFormInput
                                value={UserAdmin.passwordValidation}
                                onChange={handleConfirmPasswordChange}
                                type="password"
                                id="confirmPasswordInput"
                                required
                                pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
                                isInvalid={passwordValidationError}
                            />
                            <CFormFeedback tooltip invalid>
                            {i18n.t('requiressdConfirmPasswordField')}:  {passwordValidationError ? i18n.t('requiredPasswordField') : i18n.t('requiredConfirmPasswordField')}
                            </CFormFeedback>
                        </CCol>
                        <CFormFeedback >
                                {passwordValidationError ? i18n.t('passwordMismatchError') : i18n.t('requiressdConfirmPasswordField')}
                            </CFormFeedback>
                        <CModalFooter>
                            <CButton color="secondary" onClick={() => setVisible(false)}>
                                {i18n.t('closeButton')}
                            </CButton>
                            <CButton disabled={passwordValidationError} color="primary" type="submit">
                                {i18n.t('saveButton')}
                            </CButton>
                        </CModalFooter>
                    </CForm>
                </CModalBody>
            </CModal>
        </>
    );
};

PasswordAdmin.propTypes = {
    refresh: PropTypes.func.isRequired,
    selectedUserAdmin: PropTypes.object,
};

export default PasswordAdmin;
