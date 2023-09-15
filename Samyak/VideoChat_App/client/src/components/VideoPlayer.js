import React, { useContext } from 'react';
import { SocketContext } from '../SocketContext';
import './VideoPlayer.css';
import { Button } from '@mui/material';


const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call,leaveCall } = useContext(SocketContext);

  return (
    <div className="grid-container">
      {stream && (
        <div className="paper">
          <div className="video-container">
            
            <video playsInline muted ref={myVideo} autoPlay className="video" />
            <h5>{name || 'Name'}</h5>
          </div>
        </div>
      )}
      {callAccepted && !callEnded && (
        <div className="paper">
          <div className="video-container">
            
            <video playsInline ref={userVideo} autoPlay className="video" />
            <h5>{call.name || 'Name'}</h5>
            {callAccepted && !callEnded ? (
                <Button className="hang-up" onClick={leaveCall}>
                  <img src="https://cdn-icons-png.flaticon.com/512/5994/5994568.png" className='hangupicon'/>
                </Button>
              ) : null}
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
