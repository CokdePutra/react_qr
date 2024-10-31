import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import QRCode from "react-qr-code";
import { DataUser } from "./constants/constants";
import "./App.css";

function App() {
  const [userQR_Code, setUserQR_Code] = useState(null);
  const [value, setValue] = useState("");

  useEffect(() => {
    // Define async function to simulate fetching user data
    const fetchUserData = async () => {
      // Simulate an asynchronous operation, e.g., fetching data from an API
      const user = await new Promise((resolve) =>
        setTimeout(() => resolve(DataUser.find((user) => user.id === 0)), 500)
      );

      // Update states with fetched data
      setUserQR_Code(user);
      setValue(JSON.stringify(user));
    };

    fetchUserData();
  }, []);

  return (
    <div className="App">
      {/* Display information about the user with id 0 */}
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
        {value && (
          <QRCode
            size={256}
            style={{ height: "auto", maxWidth: "100%", width: "100%" }}
            value={value}
            viewBox={`0 0 256 256`}
          />
        )}
      </div>
    </div>
  );
}

export default App;
