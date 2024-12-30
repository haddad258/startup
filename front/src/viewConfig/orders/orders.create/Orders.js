import React, { useState, useMemo } from 'react';
import {
    CButton,
    CModal,
    CModalHeader,
    CModalTitle,
    CModalBody,
    CModalFooter,
    CCard,
    CCardBody,
    CCardHeader,
    CRow,
    CCol,
    CCardImage,
    CCardFooter
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cilPlus } from '@coreui/icons';
import PropTypes from 'prop-types';
import i18n from 'src/i18n';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../store/cart/actions';

import { settingsConfigApps, settingsConfigArticles } from 'src/services/SupperSettings';
import { API_URLPublic } from 'src/services/Api/config';
import CurrentOrder from './CurrentOrder';

const initialArticles = [];


const OrdersC = ({ refresh }) => {
    const [articles, setArticles] = useState(initialArticles);
    const [categories, setcategories] = useState([]);
    const [visible, setVisible] = useState(false);
    const dispatch = useDispatch();

    const addToOrder = (article) => {
        dispatch(addToCart(article.id, article, 1));
    };

    const fetchCategories = async () => {
        try {
            const list = await settingsConfigApps.getConfigApps("entity/categories");
            if (list) {
                setcategories(list?.data);
            }
        } catch (error) {
            console.error('Error fetching admin list:', error);
        }
    };

    const fetchArticles = async () => {
        try {
            const list = await settingsConfigArticles.getArticles();
            if (list) {
                setArticles(list?.data);
            }
        } catch (error) {
            console.error('Error fetching admin list:', error);
        }
    };

    const filterArticles = async (id) => {
        try {
            const list = await settingsConfigArticles.getFilterArticles({ id, entityFilter: "categoryId" });
            if (list) {
                setArticles(list?.data);
            }
        } catch (error) {
            console.error('Error fetching admin list:', error);
        }
    };

    const fetchAllData = async () => {
        try {
            await Promise.all([fetchCategories(), fetchArticles()]);
            setVisible(true);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };


   

    const modalTitle = useMemo(() => i18n.t('manageOrderTitle'), []);

    return (
        <>
            <CButton color="primary" onClick={() => fetchAllData()}>
                <CIcon icon={cilPlus} /> Open POS
            </CButton>

            <CModal
                alignment="center"
                visible={visible}
                onClose={() => setVisible(false)}
                fullscreen
            >
                <CModalHeader onClose={() => setVisible(false)}>
                    <CModalTitle>{modalTitle}</CModalTitle>
                </CModalHeader>
                <CModalBody>
                    <CRow>
                        <CCol md={8}>
                            <h5>Articles</h5>
                            <CCol md={12} className="categories-col" style={{ overflowX: 'auto', whiteSpace: 'nowrap' }}>
                                <CRow className="d-flex flex-nowrap">
                                    {categories?.map((category) => (
                                        <CCol onClick={() => filterArticles(category.id)} md={1} key={category.id} className="d-inline-block">
                                            <CCard>
                                                <CCardHeader>{category.name}</CCardHeader>
                                                <CCardBody>
                                                    <CCardImage src={API_URLPublic + "categories/" + category?.images} />
                                                </CCardBody>
                                            </CCard>
                                        </CCol>
                                    ))}
                                </CRow>
                                <hr style={{ marginTop: '10px', borderTop: '6px solid #000' }} />
                            </CCol>
                            <CRow>
                                {articles.map((article) => (
                                    <CCol onClick={() => addToOrder(article)} key={article.id} md={2}>
                                        <CCard>
                                            <CCardHeader>{article.name}</CCardHeader>
                                            <CCardBody>
                                                <CCardImage src={API_URLPublic + "articles/" + article?.images} />
                                            </CCardBody>
                                            <CCardFooter>
                                                <p>{article.price}</p>
                                            </CCardFooter>
                                        </CCard>
                                    </CCol>
                                ))}
                            </CRow>
                        </CCol>

                        <CCol md={4}>
                            <h5>Current Order</h5>
                            <CurrentOrder />
                        </CCol>
                    </CRow>
                </CModalBody>
                <CModalFooter>
                    <CButton color="secondary" onClick={() => setVisible(false)}>
                        Close
                    </CButton>
                </CModalFooter>
            </CModal>
        </>
    );
};

OrdersC.propTypes = {
    refresh: PropTypes.func.isRequired,
};

export default OrdersC;
