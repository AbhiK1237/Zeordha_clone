import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RighSection from "./RightSection";
import Universe from "./Universe";
import Cookies from "js-cookie";
function ProductPage() {
  return (
    <>
      <Hero />
      <LeftSection
        imageUrl="media/images/kite.png"
        product="Kite"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        productLinkName="Try demo"
        productLink="http://localhost:3001/"
        productInfo="Learn more"
        googlePlay=""
        appStore=""
      />
      <RighSection
        product="Console"
        productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        productLinkName="Learn more"
        productLink="/product"
        imageUrl="media/images/console.png"
      />
      <LeftSection
        imageUrl="media/images/coin.png"
        product="Coin"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        productLinkName="Coin"
        productLink=""
        productInfo=""
        token=""
        googlePlay=""
        appStore=""
      />
      <RighSection
        product="Kite Connect Api"
        productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        productLinkName="Kite Connect"
        productLink="/product"
        imageUrl="media/images/kiteconnect.png"
      />
      <LeftSection
        imageUrl="media/images/varsity.png"
        product="Varsity mobile"
        productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        productLinkName=""
        productLink=""
        productInfo=""
        token=""
        googlePlay=""
        appStore=""
      />
      <p className="text-center mt-5 fs-4">
        Want to know more about our technology stack? Check out the&nbsp;
        <a href="" style={{ textDecoration: "none" }}>
          Zerodha.tech&nbsp;
        </a>
        blog.
      </p>
      <Universe />
    </>
  );
}

export default ProductPage;
