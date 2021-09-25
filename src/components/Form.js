import React, { useState } from "react";

export default function Form({checkIfPalindrome}) {
  const [dob, setDOB] = useState(new Date());
  return (
    <div className="d-flex justify-content-center">
      <div>
        <div className="form-group mt-2">
          <label>Date Of Birth</label>
          <input
            className="form-control"
            type="date"
            value={dob}
            onChange={(event) => setDOB(event.target.value)}
          />
        </div>
        <button className="btn btn-primary mt-5" onClick={()=>checkIfPalindrome(dob)} >Check Palindrome</button>
      </div>
    </div>
  );
}
