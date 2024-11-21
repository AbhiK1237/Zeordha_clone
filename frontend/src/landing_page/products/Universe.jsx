import React from "react";

function Universe() {
  return (
    <div className="container mt-5 p-5">
      <div className="row text-center text-muted">
        <h2>The Zerodha Universe</h2>
        <h6 className="mt-3">
          Extend your trading and investment experience even further with our
          partner platforms
        </h6>
        <div className="col-4 mt-5 p-5">
          <img
            src="media/images/zerodhaFundhouse.png"
            alt=""
            style={{ width: "50%" }}
          />
          <p className="fs-6  mt-3">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4 mt-5 p-5">
          <img
            src="media/images/sensibullLogo.svg"
            alt=""
            style={{ width: "50%" }}
          />
          <p className="fs-6  mt-3">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col-4 mt-5 p-5">
          <img
            src="media/images/goldenpiLogo.png"
            alt=""
            style={{ width: "50%" }}
          />
          <p className="fs-6  mt-3">
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>
        <div className="col-4  p-5">
          <img
            src="media/images/streakLogo.png"
            alt=""
            style={{ width: "50%" }}
          />
          <p className="fs-6  mt-3">
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>
        <div className="col-4  p-5">
          <img
            src="media/images/smallcaseLogo.png"
            alt=""
            style={{ width: "50%" }}
          />
          <p className="fs-6 mt-3">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFS.
          </p>
        </div>
        <div className="col-4 p-5">
          <img
            src="media/images/dittoLogo.png"
            alt=""
            style={{ width: "50%" }}
          />
          <p className="fs-6 mt-3">
            Personalized advice on life and health insurance. No spam and no
            mis-selling.
          </p>
        </div>
        <button
          style={{ width: "20%", margin: "0 auto" }}
          className="p-2 my-2 fs-5 btn btn-primary"
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default Universe;
