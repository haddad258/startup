
import React, { useState } from 'react';
import {
    CButton,
    CModal,
    CModalHeader,
    CModalTitle,
    CModalBody,
    CModalFooter,
    CForm,
    CFormFeedback,
    CFormSelect,
    CFormLabel,
    CCol
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import {  cilListLowPriority } from '@coreui/icons';
import { settingsOrders, settingsStatusOrders } from 'src/services/SupperSettings';
import PropTypes from 'prop-types';
import i18n from 'src/i18n';


const OrderStatus = ({ refresh, selectedOrders,selectedStatus }) => {
    const [visible, setVisible] = useState(false);
    const [validated, setValidated] = useState(false);

    const [Orders, setFormdata] = useState({});
    const [ListStatus, setListStatus] = useState([]);
  
    const fetchStatusOrders = async () => {
        try {
            const list = await settingsStatusOrders.getStatusOrders();
            if (list) {
                setListStatus(list?.data);
                setVisible(!visible)
            }
        } catch (error) {
            console.error('Error fetching admin list:', error);
        }
    };


    const handleAddOrUpdate = async () => {
        console.log(selectedOrders.id)
        const result =  await settingsOrders.updateOrders(Orders, selectedOrders.id)
        if (result) {
            setVisible(false);
            setValidated(false);
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
            <CButton style={{backgroundColor:"#887142"}} onClick={() =>fetchStatusOrders() }>
            {selectedStatus}    <CIcon icon={cilListLowPriority} />
            </CButton>

            <CModal
                alignment="center"
                visible={visible}
                onClose={() => setVisible(false)}
                aria-labelledby="VerticallyCenteredExample"
                size="xl"
            >
                <CModalHeader onClose={() => setVisible(false)}>
                    <CModalTitle id="LiveDemoExampleLabel">{i18n.t('UpdateStatusOrders')}</CModalTitle>
                </CModalHeader>
                <CModalBody>
                    <CForm
                        className="row g-3 needs-validation"
                        noValidate
                        validated={validated}
                        onSubmit={handleSubmit}
                    >
                          <CCol md={12} className="position-relative">
                            <CFormLabel htmlFor="validationTooltip04">{i18n.t('statusTypeInputLabel')}</CFormLabel>
                            <CFormSelect
                                defaultValue={Orders.paymentstatusId || ""}
                                onChange={(e) => setFormdata({ ...Orders, paymentstatusId: e.target.value })}
                                id="validationTooltip04"
                                required
                            >
                                <option value={Orders.status || ""}>{Orders.paymentstatusId}</option>
                                {ListStatus?.map((status, index) => (
                                    <option key={`type${index}`} value={status.id}>
                                        {status.name} : {status.description}
                                    </option>
                                ))}
                            </CFormSelect>

                            <CFormFeedback tooltip invalid>
                            {i18n.t('requiredstatusField')}
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

OrderStatus.propTypes = {
    refresh: PropTypes.func.isRequired,
    selectedOrders: PropTypes.object,
    selectedStatus: PropTypes.object,
    
};

export default OrderStatus;

