import React from "react";
import "./Modal.css";

function Modal({ setOpenModal,responseStatus,errorMessage}) {
  
  return (
    <div className="modalBackground">
      <div className="modalContainer">
       
        <div className="body-modal">
    
        </div>

        <div className="title-modal">

        {responseStatus ==400 && errorMessage === "USER_ALREADY_VOTED" &&  <div><h1>Already voted !</h1><h2>Try again tomorrow!</h2></div>}
        {responseStatus ==400 && errorMessage === "NO_OWNED_NFTS_ERROR" &&  <div><h1>You don't own any Breeze!</h1><h2>Buy one first</h2></div>}
        {responseStatus ==201 &&  <div><h1>Woho !</h1><h2>Thank you for your vote!</h2></div>}
          <button onClick={() => {
              setOpenModal(false);
            }}>Got it</button>

        </div>
        </div>

    </div>
  );
}

export default Modal;
