import { useLocation } from "react-router-dom";
import QRCode from "react-qr-code";
import './qrcode.css';

function QRcode() {
  const location = useLocation();
  const data = location.state;

  return (
    <>
    
      <h2>QR Code Generator</h2>

      {data ? (
        <div className="QR">
          <QRCode value={JSON.stringify(data)} size={200} />
           </div>
      ) : (
        <p>No product data received.</p>
      )}
     
      </>
  );
}

export default QRcode;
