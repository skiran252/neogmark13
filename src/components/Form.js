import React, { useState } from "react";

export default function Form({checkIfLucky}) {
  const [dob, setDOB] = useState(new Date());
  const [luckynumber, setluckynumber] = useState(0);
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
        <div className="form-group mt-2">
          <label>Your lucky number</label>
          <input
            type="number"
            min="0"
            className="form-control"
            id="luckynumber"
            value={parseInt(luckynumber)}
            onChange={(event) => setluckynumber(event.target.value)}
            placeholder="Enter your lucky number"
          />
        </div>
        <button className="btn btn-primary mt-5" onClick={()=>checkIfLucky(dob,luckynumber)} >Check if lucky</button>
      </div>
    </div>
  );
}
