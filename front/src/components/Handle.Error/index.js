import React from 'react';
import { CToast, CToastBody, CToastHeader, CToaster } from '@coreui/react';
import PropTypes from 'prop-types';

const ToastNotification = ({ message, color = 'info', status = 'info', visible, onClose }) => {
    return (
        <CToaster
            position="top-end"
            visible={visible}
            onClose={onClose}
        >
            <CToast color={color} show={visible} autohide={5000} onClose={onClose}>
                <CToastHeader closeButton>
                    {status.toUpperCase()}
                </CToastHeader>
                <CToastBody>
                    {message}
                </CToastBody>
            </CToast>
        </CToaster>
    );
};
ToastNotification.propTypes = {
    message: PropTypes.func.isRequired,
    color: PropTypes.object,
    visible: PropTypes.object,
    status: PropTypes.object,
    onClose: PropTypes.object,
};
export default ToastNotification;
