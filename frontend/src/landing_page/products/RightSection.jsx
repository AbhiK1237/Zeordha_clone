import React from "react";

function RighSection({
  product,
  productDescription,
  productLinkName,
  productLink,
  imageUrl,
}) {
  return (
    <div className="container  mt-5">
      <div className="row d-flex  align-items-center justify-content-between">
        <div className="col-1"></div>
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
            {productLink && (
              <a
                href={productLink}
                style={{ marginRight: "3rem", textDecoration: "none" }}
              >
                {productLinkName} <i class="fa-solid fa-arrow-right"></i>
              </a>
            )}
          </div>
        </div>

        <div className="col-7 text-center mt-5 ">
          <img src={imageUrl} alt="" />
        </div>
      </div>
    </div>
  );
}

export default RighSection;
