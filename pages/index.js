import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { useRouter } from 'next/router';
import { FaIndustry, FaUser, FaBitcoin, FaEthereum, FaCubes } from 'react-icons/fa';

const Home = () => {
  const router = useRouter();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleAddProductClick = () => {
    router.push('/add-product');
  };

  const handleQRScannerClick = () => {
    router.push('/qrscanner');
  };

  return (
    <div style={containerStyle}>
      <Header />
      <div style={contentContainerStyle}>
        <div style={leftContentStyle}>
          <div style={iconContainerStyle}>
            <FaBitcoin style={iconStyle} />
            <FaEthereum style={iconStyle} />
            <FaCubes style={iconStyle} />
          </div>
          <h1 style={titleStyle}>AUTHENTITHIEF</h1>
          <p style={textStyle}>Revolutionizing anti-counterfeit with blockchain technology.</p>
          <div style={buttonContainerStyle}>
            <button onClick={handleAddProductClick} style={buttonStyle}>
              <FaIndustry style={buttonIconStyle} /> Manufacturer
            </button>
            <button onClick={handleQRScannerClick} style={buttonStyle}>
              <FaUser style={buttonIconStyle} /> Consumer
            </button>
          </div>
        </div>
        <div style={rightContentStyle}>
          <video autoPlay loop muted style={backgroundVideoStyle}>
            <source src="/videos/2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <footer style={footerStyle}>
        <div style={footerContentStyle}>
          <div>
            <h3 style={footerHeadingStyle}>Explore</h3>
            <ul style={footerListStyle}>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 style={footerHeadingStyle}>Follow Us</h3>
            <ul style={footerListStyle}>
              <li>
                <a href="#">Instagram</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
              <li>
                <a href="#">Facebook</a>
              </li>
            </ul>
          </div>
        </div>
        <div style={footerLegalStyle}>
          <p>&copy; 2024 Authentithief. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

const containerStyle = {
  position: 'relative',
  fontFamily: 'Roboto, sans-serif',
  background: 'linear-gradient(to bottom, #201e3c, #0c0d1d)',
  minHeight: '100vh',
  color: '#fff',
};

const contentContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '2rem',
};

const leftContentStyle = {
  flex: '1',
  marginRight: '2rem',
  textAlign: 'center',
};

const rightContentStyle = {
  position: 'relative',
  flex: '1',
  overflow: 'hidden',
};

const backgroundVideoStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: '20px', // Increased border radius
};

const iconContainerStyle = {
  marginBottom: '1rem',
};

const iconStyle = {
  fontSize: '3rem',
  marginRight: '0.5rem',
};

const titleStyle = {
  fontSize: '4rem',
  fontWeight: 'bold',
  marginBottom: '1rem',
  textShadow: '0 0 10px rgba(255, 255, 255, 0.5)',
};

const textStyle = {
  fontSize: '1.8rem',
  marginBottom: '2rem',
  textShadow: '0 0 5px rgba(255, 255, 255, 0.3)',
};

const buttonContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
};

const buttonStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '1rem 2rem',
  fontSize: '1.2rem',
  fontWeight: 'bold',
  backgroundColor: 'transparent',
  color: '#fff',
  border: '2px solid #fff',
  borderRadius: '5px',
  cursor: 'pointer',
  marginRight: '1rem',
  transition: 'background-color 0.3s ease',
  boxShadow: '0 0 10px rgba(255, 255, 255, 0.3)',
};

const buttonIconStyle = {
  marginRight: '0.5rem',
};

const footerStyle = {
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  color: '#fff',
  padding: '2rem 0',
  marginTop: '2rem',
};

const footerContentStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'flex-start',
  maxWidth: '1200px',
  margin: '0 auto',
};

const footerHeadingStyle = {
  fontSize: '1.5rem',
  textShadow: '0 0 5px rgba(255, 255, 255, 0.3)',
};

const footerListStyle = { 
  listStyle: 'none',
  padding: 0,
};

const footerLegalStyle = {
  marginTop: '1rem',
  textAlign: 'center',
  textShadow: '0 0 5px rgba(255, 255, 255, 0.3)',
};

export default Home;
