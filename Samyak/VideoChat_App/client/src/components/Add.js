import React, { useState,useContext } from 'react';
import Sidebar from './Options';
import Notifications from './Notifications';
import './Add.css';
import { SocketContext } from '../SocketContext';

const Add = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const { answerCall, call, callAccepted } = useContext(SocketContext);


  // Function to open the popup
  const openPopup = () => {
    const popup = document.getElementById("myPopup");
    if (popup) {
      popup.style.display = "block";
      setPopupVisible(true);
    }
  };

  // Function to close the popup
  const closePopup = () => {
    const popup = document.getElementById("myPopup");
    if (popup) {
      popup.style.display = "none";
      setPopupVisible(false);
    }
  };

  
 
  // Render the component
  return (
    
    <div>
      <button className='add' onClick={openPopup}>
        <img src = "https://cdn-icons-png.flaticon.com/512/258/258365.png" />
      </button>
      <div className="popup" id="myPopup">
        <div className="popup-content">
          <span className="close" onClick={closePopup}>&times;</span>
          <Sidebar>
            
          </Sidebar>
          
        </div>
      </div>
    </div>
  );
};

export default Add;
