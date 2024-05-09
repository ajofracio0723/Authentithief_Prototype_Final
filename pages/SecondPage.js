import React from 'react';
import Image from 'next/image';
import image4 from '../public/images/4.png'; 

const SecondPage = () => {
  return (
    <div style={containerStyle}>
      <footer style={footerStyle}>
        <div style={footerContentStyle}>
          {/* Footer content */}
          <h2 style={{ fontWeight: 'bold' }}>What is Blockchain?</h2>
        </div>
      </footer>
      <Image src={image4} alt="Image 4" style={imageStyle} />
    </div>
  );
};

const containerStyle = {
  position: 'relative',
  minHeight: '100vh',
};

const footerStyle = {
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  color: '#fff',
  padding: '2rem 0',
};

const footerContentStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'flex-start',
  maxWidth: '1200px',
  margin: '0 auto',
};

const imageStyle = {
  position: 'absolute',
  bottom: '0',
  left: '50%',
  transform: 'translateX(-50%)',
};

export default SecondPage;
