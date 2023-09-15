import React, { useState, useContext } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Button } from '@mui/material';
import { SocketContext } from '../SocketContext';

import './Sidebar.css';

const Sidebar = ({ children }) => {
  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } = useContext(SocketContext);
  const [idToCall, setIdToCall] = useState('');

  return (
    <div className="container">
      <div className="paper">
        <form className="root">
          <div className="grid-container">
            <div className="padding">
              <h6>Account Info</h6>
              <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
              <CopyToClipboard text={me} className="margin">
                <Button>
                  Copy Your ID
                </Button>
              </CopyToClipboard>
            </div>
            <div className="padding">
              <h6>Make a call</h6>
              <input type="text" placeholder="ID to call" value={idToCall} onChange={(e) => setIdToCall(e.target.value)} />
              {callAccepted && !callEnded ? (
                <Button className="hang-up" onClick={leaveCall}>
                  <img src="https://cdn-icons-png.flaticon.com/512/5994/5994568.png"  />
                </Button>
              ) : (
                <Button className="call" onClick={() => callUser(idToCall)}>
                  <img src="https://cdn-icons-png.flaticon.com/512/4188/4188698.png" />
                  
                </Button>
              )}
            </div>
          </div>
        </form>
        {children}
      </div>
    </div>
  );
};

export default Sidebar;
