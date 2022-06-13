import "./App.css";
import React, { useState, useEffect } from "react";
import heroImage from './img/header-img-residency-test.png'
import logoVCA from './img/logo.svg'
import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {



  return (
    <div className="App">

        <div className="nav-bar">
            <img className="logo-vca" src={logoVCA} />
            <button>CONNECT WALLET</button>
        </div>
      
        <div className="viewport-header">

          <img className="bg-vid" src={heroImage} />

          <div className="mint-window">
            <h1>VCA MEMBERSHIP</h1>
            <div className="mint-info">
              <div className="mint-price">
                <h2>Mint Price</h2>
                <p>0.00 ETH</p>
              </div>
              <div className="mint-supply">
                <h2>Mint Supply</h2>
                <p>1,000</p>
              </div>

              <div className="mint-supply-remaining">
                <h2>Remaining Supply</h2>
                <p>0</p>
              </div>
               
            </div>
            <p>Mint your membership pass now</p>

            <button>Mint Now</button>

          </div>
        </div>

        <div className="desc-proj">
          <h1>Membership F.A.Q</h1>


          <Container fluid className="faq-container">
        <Accordion>

        <Accordion.Item eventKey="0">
            <Accordion.Header>1. Am I eligible for the mint?</Accordion.Header>
            <Accordion.Body>
              List the conditions to meet to be able to mint a vca membership token
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>2. What is the mint price ?</Accordion.Header>
            <Accordion.Body>
              Lorem Lipsum
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>3. What are the benefits of holding a VCA membership pass ?</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
              est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>4. What are the conditions to get in the allow list ?</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
              est laborum.
            </Accordion.Body>
          </Accordion.Item>


          

          
        </Accordion>
      
        </Container>
        </div>

        <div className="footer">
          
          <p>2022 VCA Membership by VerticalCrypto Art. All Right Reserved.</p>
          <div className="socials">
              <p>OpenSea</p>
              <p>Etherscan</p>
              <p>Twitter</p>
          </div>

        </div>
      

    </div>

  )




}

export default App;
