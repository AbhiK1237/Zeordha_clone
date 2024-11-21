import React from "react";

function Hero() {
  return (
    <div className="container border-bottom text-center mt-5 p-5 ">
      <div className="row pb-5">
        <h1 style={{ fontSize: "3rem" }}>Zerodha Products</h1>
        <p className="fs-4 text-muted mt-3">
          Sleek, modern, and intuitive trading platforms
        </p>
        <p>
          Check out our&nbsp;
          <a href="" style={{ textDecoration: "none" }}>
            investment offerings <i class="fa-solid fa-arrow-right"></i>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Hero;
