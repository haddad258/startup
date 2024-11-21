
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
import { settingsConfigApps } from 'src/services/SupperSettings';
import PropTypes from 'prop-types';
import i18n from 'src/i18n';

const initialItemsKitstate = {
    name: '',
    description: '',

};


const ItemsKitsC = ({ refresh, selectedItemsKits }) => {
    const [visible, setVisible] = useState(false);
    const [validated, setValidated] = useState(false);
    const [isUpdateMode, setIsUpdateMode] = useState(false);
    const [ListCategories, setListCategories] = useState([]);

    const [ItemsKits, setFormdata] = useState(initialItemsKitstate);

    useEffect(() => {
        setIsUpdateMode(!!selectedItemsKits);
        setFormdata(selectedItemsKits || initialItemsKitstate);
    }, [selectedItemsKits]);

    const handleAddOrUpdate = async () => {
        const result = isUpdateMode
            ? await settingsConfigApps.updateConfigApps(ItemsKits, "entity/itemkits/"+ItemsKits.id)
            : await settingsConfigApps.addConfigApps(ItemsKits,"entity/itemkits");

        if (result) {
            setVisible(false);
            setValidated(false);
            setIsUpdateMode(false);
            setFormdata(initialItemsKitstate);
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

    const modalTitle = useMemo(() => (isUpdateMode ? i18n.t('updateItemsKitsTitle') : i18n.t('addItemsKitsTitle')), [isUpdateMode]);

    const fetchCategories = async () => {
        try {
            const list = await settingsConfigApps.getConfigApps("entity/categories");
            if (list) {
                setListCategories(list?.data);
                setVisible(!visible)
            }
        } catch (error) {
            console.error('Error fetching admin list:', error);
        }
    };
    return (
        <>
            <CButton color={isUpdateMode ? 'secondary' : 'primary'} onClick={() => fetchCategories()}>
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
                            <CFormInput value={ItemsKits.name} onChange={(e) => setFormdata({ ...ItemsKits, name: e.target.value })} type="text" id="validationTooltip01" defaultValue="" required />
                            <CFormFeedback tooltip invalid>
                                {i18n.t('requiredNameField')}
                            </CFormFeedback>
                        </CCol>
                        <CCol md={12} className="position-relative">
                            <CFormLabel htmlFor="validationTooltip03">{i18n.t('descriptionInputLabel')}</CFormLabel>
                            <CFormInput value={ItemsKits.description} onChange={(e) => setFormdata({ ...ItemsKits, description: e.target.value })} type="text" id="validationTooltip03" required />
                            <CFormFeedback tooltip invalid>
                            {i18n.t('requiredDescriptionField')}
                            </CFormFeedback>
                        </CCol>
                        <CCol md={6} className="position-relative">
                            <CFormLabel htmlFor="itemkitsSelect">{i18n.t('CategoriesList')}</CFormLabel>
                            <CFormSelect
                                value={ItemsKits.categoriesId}
                                onChange={(e) => setFormdata({ ...ItemsKits, categoriesId: e.target.value })}
                                id="itemkitsSelect"
                            >
                                <option value="">{i18n.t('selectCategoriesPlaceholder')}</option>
                                {ListCategories?.map((category) => (
                                    <option key={category.id} value={category.id}>
                                        {category.name}
                                    </option>
                                ))}
                            </CFormSelect>
                            <CFormFeedback invalid>
                                {i18n.t('requiredcategoriesField')}
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

ItemsKitsC.propTypes = {
    refresh: PropTypes.func.isRequired,
    selectedItemsKits: PropTypes.object,
};

export default ItemsKitsC;

