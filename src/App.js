import "./App.css";
import React, { useState } from "react";
import Header from "./components/header";
import Form from "./components/Form";
import SocialFollow from "./components/SocialFollow";
const moment = require("moment");
function App() {
  const [message, setMessage] = useState("");

  const getnextDate = (date) => {
    let nextDay = new Date(date);
    nextDay.setDate(nextDay.getDate() + 1);
    return moment(nextDay).format("YYYY-MM-DD");
  };

  const getAllDateFormats = (dob) => {
    const requiredFormat = [
      "DD-MM-YYYY",
      "MM-DD-YYYY",
      "YYYY-MM-DD",
      "DD-MM-YY",
      "MM-DD-YY",
      "YY-MM-DD",
    ];
    const formats = [];
    requiredFormat.forEach((format) => {
      formats.push(moment(dob).format(format));
    });
    return formats;
  };

  const reverseString = (string) => {
    return string.split("").reverse().join("");
  };

  const isPalindrome = (dob) => {
    if (dob == null) return false;
    const allFormatDates = getAllDateFormats(dob);
    let valid = false;
    allFormatDates.forEach((date) => {
      const tempdate = date.replace(/-/g, "");
      if (tempdate.localeCompare(reverseString(tempdate)) === 0) {
        valid = true;
      }
    });
    return valid;
  };
  const checkIfPalindrome = (dob) => {
    try {
      if (isPalindrome(dob)) {
        setMessage("Yahoo! your birthday is a palindrome");
      } else {
        let nextDate = getnextDate(dob);
        let count = 0;
        while (!isPalindrome(nextDate)) {
          console.log(nextDate);
          count++;
          nextDate = getnextDate(nextDate);
        }
        setMessage(
          "Oops! The nearest palindrome date is " + moment(nextDate).format("DD-MM-YYYY")+
          ". you missed by " + (count+1)+ " days."
        ); 
      }
    } catch (error) {
      console.log(error);
      setMessage("invalid date");
    }
  };
  return (
    <div>
      <div className="App container d-flex justify-content-center">
        <div className="card col-md-6 mt-5" style={{ padding: "5%" }}>
          <Header />
          <Form checkIfPalindrome={checkIfPalindrome} />
          <h3 className="mt-5">{message}</h3>
        </div>
      </div>

      <SocialFollow />
    </div>
  );
}

export default App;
