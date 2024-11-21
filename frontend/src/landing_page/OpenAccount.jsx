import React from "react";
import { useNavigate } from "react-router-dom";
function OpenAccount() {
  const navigate = useNavigate();

  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <h1 className="mt-5 ">Open a Zerodha account</h1>
        <p className="mt-2">
          Modern platforms and apps, 20 investments, and flat 220 intraday and
          F&O trades.
        </p>
        <button
          style={{ width: "20%", margin: "0 auto" }}
          className="p-2 mt-2 fs-5 btn btn-primary"
          onClick={() => navigate("/signup")}
        >
          Sign up now
        </button>
      </div>
    </div>
  );
}

export default OpenAccount;
