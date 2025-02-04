import React from "react";
import Cookies from "js-cookie";
function LeftSection({
  imageUrl,
  product,
  productDescription,
  productLinkName,
  productLink,
  productInfo,
  googlePlay,
  appStore,
}) {
  const token = Cookies.get("Token");
  return (
    <div className="container mt-5">
      <div className="row d-flex  align-items-center justify-content-between">
        <div className="col-7 text-center mt-5">
          <img src={imageUrl} alt="" />
        </div>
        <div className="col-4 p-5">
          <h2 className="mb-3" style={{ letterSpacing: "0.04rem" }}>
            {product}
          </h2>
          <p
            className="mb-4"
            style={{ lineHeight: "2rem", letterSpacing: "0.04rem" }}
          >
            {productDescription}
          </p>
          <div className="mb-4">
            {productLinkName && (
              <a
                href={token ? productLink : "/login"}
                style={{ marginRight: "3rem", textDecoration: "none" }}
              >
                {productLinkName} <i class="fa-solid fa-arrow-right"></i>
              </a>
            )}
            {productInfo && (
              <a href="/product" style={{ textDecoration: "none" }}>
                {productInfo} <i class="fa-solid fa-arrow-right"></i>
              </a>
            )}
          </div>
          <div>
            <a href={googlePlay} style={{ marginRight: "2rem" }}>
              <img src="media/images/googlePlayBadge.svg" alt="google Play" />
            </a>
            <a href={appStore}>
              <img src="media/images/appstoreBadge.svg" alt="app store" />
            </a>
          </div>
        </div>
        <div className="col-1"></div>
      </div>
    </div>
  );
}

export default LeftSection;
