import React from 'react';
import './App.css'; // Import your custom CSS file
import VideoPlayer from './components/VideoPlayer';
import Notifications from './components/Notifications';
import Sidebar from './components/Options';
import { SocketContext } from './SocketContext';
import { useContext, useState } from 'react';
import Add from './components/Add';
import { Button } from '@mui/material';
import Display from './components/Display';
import { toast } from 'react-hot-toast';

const App = () => {

  const [idToCall, setIdToCall] = useState('');
  const { me, name,  setName, callEnded, leaveCall, callUser } = useContext(SocketContext);
  const { answerCall, call, callAccepted } = useContext(SocketContext);

  if (callAccepted) {
    toast(`${call.name} is calling. Call accepted.`, {
      duration: 4000, 
      id: 'callAccepted',
      position: 'top-right', 
      type: 'success', 
    });
  }

  return (
    <div className="wrapper"> 
      <div className="app-bar">
        <h2>{name}  { call.name ? "& "+ call.name : ''}</h2>
        
      </div>
      <VideoPlayer />
      <div className="custom-dropdown">
      <Add />
      
      <div className="notification-container">
       <Notifications/>
      </div>
      
      
              
    </div>
      
      
    </div>    
  );
};

export default App;
