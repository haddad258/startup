import React, { useState } from 'react';
import { notification, Button } from 'antd';

const createNotification = (type, errorData) => {
  const { status, message, details } = JSON.parse(errorData);

  const filteredDetails = Object.entries(details)?.filter(
    ([key]) => key === 'detail' || key === 'constraint'
  );

  const Details = () => {
    const [showDetails, setShowDetails] = useState(false);

    return (
      <div>
        <Button type="link" onClick={() => setShowDetails(!showDetails)}>
          {showDetails ? 'Masquer les détails' : 'Afficher plus'}
        </Button>
        {(
          <div style={{ marginTop: 8 }}>
            {filteredDetails?.map(([key, value]) => (
              <p key={key}>
                <strong>{key}</strong>: {value}
              </p>
            ))}
          </div>
        )}
          {showDetails && (
          <div style={{ marginTop: 8 }}>
            {Object.entries(details)?.map(([key, value]) => (
              <p key={key}>
                <strong>{key}</strong>: {value}
              </p>
            ))}
          </div>
        )}
      </div>
    );
  };

  // Notification
  notification[type]({
    message: `${status}: ${message}`,
    description: <Details />,
  });
};

export default createNotification;
