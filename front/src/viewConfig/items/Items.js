
import React, { useState, useEffect, useMemo, useCallback } from 'react';
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
import { commonSettings } from 'src/services/common.settings';

const initialItemstate = {
    name: '',
    description: '',

};


const ItemsC = ({ refresh, selectedItems }) => {
    const [visible, setVisible] = useState(false);
    const [validated, setValidated] = useState(false);
    const [isUpdateMode, setIsUpdateMode] = useState(false);

    const [Items, setFormdata] = useState(initialItemstate);
    const [listItemsKits, setlistItemsKits] = useState([]);
    const [ListCategories, setListCategories] = useState([]);

    useEffect(() => {
        setIsUpdateMode(!!selectedItems);
        setFormdata(selectedItems || initialItemstate);
    }, [selectedItems]);

    const handleAddOrUpdate = async () => {
        const result = isUpdateMode
            ? await settingsConfigApps.updateConfigApps(Items, "entity/items/" + Items.id)
            : await settingsConfigApps.addConfigApps(Items, "entity/items");

        if (result) {
            setVisible(false);
            setValidated(false);
            setIsUpdateMode(false);
            setFormdata(initialItemstate);
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

    const modalTitle = useMemo(() => (isUpdateMode ? i18n.t('updateItemsTitle') : i18n.t('addItemsTitle')), [isUpdateMode]);



    const fetchItemsKits = async () => {
        try {
            const list = await settingsConfigApps.getConfigApps("entity/itemkits");
            if (list) {
                setlistItemsKits(list?.data);
            }
        } catch (error) {
            console.error('Error fetching admin list:', error);
        }
    };
    const fetchCategories = async () => {
        try {
            const list = await settingsConfigApps.getConfigApps("entity/categories");
            if (list) {
                setListCategories(list?.data);
            }
        } catch (error) {
            console.error('Error fetching admin list:', error);
        }
    };
    const openModals = async () => {
        try {
            await Promise.all([
                fetchItemsKits(),
                fetchCategories()
            ]);
            setVisible(prevVisible => !prevVisible); // Correct way to toggle the state
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const filterChild = useCallback(async (filterId, entity, filterAttr, updateType) => {
        try {
            const list = await commonSettings.getFilterData(filterId, entity, filterAttr);
            if (list) {
                console.log(list?.data)
                if (updateType === 'itemkits') {
                    setlistItemsKits(list?.data);
                } else if (updateType === 'items') {
                    console.log(list?.data);
                }
            }
        } catch (error) {
            console.error('Error fetching admin list:', error);
        }
    }, []);

    return (
        <>
            <CButton color={isUpdateMode ? 'secondary' : 'primary'} onClick={() => openModals()}>
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
                            <CFormInput value={Items.name} onChange={(e) => setFormdata({ ...Items, name: e.target.value })} type="text" id="validationTooltip01" defaultValue="" required />
                            <CFormFeedback tooltip invalid>
                                {i18n.t('requiredNameField')}
                            </CFormFeedback>
                        </CCol>
                        <CCol md={12} className="position-relative">
                            <CFormLabel htmlFor="validationTooltip03">{i18n.t('descriptionInputLabel')}</CFormLabel>
                            <CFormInput value={Items.description} onChange={(e) => setFormdata({ ...Items, description: e.target.value })} type="text" id="validationTooltip03" required />
                            <CFormFeedback tooltip invalid>
                                {i18n.t('requiredDescriptionField')}
                            </CFormFeedback>
                        </CCol>
                        <CCol md={6} className="position-relative">
                            <CFormLabel htmlFor="itemkitsSelect">{i18n.t('CategoriesList')}</CFormLabel>
                            <CFormSelect
                                value={Items.categoriesId}
                                onChange={(e) => filterChild(e.target.value, "itemkits", "categoriesId", "itemkits")}
                                id="itemkitsSelect"
                                required
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
                        <CCol md={6} className="position-relative">
                            <CFormLabel htmlFor="itemkitsSelect">{i18n.t('ItemsKitsTableTitle')}</CFormLabel>
                            <CFormSelect
                                value={Items.itemkitsId}
                                onChange={(e) => setFormdata({ ...Items, itemkitsId: e.target.value })}
                                id="itemkitsSelect"itemkitsId
                                required
                            >
                                <option value="">{i18n.t('selectitemkitsPlaceholder')}</option>
                                {listItemsKits?.map((itemkit) => (
                                    <option key={itemkit.id} value={itemkit.id}>
                                        {itemkit.name}
                                    </option>
                                ))}
                            </CFormSelect>
                            <CFormFeedback invalid>
                                {i18n.t('requireditemkitsField')}
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

ItemsC.propTypes = {
    refresh: PropTypes.func.isRequired,
    selectedItems: PropTypes.object,
};

export default ItemsC;

