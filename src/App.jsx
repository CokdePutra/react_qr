import React, { useState } from "react";
import ReactDOM from "react-dom";
import QRCode from "react-qr-code";
import { DataUser } from "./constants/constants";
import "./App.css";

function App() {
  // Find the user with id = 1
  const userQR_Code = DataUser.find((user) => user.id === 1);

  // Encode user data as JSON if user is found
  const [value] = useState(userQR_Code ? JSON.stringify(userQR_Code) : "");

  return (
    <div className="App">
      {/* Display information about the user with id 1 */}
      {userQR_Code && (
        <div>
          <h3>User Information</h3>
          <p>Name: {userQR_Code.name}</p>
          <p>Email: {userQR_Code.email}</p>
        </div>
      )}

      {/* QR code with encoded JSON data */}
      <div
        style={{
          height: "auto",
          margin: "0 auto",
          maxWidth: 400,
          width: "100%",
        }}>
        <QRCode
          size={256}
          style={{ height: "auto", maxWidth: "100%", width: "100%" }}
          value={value}
          viewBox={`0 0 256 256`}
        />
      </div>
    </div>
  );
}

export default App;
