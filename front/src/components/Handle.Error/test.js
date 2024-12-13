import React, { useState } from 'react';
import { CAlert } from '@coreui/react';

let alertController = null;

export const createAlert = (message, color = 'primary') => {
  if (alertController) {
    console.log("heer")
    alertController({ message, color, visible: true });
  }
};

const HandleError = () => {
  const [alert, setAlert] = useState({ visible: false, message: '', color: 'primary' });

  // Expose the alert controller
  alertController = setAlert;

  return (
    <div style={{ padding: '20px' }}>
      <CAlert
        color={alert.color}
        dismissible
        visible={alert.visible}
        onClose={() => setAlert({ ...alert, visible: false })}
      >
        {alert.message}
      </CAlert>
    </div>
  );
};

export default HandleError;
