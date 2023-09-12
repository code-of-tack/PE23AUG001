import React, { useContext } from 'react';
import { Button } from '@mui/material';
import { toast,Toaster } from 'react-hot-toast'; // Import useToasts from react-hot-toast
import { SocketContext } from '../SocketContext';
import Notifications from './Notifications';

const Display = () => {
  const { answerCall, call, callAccepted } = useContext(SocketContext);
   

  if (callAccepted) {
    toast(`${call.name} is calling. Call accepted.`, {
      duration: 4000, 
      position: 'top-right', 
      type: 'success', 
    });
  }

      
};

export default Display;
