import React from 'react';
import Image from 'next/image';
import blockchainImage from '../public/images/5.png';
import metaMaskImage from '../public/images/1.png'; // Importing the meta mask image

const MoreContent = () => {
  return (
    <div id="moreContent" style={moreContentStyle}>
      <div style={containerStyle}>
        <div style={{...sectionStyle, marginTop: '4rem'}}> {/* Added top margin */}
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <div style={{ position: 'relative', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 0 20px rgba(255, 255, 255, 0.5)' }}>
              <Image src={blockchainImage} alt="Blockchain Image" width={400} height={400} />
            </div>
          </div>
          <div style={{ textAlign: 'left', maxWidth: '800px' }}>
            <h2 style={titleStyle}>What is blockchain?</h2>
            <p style={textStyle}>
              Blockchain is a decentralized, distributed ledger technology that securely records transactions across multiple nodes. In Authentithief, blockchain serves as the foundation for creating a transparent and tamper-proof system for product identification and tracking.
            </p>
            <h3 style={subtitleStyle}>Benefits of Authentithief:</h3>
            <ul style={listStyle}>
              <li>Enhanced security and transparency in product identification</li>
              <li>Real-time tracking of products through the supply chain</li>
              <li>Decentralized and secure storage of product information</li>
              <li>Automation of supply chain events through smart contracts</li>
            </ul>
            <h3 style={subtitleStyle}>Key Features:</h3>
            <ul style={listStyle}>
              <li>User-friendly interface for all stakeholders</li>
              <li>Blockchain-based authentication and authorization</li>
              <li>Role-based access control</li>
              <li>QR code scanner for easy product verification</li>
            </ul>
          </div>
        </div>

        <div style={sectionStyle}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <div style={{ position: 'relative', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 0 20px rgba(255, 255, 255, 0.5)' }}>
              <Image src={metaMaskImage} alt="MetaMask Image" width={400} height={400} />
            </div>
          </div>
          <div style={{ textAlign: 'left', maxWidth: '800px' }}>
            <h2 style={titleStyle}>What is MetaMask?</h2>
            <p style={textStyle}>
              MetaMask is a cryptocurrency wallet and browser extension that allows users to interact with the Ethereum blockchain. It serves as a bridge between traditional browsers and the decentralized web, enabling users to securely manage their Ethereum-based assets and interact with decentralized applications (DApps).
            </p>
            <h3 style={subtitleStyle}>Purpose of MetaMask:</h3>
            <p style={textStyle}>
              MetaMask provides users with a convenient and secure way to store, send, and receive Ethereum and ERC-20 tokens. It also allows users to access decentralized finance (DeFi) applications, participate in token sales, and interact with smart contracts.
            </p>
            <h3 style={subtitleStyle}>How to Use MetaMask:</h3>
            <ol style={listStyle}>
              <li>Install the MetaMask browser extension from the Chrome Web Store or Firefox Add-ons.</li>
              <li>Follow the setup instructions to create a new wallet or import an existing one.</li>
              <li>Fund your wallet by transferring Ethereum or ERC-20 tokens to your MetaMask address.</li>
              <li>Explore decentralized applications (DApps) by navigating to their websites and connecting your MetaMask wallet.</li>
              <li>Approve transactions and interact with smart contracts using MetaMask's user interface.</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

const moreContentStyle = {
  paddingTop: 0,
};

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};

const sectionStyle = {
  marginBottom: '4rem',
};

const titleStyle = {
  fontSize: '3rem',
  fontWeight: 'bold',
  textShadow: '0 0 10px rgba(255, 255, 255, 0.5)',
  marginBottom: '1rem',
};

const subtitleStyle = {
  fontSize: '2rem',
  fontWeight: 'bold',
  marginTop: '2rem',
};

const textStyle = {
  fontSize: '1.5rem',
  textAlign: 'left',
};

const listStyle = {
  listStyleType: 'none',
  padding: 0,
  marginLeft: '1rem',
};

export default MoreContent;
