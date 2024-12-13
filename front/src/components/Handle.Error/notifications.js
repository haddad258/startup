import React from 'react';
import { notification } from 'antd';

const createNotification = (type, errorData) => {
  const { status, message, details } = JSON.parse(errorData);

  // Construct the message
  const formattedMessage = `${status}: ${message}`;

  // Construct the description as HTML
  const formattedDescription = (
    <div>
      {Object.entries(details).map(([key, value]) => (
        <p key={key}>
          <strong>{key}</strong>: {value}
        </p>
      ))}
    </div>
  );

  // Display the notification
  notification[type]({
    message: formattedMessage,
    description: formattedDescription,
  });
};

export default createNotification;
