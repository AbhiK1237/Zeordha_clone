import React from "react";

function Brokerage() {
  return (
    <div className="container">
      <div className="row text-center p-5">
        <div className="col-8 p-4 ">
          <a href="" style={{ textDecoration: "none" }}>
            <h3>Brokerage calculator</h3>
          </a>
          <ul
            style={{
              textAlign: "left",
              lineHeight: "2.3rem",
              fontSize: "15px",
            }}
            className="mt-4 text-muted"
          >
            <li>
              Call & Trade and RMS auto-squareoff: Additional charges of ₹50 +
              GST per order.
            </li>
            <li>Digital contract notes will be sent via e-mail.</li>

            <li>
              Physical copies of contract notes, if required, shall be charged
              220 per contract note. Courier charges apply.
            </li>
            <li>
              For NRI account (non-PIS), 0.5% or 2100 per executed order for
              equity (whichever is lower).
            </li>
            <li>
              For NRI account (PIS), 0.5% or 2200 per executed order for equity
              (whichever is lower).
            </li>
            <li>
              If the account is in debit balance, any order placed will be
              charged 240 per executed order instead of 20 per executed order.
            </li>
          </ul>
        </div>
        <div className="col ">
          <a href="" style={{ textDecoration: "none" }}>
            <h3>List of charges</h3>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
