import React, { useContext } from 'react';
import { Button } from '@mui/material';
import { SocketContext } from '../SocketContext';
import './Notification.css';
import toast from 'react-hot-toast';

const Notifications = () => {
  const { answerCall, call, callAccepted } = useContext(SocketContext);

  const handleAcceptCall = () => {
    answerCall();
    // Close the toast notification when the accept button is pressed
    toast.dismiss('customCallNotification');
  };
  
  if (call.isReceivingCall && !callAccepted) {
    const customToastId = 'customCallNotification'; // Custom ID for the toast
    const notificationContent = (
      <div className=''>
        <h1 className="notification-text">
          {call.name} is calling: &nbsp;
        </h1>
        <button
          className="answer-button bounce"
          variant="contained"
          onClick={handleAcceptCall}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/4542/4542154.png"
            alt="Answer"
          />
        </button>
      </div>
    );
      
    toast(notificationContent, {
      id: customToastId,
      position: 'top-right',
      duration: 30000,
      type: 'success',
    });
    
  }
  

 
};

export default Notifications;
