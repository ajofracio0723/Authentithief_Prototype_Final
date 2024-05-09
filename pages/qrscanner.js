import React, { useState, useEffect, useRef } from 'react';
import QRCode from 'react-qr-code';
import Header from '../components/Header';
import { FaBitcoin, FaEthereum, FaCube, FaCamera } from 'react-icons/fa';
import jsQR from 'jsqr';

const QRScanner = () => {
  const [scannedResult, setScannedResult] = useState('');
  const [scanSuccess, setScanSuccess] = useState(false);
  const videoRef = useRef(null);
  const fileInputRef = useRef(null);
  const successMessageTimeoutRef = useRef(null);
  const successSoundRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
      .then((stream) => {
        video.srcObject = stream;
        video.play();
        requestAnimationFrame(scanQRCode);
      })
      .catch((err) => {
        console.error('Error accessing camera:', err);
      });

    const scanQRCode = () => {
      const canvas = document.createElement('canvas');
      const canvasContext = canvas.getContext('2d');

      if (video.readyState === video.HAVE_ENOUGH_DATA) {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        canvasContext.drawImage(video, 0, 0, canvas.width, canvas.height);
        const imageData = canvasContext.getImageData(0, 0, canvas.width, canvas.height);
        const code = jsQR(imageData.data, imageData.width, imageData.height);
        if (code) {
          setScannedResult(code.data);
          setScanSuccess(true);
          clearTimeout(successMessageTimeoutRef.current);
          successMessageTimeoutRef.current = setTimeout(() => setScanSuccess(false), 5000);
          successSoundRef.current.play();
        } else {
          setScanSuccess(false);
        }
      }

      requestAnimationFrame(scanQRCode);
    };

    return () => {
      if (video.srcObject) {
        video.srcObject.getTracks().forEach((track) => {
          track.stop();
        });
      }
    };
  }, []);

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement('canvas');
          const canvasContext = canvas.getContext('2d');
          canvas.width = img.width;
          canvas.height = img.height;
          canvasContext.drawImage(img, 0, 0, img.width, img.height);
          const imageData = canvasContext.getImageData(0, 0, canvas.width, canvas.height);
          const code = jsQR(imageData.data, imageData.width, imageData.height);
          if (code) {
            setScannedResult(code.data);
            setScanSuccess(true);
            clearTimeout(successMessageTimeoutRef.current);
            successMessageTimeoutRef.current = setTimeout(() => setScanSuccess(false), 5000);
            successSoundRef.current.play();
          } else {
            setScanSuccess(false);
          }
        };
        img.src = event.target.result;
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div style={containerStyle}>
      <Header />
      <div style={contentContainerStyle}>
        <div style={leftContentStyle}>
          <div style={logoContainerStyle}>
            <FaBitcoin style={cryptoIconStyle} />
            <FaEthereum style={cryptoIconStyle} />
            <FaCube style={cryptoIconStyle} />
          </div>
          <h1 style={titleStyle}>
            <FaCamera style={{ marginRight: '0.5rem' }} />
            QR Code Scanner
          </h1>
          <div style={scannerContainerStyle}>
            <video ref={videoRef} style={videoStyle} />
            {scanSuccess && (
              <div style={{ ...successMessageStyle, backgroundColor: '#d4edda' }} className="alert alert-success" role="alert">
                Scan Successful!
              </div>
            )}
          </div>
          <form style={scannedResultContainerStyle}>
            <label htmlFor="scannedResult" style={scannedResultLabelStyle}>Scanned Result:</label>
            <textarea id="scannedResult" name="scannedResult" value={scannedResult} style={scannedResultTextAreaStyle} readOnly />
          </form>
          <button onClick={() => fileInputRef.current.click()}>Upload QR Code Image</button>
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            style={{ display: 'none' }}
            onChange={handleFileInputChange}
          />
        </div>
      </div>
      <audio ref={successSoundRef} src="/1.mp3" />
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
};

const logoContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '2rem',
};

const cryptoIconStyle = {
  fontSize: '3rem',
  marginRight: '0.5rem',
};

const titleStyle = {
  fontSize: '3rem',
  fontWeight: 'bold',
  marginBottom: '2rem',
  textAlign: 'center',
  textShadow: '0 0 10px rgba(255, 255, 255, 0.5)',
};

const scannerContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: '100%',
  maxWidth: '500px',
  margin: '0 auto',
};

const videoStyle = {
  width: '100%',
  maxWidth: '100%',
  height: 'auto',
  borderRadius: '10px',
};

const successMessageStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  color: '#155724',
  border: '1px solid #c3e6cb',
  padding: '1rem',
  borderRadius: '0.25rem',
};

const scannedResultContainerStyle = {
  marginTop: '1rem',
};

const scannedResultLabelStyle = {
  fontSize: '1.5rem',
  fontWeight: 'bold',
  marginBottom: '0.5rem',
};

const scannedResultTextAreaStyle = {
  width: '100%',
  minHeight: '100px',
  padding: '0.5rem',
  borderRadius: '5px',
  border: '1px solid #ccc',
  fontSize: '1.2rem',
};

export default QRScanner;
