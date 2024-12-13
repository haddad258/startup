
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
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cilPen, cilPlus } from '@coreui/icons';
import { settingsProviderPublications } from 'src/services/provider.API';
import PropTypes from 'prop-types';
import i18n from 'src/i18n';

const initialProviderPublicationstate = {
    name: '',
    description: '',
    appreciation: ''

};


const ProviderPublicationsC = ({ refresh, selectedProviderPublications }) => {
    const [visible, setVisible] = useState(false);
    const [validated, setValidated] = useState(false);
    const [isUpdateMode, setIsUpdateMode] = useState(false);

    const [ProviderPublications, setFormdata] = useState(initialProviderPublicationstate);

    useEffect(() => {
        setIsUpdateMode(!!selectedProviderPublications);
        setFormdata(selectedProviderPublications || initialProviderPublicationstate);
    }, [selectedProviderPublications]);

    const handleAddOrUpdate = async () => {
        const result = isUpdateMode
            ? await settingsProviderPublications.updateProviderPublications(ProviderPublications, ProviderPublications.id)
            : await settingsProviderPublications.addProviderPublications(ProviderPublications);

        if (result) {
            setVisible(false);
            setValidated(false);
            setIsUpdateMode(false);
            setFormdata(initialProviderPublicationstate);
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

    const modalTitle = useMemo(() => (isUpdateMode ? i18n.t('updateProviderPublicationsTitle') : i18n.t('addProviderPublicationsTitle')), [isUpdateMode]);

    return (
        <>
            <CButton color={isUpdateMode ? 'secondary' : 'primary'} onClick={() => setVisible(!visible)}>
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
                            <CFormLabel htmlFor="validationTooltip01">{i18n.t('nameInputLabel')}</CFormLabel>
                            <CFormInput value={ProviderPublications.name} onChange={(e) => setFormdata({ ...ProviderPublications, name: e.target.value })} type="text" id="validationTooltip01" defaultValue="" required />
                            <CFormFeedback tooltip invalid>
                                {i18n.t('requiredNameField')}
                            </CFormFeedback>
                        </CCol>
                        <CCol md={12} className="position-relative">
                            <CFormLabel htmlFor="validationTooltip03">{i18n.t('descriptionInputLabel')}</CFormLabel>
                            <CFormInput value={ProviderPublications.description} onChange={(e) => setFormdata({ ...ProviderPublications, description: e.target.value })} type="title" id="validationTooltip03" required />
                            <CFormFeedback tooltip invalid>
                            {i18n.t('requiredDescriptionField')}
                            </CFormFeedback>
                        </CCol>
                        <CCol md={12} className="position-relative">
                            <CFormLabel htmlFor="validationTooltip03">{i18n.t('appreciationInputLabel')}</CFormLabel>
                            <CFormInput value={ProviderPublications.appreciation} onChange={(e) => setFormdata({ ...ProviderPublications, appreciation: e.target.value })} type="title" id="validationTooltip03" required />
                            <CFormFeedback tooltip invalid>
                            {i18n.t('requiredAppreciationField')}
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

ProviderPublicationsC.propTypes = {
    refresh: PropTypes.func.isRequired,
    selectedProviderPublications: PropTypes.object,
};

export default ProviderPublicationsC;

