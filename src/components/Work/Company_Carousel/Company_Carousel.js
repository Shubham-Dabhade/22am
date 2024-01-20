import React, { useEffect, useRef, useState } from "react";
import "./company_carousel.css";
import work_data from "../../../work_details";

const Company_Carousel = () => {
  const [logoDetailsImage, setLogoDetailsImage] = useState();
  const [logoDetailsName, setLogoDetailsName] = useState();
  const [workDetailsName, setWorkDetailsName] = useState();
  const [workDetailsImage, setWorkDetailsImage] = useState();
  const [amount, setAmount] = useState();

  const rightButtonTop = useRef();
  const [conditionTop, setConditionTop] = useState(true);
  const rightButtonBottom = useRef();
  const [conditionBottom, setConditionBottom] = useState(true);

  useEffect(() => {
    const logoDetailsImage = [];
    const logoDetailsName = [];
    const amountDetail = [];
    const workDetailsNames = [];
    const workDetailsName = [];
    const workDetailsImages = [];
    const workDetailsImage = [];

    work_data?.forEach((data) => {
      const logo = data.logoName;
      const logoImage = data.logoImage;
      const work = data.workImage;
      const wor = data.workName;
      workDetailsImages.push(work);
      workDetailsNames.push(wor);
      const amount = data.amount;
      logoDetailsName.push(logo);
      logoDetailsImage.push(logoImage);
      amountDetail.push(amount);
    });

    workDetailsNames?.forEach((workDetail, index) => {
      workDetail?.forEach((detail, i) => {
        workDetailsName.push(detail);
      });
    });
    workDetailsImages?.forEach((workDetail, index) => {
      workDetail?.forEach((detail, i) => {
        workDetailsImage.push(detail);
      });
    });

    setWorkDetailsImage([...workDetailsImage]);

    setLogoDetailsImage([...logoDetailsImage]);
    setLogoDetailsName([...logoDetailsName]);
    setAmount([...amountDetail]);
    setWorkDetailsName([...workDetailsName]);

    if (conditionTop) {
      setTimeout(() => {
        rightButtonTop.current.click();
        rightButtonBottom.current.click();
      }, [50]);
    }

  }, []);

  // const generateKey = (pre) => {
  //   return `${pre}_${new Date().getTime()}`;
  // };

  const handleRightTransferButtonTop = () => {
    setConditionTop(false);
  };

  const handleRightTransferButtonBottom = () => {
    setConditionBottom(false);
  };

  return (
    <div className="logoCarouselContainer">
      <div
        id="logoCarousel"
        className="carousel carousel-dark slide d-block w-100 h-100"
        data-bs-ride="carousel"
        data-bs-touch="false"
        data-bs-pause="true"
        // style={{ flex: 2, height: "100%" }}
      >
        <div
          className="carousel-inner"
          style={{ height: "100%", borderRadius: "30px" }}
        >
          <div
            className="carousel-item active"
            data-bs-interval="0001"
            style={{ height: "100%", borderRadius: "30px" }}
          ></div>
          {logoDetailsName?.map((logoName, index) => {
            return (
              <div
                className="carousel-item"
                data-bs-interval={amount[index] * 2000}
                style={{ height: "100%", borderRadius: "30px" }}
                key={logoName}
              >
                <div
                  className="carousel-caption-logo-name d-block d-md-block"
                  style={{ color: "white" }}
                >
                  <h5>{logoName}</h5>
                </div>
              </div>
            );
          })}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#logoCarousel"
          data-bs-slide="prev"
          disabled={!conditionTop}
        >
          <span
            className="carousel-control-prev-icon visually-hidden"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#logoCarousel"
          data-bs-slide="next"
          id="rightButton"
          ref={rightButtonTop}
          disabled={!conditionTop}
          onClick={handleRightTransferButtonTop}
        >
          <span
            className="carousel-control-next-icon visually-hidden"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div
        id="workNameCarousel"
        className="carousel carousel-dark slide d-block w-100 h-100"
        data-bs-ride="carousel"
        data-bs-touch="false"
        data-bs-pause="true"
        // style={{ flex: 2, height: "100%" }}
      >
        <div
          className="carousel-inner"
          style={{ height: "100%", borderRadius: "30px" }}
        >
          <div
            className="carousel-item active"
            data-bs-interval="0001"
            style={{ height: "100%", borderRadius: "30px" }}
          ></div>
          {workDetailsName?.map((workName, index) => {
            return (
              <div
                className="carousel-item"
                data-bs-interval={2000}
                style={{ height: "100%", borderRadius: "30px" }}
                key={workDetailsImage[index]}
              >
                <div
                  className="carousel-caption-work-name d-block d-md-block d-block w-100 h-50"
                  style={{ color: "black" }}
                >
                  <h5>{workName}</h5>
                </div>
              </div>
            );
          })}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#workNameCarousel"
          data-bs-slide="prev"
          disabled={!conditionBottom}
        >
          <span
            className="carousel-control-prev-icon visually-hidden"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#workNameCarousel"
          data-bs-slide="next"
          id="rightButton"
          ref={rightButtonBottom}
          disabled={!conditionBottom}
          onClick={handleRightTransferButtonBottom}
        >
          <span
            className="carousel-control-next-icon visually-hidden"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Company_Carousel;
