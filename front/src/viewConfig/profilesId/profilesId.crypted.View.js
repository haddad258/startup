import React, { useState,  } from 'react';
import {
    CButton,
    CModal,
    CModalHeader,
    CModalTitle,
    CModalBody,
} from '@coreui/react';
import GenericTable from 'src/components/Generic.Table';
import CIcon from '@coreui/icons-react';
import { cilVector } from '@coreui/icons';
import { settingsProfilesIds } from 'src/services/SupperSettings';
import PropTypes from 'prop-types';
import i18n from 'src/i18n';



const ProfilesIdsCrypteView = ({ refresh, selectedProfilesIds }) => {
    const [visible, setVisible] = useState(false);
    const [list, setlist] = useState([]);


    const getListProfiles = async () => {
        try {
            const result = await settingsProfilesIds.getProfilesIdCryptes(selectedProfilesIds.id);
            console.log("result",result?.data)

            if (result) {
                setlist(result?.data);
                setVisible(!visible);
            }
        } catch (error) {
            console.error('Error fetching admin list:', error);
        }


    };


    const columns = [
        //{ label: '#', field: 'index' },
        { label: i18n.t('attr_aLabel'), field: 'attr_a' },
        { label: i18n.t('attr_bLabel'), field: 'attr_b' },
        { label: i18n.t('attr_cLabel'), field: 'attr_c' },
        { label: i18n.t('attr_dLabel'), field: 'attr_d' },
        { label: i18n.t('attr_eLabel'), field: 'attr_e' },
        { label: i18n.t('attr_fLabel'), field: 'attr_f' },
        { label: i18n.t('cryptedLabel'), field: 'crypted' },
        { label: i18n.t('activeDateLabel'), field: 'activeDate' },
    ]
    return (
        <>
            <CButton style={{ backgroundColor: '#a73978' }} onClick={() => getListProfiles(!visible)}>
                <CIcon icon={cilVector} />
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
                <GenericTable columns={columns} data={list} />
                   
                </CModalBody>
            </CModal>
        </>
    );
};

ProfilesIdsCrypteView.propTypes = {
    refresh: PropTypes.func.isRequired,
    selectedProfilesIds: PropTypes.object,
};

export default ProfilesIdsCrypteView;
