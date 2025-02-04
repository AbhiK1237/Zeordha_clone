import { getAuth } from "firebase/auth";
import React from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../utils/useAuth";
function Hero() {
  const user = useAuth();
  const navigate = useNavigate();
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <img
          src="media/images/homeHero.png"
          alt="Hero Image"
          className="mb-5"
        />
        <h1 className="mt-5">Invest in everything</h1>
        <p>
          Online platform to invest in stocks, derivatives, mutual funds, and
          more
        </p>

        <button
          className="p-2 fs-4 btn btn-outline-primary border border-black "
          style={{ width: "20%", margin: "0 auto" }}
          onClick={() => {
            user ? navigate("/dashboard") : navigate("/login");
          }}
        >
          <img
            src="https://images.seeklogo.com/logo-png/48/2/zerodha-kite-logo-png_seeklogo-487028.png"
            alt=""
            width={40}
            height={40}
            className="mb-1"
          />
          {"   "}
          <span>Kite</span>
        </button>
      </div>
    </div>
  );
}

export default Hero;
