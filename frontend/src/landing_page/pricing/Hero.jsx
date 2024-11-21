import React from "react";

function Hero() {
  return (
    <div className="container mt-5 text-center">
      <div className="row mb-5 " style={{ padding: "4rem" }}>
        <h1>Charges</h1>
        <h4 className="mt-2 " style={{ fontWeight: "300", color: "grey" }}>
          List of all charges and taxes
        </h4>
      </div>
      <div className="row mt-5 px-5">
        <div className="col p-5">
          <img
            src="media/images/pricingEquity.svg"
            alt="pricing 0"
            style={{ width: "80%" }}
          />
          <h3>Free equity delivery</h3>
          <p className="mt-3 text-muted " style={{ lineHeight: "1.8rem" }}>
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col p-5">
          <img
            src="media/images/intradayTrades.svg"
            alt="pricing 0"
            style={{ width: "80%" }}
          />
          <h3>Intraday and F&O trades</h3>
          <p className="mt-3 text-muted" style={{ lineHeight: "1.8rem" }}>
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col p-5 ">
          <img
            src="media/images/pricingEquity.svg"
            alt="pricing 0"
            style={{ width: "80%" }}
          />
          <h3>Free direct MF</h3>
          <p className="mt-3 text-muted" style={{ lineHeight: "1.8rem" }}>
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
