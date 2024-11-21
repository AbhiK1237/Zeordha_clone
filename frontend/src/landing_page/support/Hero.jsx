import React from "react";

function Hero() {
  return (
    <div className="container-fluid  supportHero">
      <div className="supportHead">
        <h3>Support Portal</h3>
        <p>
          <a href="">Track tickets</a>
        </p>
      </div>
      <div className="row">
        <div className="col-7 px-5">
          <h4 className="mb-4">
            Search for an answer or browse help topics to create a ticket
          </h4>
          <input
            type="text"
            className="mb-3"
            placeholder="Eg: how do i activate F&O,why is my order getting rejectedd ..."
          />
          <i class="fa-solid fa-magnifying-glass"></i>
          <br />
          <a href="">Track account opening</a>
          <a href="">Track segment activation</a>
          <a href=""> Intraday margins</a>
          <a href="">Kite user manual</a>
        </div>
        <div className="col-5 supportWrapper px-5">
          <h4>Featured</h4>
          <ol>
            <li>
              <a href="">Rights Entitlements listing in November 2024</a>
            </li>
            <li>
              <a href="">Rights Entitlements listing in November 2024</a>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Hero;
