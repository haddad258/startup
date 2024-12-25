
import React, { useState, useEffect, useCallback } from 'react';
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
    CFormSelect,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cilBoltCircle } from '@coreui/icons';
import { settingsConfigArticles } from 'src/services/SupperSettings';
import PropTypes from 'prop-types';
import i18n from 'src/i18n';
import fetchData from '../fetch.data';
import { commonSettings } from 'src/services/common.settings';

const initialArticlesConfigstate = {


};


const ArticlesConfigsC = ({ refresh, selectedArticlesConfigs }) => {
    const [visible, setVisible] = useState(false);
    const [validated, setValidated] = useState(false);

    const [ArticlesConfig, setFormdata] = useState(initialArticlesConfigstate);
    const [listCategories, setListCategories] = useState([]);
    const [listitemsKits, setlistitemsKits] = useState([]);
    const [listitems, setlistitems] = useState([]);
    const [listBrands, setListBrands] = useState([]);
    useEffect(() => {
        setFormdata( initialArticlesConfigstate);
    }, [selectedArticlesConfigs]);

    const handleAddOrUpdate = async () => {
        const result = await settingsConfigArticles.updateArticles(ArticlesConfig, selectedArticlesConfigs.id)

        if (result) {
            setVisible(false);
            setValidated(false);
            setFormdata(initialArticlesConfigstate);
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

    const CreateNewData = async () => {
        try {
            const [categories, itemkits, items, brands] = await Promise.all([
                fetchData("entity/categories"),
                fetchData("entity/itemkits"),
                fetchData("entity/items"),
                fetchData("entity/brands"),
            ]);

            setListCategories(categories);
            setlistitemsKits(itemkits);
            setlistitems(items);
            setListBrands(brands);
            setVisible(prevVisible => !prevVisible); // Safely toggle the visibility
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
                    setlistitemsKits(list?.data);
                } else if (updateType === 'items') {
                    setlistitems(list?.data);
                    console.log(list.data)
                }
            }
        } catch (error) {
            console.error('Error fetching admin list:', error);
        }
    }, []);
    return (
        <>
            <CButton style={{ backgroundColor: "#8cf470" }} onClick={() => CreateNewData()}>
                <CIcon icon={cilBoltCircle} />
            </CButton>

            <CModal
                alignment="center"
                visible={visible}
                onClose={() => setVisible(false)}
                aria-labelledby="VerticallyCenteredExample"
                size="xl"
            >
                <CModalHeader onClose={() => setVisible(false)}>
                    <CModalTitle id="LiveDemoExampleLabel">{i18n.t('updateArticlesConfigTitle')}</CModalTitle>
                </CModalHeader>
                <CModalBody>
                    <CForm
                        className="row g-3 needs-validation"
                        noValidate
                        validated={validated}
                        onSubmit={handleSubmit}
                    >
                        <CCol md={6} className="position-relative">
                            <CFormLabel htmlFor="categoriesSelect">{i18n.t('CategoriesList')}</CFormLabel>
                            <CFormSelect
                                value={ArticlesConfig.categories}
                                onChange={(e) => {
                                    filterChild(e.target.value, "itemkits", "categoriesId", "itemkits");
                                    setFormdata({ ...ArticlesConfig, categoryId: e.target.value })}}
                                id="categoriesSelect"
                                
                            >
                                <option value="">{i18n.t('selectCategoriesPlaceholder')}</option>
                                {listCategories?.map((category) => (
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
                            <CFormLabel htmlFor="itemkitsSelect">{i18n.t('ItemKitsList')}</CFormLabel>
                            <CFormSelect
                                value={ArticlesConfig.itemkits}
                                onChange={(e) =>{
                                    filterChild(e.target.value, "items", "itemkitsId", "items")
                                    setFormdata({ ...ArticlesConfig, itemkitId: e.target.value })}
                               
                                }
                                id="itemkitsSelect"
                            >
                                <option value="">{i18n.t('selectItemKitsPlaceholder')}</option>
                                {listitemsKits?.map((itemkit) => (
                                    <option key={itemkit.id} value={itemkit.id}>
                                        {itemkit.name}
                                    </option>
                                ))}
                            </CFormSelect>
                            <CFormFeedback invalid>
                                {i18n.t('requiredItemKitsField')}
                            </CFormFeedback>
                        </CCol>

                        <CCol md={6} className="position-relative">
                            <CFormLabel htmlFor="ItemsSelect">{i18n.t('ItemsList')}</CFormLabel>
                            <CFormSelect
                                value={ArticlesConfig.items}
                                onChange={(e) => setFormdata({ ...ArticlesConfig, itemId: e.target.value })}
                                id="ItemsSelect"
                            >
                                <option value="">{i18n.t('selectItemsPlaceholder')}</option>
                                {listitems?.map((item) => (
                                    <option key={item.id} value={item.id}>
                                        {item.name}
                                    </option>
                                ))}
                            </CFormSelect>
                            <CFormFeedback invalid>
                                {i18n.t('requiredArticlesConfigField')}
                            </CFormFeedback>
                        </CCol>

                        <CCol md={6} className="position-relative">
                            <CFormLabel htmlFor="brandsSelect">{i18n.t('BrandsList')}</CFormLabel>
                            <CFormSelect
                                value={ArticlesConfig.brands}
                                onChange={(e) => setFormdata({ ...ArticlesConfig, brandId: e.target.value })}
                                id="brandsSelect"
                            >
                                <option value="">{i18n.t('selectBrandsPlaceholder')}</option>
                                {listBrands?.map((brand) => (
                                    <option key={brand.id} value={brand.id}>
                                        {brand.name}
                                    </option>
                                ))}
                            </CFormSelect>
                            <CFormFeedback invalid>
                                {i18n.t('requiredBrandsField')}
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

ArticlesConfigsC.propTypes = {
    refresh: PropTypes.func.isRequired,
    selectedArticlesConfigs: PropTypes.object,
};

export default ArticlesConfigsC;

