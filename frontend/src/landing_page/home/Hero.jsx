import { signInWithGooglePopup } from "../../utils/firebase.utils";
import React from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../utils/useAuth";
function Hero() {
  const user = useAuth();
  const navigate = useNavigate();
  const handleLogin = async (url) => {
    const response = await signInWithGooglePopup();
    console.log(response);
    window.location.href = url;
  };
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
            user
              ? (window.location.href = "http://localhost:3001")
              : handleLogin("http://localhost:3001");
          }}
        >
          <img
            src="https://images.seeklogo.com/logo-png/48/2/zerodha-kite-logo-png_seeklogo-487028.png"
            alt=""
            width={40}
            height={40}
            className="mr-1 mb-1"
          />
          {"   "}
          <span className="me-1">Kite</span>
        </button>
      </div>
    </div>
  );
}

export default Hero;
