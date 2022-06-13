import React from "react";

const MyCards = (props) => {
  return (
    
      <div className="breeze-card">
          
        <img src={props.image} alt="display" />
        <div className="caption">
          <button
            onClick={() => props.handleVoteUser(props.walletId, props.tokenId)}
          >
            Vote for #{props.tokenId}
          </button>
          <p>{props.urlVotes} votes</p>
  
        </div>
      </div>
    
  );
};

export default MyCards;
