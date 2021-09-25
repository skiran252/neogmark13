import "./App.css";
import React, { useState } from "react";
import Header from "./components/header";
import Form from "./components/Form";
import SocialFollow from "./components/SocialFollow";
function App() {
  const [message, setMessage] = useState("");

  const checkIfLucky = (dob, luckynumber) => {
    try {
      const date = new Date(dob);
      const dateString =
        date.getDate().toString() +
        (date.getMonth() + 1).toString() +
        date.getFullYear().toString();
      const numArr = dateString.split("");
      let sum = numArr.reduce(function (a, b) {
        return parseInt(a) + parseInt(b);
      }, 0);
      if (sum % luckynumber === 0) {
        setMessage("🎉" + luckynumber + " is a lucky number 🎉 ");
      } else {
        setMessage("💔"+luckynumber + " is not a lucky number");
      }
    } catch (error) {
      setMessage("invalid date/number");
    }
  };
  return (
    <div >
      <div className="App container d-flex justify-content-center">
        <div className="card col-md-6 mt-5" style={{ padding: "5%" }}>
          <Header />
          <Form checkIfLucky={checkIfLucky} />
          <h1 className="mt-5">{message}</h1>
        </div>
      </div>

      <SocialFollow />
    </div>
  );
}

export default App;
