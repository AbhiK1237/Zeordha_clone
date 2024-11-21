import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row mt-5 text-center ">
        <h1 className="mb-5">People</h1>
      </div>
      <div className="row mx-5 mb-5">
        <div
          className="col fs-6 text-muted text-center"
          style={{ lineHeight: "2rem" }}
        >
          <img
            src="media/images/nithinKamath.jpg"
            style={{ borderRadius: "100%", width: "50%" }}
            alt="nithin Kamath"
          />
          <h4 className="mt-4">Nithin Kamath</h4>
          <h6>Founder, CEO</h6>
        </div>
        <div className="col fs-6 text-muted" style={{ lineHeight: "2rem" }}>
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen. </p>
          <p>
            Connect on&nbsp;
            <a href="" style={{ textDecoration: "none" }}>
              Homepage&nbsp;
            </a>
            /
            <a href="" style={{ textDecoration: "none" }}>
              TradingQnA&nbsp;
            </a>
            /
            <a href="" style={{ textDecoration: "none" }}>
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
