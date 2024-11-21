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
import { cilLinkBroken } from '@coreui/icons';
import { settingsProfilesIds } from 'src/services/SupperSettings';
import PropTypes from 'prop-types';
import i18n from 'src/i18n';

// Nouvel état initial
const initialProfilesIdState = {
    attr_a: '',
    attr_b: '',
    attr_c: '',
    attr_d: '',
    attr_e: '',
    attr_f: '',
    crypted: '',
    activeDate: '',
};

const ProfilesIdsCrypted = ({ refresh, selectedProfilesIds }) => {
    const [visible, setVisible] = useState(false);
    const [validated, setValidated] = useState(false);
    const [ProfilesIds, setFormdata] = useState(initialProfilesIdState);
    const [ProfilesIdSelected, setProfilesIdSelected] = useState(initialProfilesIdState);

    useEffect(() => {
        setFormdata(initialProfilesIdState);
        setProfilesIdSelected(selectedProfilesIds);

    }, [selectedProfilesIds]);

    const handleAddOrUpdate = async () => {
        const result = await settingsProfilesIds.addProfilesIdCryptes({...ProfilesIds,profilesId:ProfilesIdSelected.id}, ProfilesIdSelected.id);

        if (result) {
            setVisible(false);
            setValidated(false);
            setFormdata(initialProfilesIdState);
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

    return (
        <>
            <CButton style={{ backgroundColor: '#dcf714' }} onClick={() => setVisible(!visible)}>
                <CIcon icon={cilLinkBroken} />
            </CButton>

            <CModal
                alignment="center"
                visible={visible}
                onClose={() => setVisible(false)}
                aria-labelledby="VerticallyCenteredExample"
                size="xl"
            >
                <CModalHeader onClose={() => setVisible(false)}>
                    <CModalTitle id="LiveDemoExampleLabel">{i18n.t('updateProfilesIdsTitleCrpted')}</CModalTitle>
                </CModalHeader>
                <CModalBody>
                    <CForm
                        className="row g-3 needs-validation"
                        noValidate
                        validated={validated}
                        onSubmit={handleSubmit}
                    >
                        {/* Dynamique selon les champs */}
                        {Object.keys(initialProfilesIdState).map((key, index) => (
                            <CCol md={6} className="position-relative" key={index}>
                                <CFormLabel htmlFor={key}>{i18n.t(`${key}Label`)}</CFormLabel>
                                <CFormInput
                                    value={ProfilesIds[key]}
                                    onChange={(e) => setFormdata({ ...ProfilesIds, [key]: e.target.value })}
                                    type={key === 'crypted' || key === 'activeDate' ? 'date' : 'text'}
                                    id={key}
                                    required
                                />
                                <CFormFeedback tooltip invalid>
                                    {i18n.t(`required${key}Field`)}
                                </CFormFeedback>
                            </CCol>
                        ))}

                        <CModalFooter>
                            <CButton color="secondary" onClick={() => setVisible(false)}>
                                {i18n.t('closeButton')}
                            </CButton>
                            <CButton color="primary" type="submit">{i18n.t('saveButton')}</CButton>
                        </CModalFooter>
                    </CForm>
                </CModalBody>
            </CModal>
        </>
    );
};

ProfilesIdsCrypted.propTypes = {
    refresh: PropTypes.func.isRequired,
    selectedProfilesIds: PropTypes.object,
};

export default ProfilesIdsCrypted;
