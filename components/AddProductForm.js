import React, { useState } from 'react';
import QRCode from 'react-qr-code';
import Header from './Header';
import { FaBitcoin, FaEthereum, FaCube, FaPlusCircle } from 'react-icons/fa'; // Importing icons

const AddProductForm = ({ onAdd }) => {
  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [uniqueIdentifier, setUniqueIdentifier] = useState('');
  const [qrCodeData, setQRCodeData] = useState('');
  const [products, setProducts] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!productName || !description || !uniqueIdentifier) {
      alert('Please fill in all fields');
      return;
    }
    const newProduct = {
      productName,
      description,
      uniqueIdentifier
    };
    onAdd(newProduct);
    const data = JSON.stringify(newProduct);
    setQRCodeData(data);
    setProducts([...products, newProduct]);
    setProductName('');
    setDescription('');
    setUniqueIdentifier('');
  };

  return (
    <div style={backgroundStyle}>
      <Header />
      <div className="container-fluid pt-4">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card" style={cardStyle}>
              <div className="card-body">
                <div className="d-flex align-items-center justify-content-center mb-4">
                  {/* Bitcoin icon */}
                  <FaBitcoin style={iconStyle} />
                  {/* Ethereum icon */}
                  <FaEthereum style={iconStyle} />
                  {/* Blockchain icon */}
                  <FaCube style={iconStyle} />
                </div>
                <h1 className="text-center mb-4" style={headingStyle}>
                  <FaPlusCircle style={{ marginRight: '0.5rem' }} /> Manufacturers
                </h1>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <strong><label htmlFor="productName" className="form-label" style={labelStyle}>Product Name</label></strong>
                    <input type="text" className="form-control" id="productName" value={productName} onChange={(e) => setProductName(e.target.value)} style={inputStyle} />
                  </div>
                  <div className="mb-3">
                    <strong><label htmlFor="description" className="form-label" style={labelStyle}>Description</label></strong>
                    <textarea className="form-control" id="description" value={description} onChange={(e) => setDescription(e.target.value)} style={inputStyle} />
                  </div>
                  <div className="mb-3">
                    <strong><label htmlFor="uniqueIdentifier" className="form-label" style={labelStyle}>Unique Identifier</label></strong>
                    <input type="text" className="form-control" id="uniqueIdentifier" value={uniqueIdentifier} onChange={(e) => setUniqueIdentifier(e.target.value)} style={inputStyle} />
                  </div>
                  <button type="submit" className="btn btn-primary" style={buttonStyle}>
                    <FaPlusCircle style={{ marginRight: '0.5rem' }} /> Add Product to Blockchain
                  </button>
                </form>
                {qrCodeData && (
                  <div className="text-center mt-4">
                    <h2 className="mb-3" style={headingStyle}>QR Code</h2>
                    <QRCode value={qrCodeData} size={256} bgColor="#ffffff" fgColor="#000000" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col">
            <h2 className="text-center" style={headingStyle}>Added Products</h2>
            <div style={scrollableContainerStyle}>
              <div className="row">
                {products.map((product, index) => (
                  <div key={index} className="col-md-4 mb-4">
                    <div className="card" style={cardStyle}>
                      <div className="card-body">
                        <p className="card-text" style={textStyle}><strong>Product {index + 1}</strong></p>
                        <p className="card-text" style={textStyle}><strong>Product Name:</strong> {product.productName}</p>
                        <p className="card-text" style={textStyle}><strong>Description:</strong> {product.description}</p>
                        <p className="card-text" style={textStyle}><strong>Unique Identifier:</strong> {product.uniqueIdentifier}</p>
                        <QRCode value={JSON.stringify(product)} size={128} bgColor="#ffffff" fgColor="#000000" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const backgroundStyle = {
  background: 'linear-gradient(to bottom, #201e3c, #0c0d1d)',
  minHeight: '100vh',
  color: '#fff',
};

const cardStyle = {
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(5px)',
  boxShadow: '0 0 20px rgba(0, 0, 0, 0.5)',
  border: 'none',
};

const headingStyle = {
  color: '#fff',
  textShadow: '0 0 10px rgba(255, 255, 255, 0.5)',
};

const labelStyle = {
  color: '#fff',
  textShadow: '0 0 5px rgba(255, 255, 255, 0.3)',
};

const inputStyle = {
  backgroundColor: 'rgba(255, 255, 255, 0.2)',
  color: '#fff',
  border: 'none',
};

const buttonStyle = {
  backgroundColor: 'transparent',
  color: '#fff',
  border: '2px solid #fff',
  borderRadius: '5px',
  boxShadow: '0 0 10px rgba(255, 255, 255, 0.3)',
  transition: 'background-color 0.3s ease',
};

const textStyle = {
  color: '#fff',
  textShadow: '0 0 5px rgba(255, 255, 255, 0.3)',
};

const scrollableContainerStyle = {
  maxHeight: '400px',
  overflowY: 'auto',
};

const iconStyle = {
  fontSize: '2.5rem', // Increased size
  color: '#fff', // Changed color to white
  marginRight: '1rem',
};

export default AddProductForm;
