import React, { useEffect, useRef, useState } from "react";
import "./work_carousel.css";
import work_data from "../../../work_details";
import { Carousel } from "react-bootstrap";
import { motion, useScroll, useTransform } from "framer-motion";

const Work_Carousel = ({
  workIn,
  currentComp,
  amount,
  workNames,
  workImage,
}) => {

  const [workDetailsImages, setWorkDetailsImages] = useState();
  const [workDetailsNames, setWorkDetailsNames] = useState();
  const [workDetailsImage, setWorkDetailsImage] = useState();
  const [workDetailsName, setWorkDetailsName] = useState();
  const rightButton = useRef();
  const [condition,setCondition] = useState(true);

  useEffect(() => {
    const workDetailsImages = [];
    const workDetailsNames = [];
    const workDetailsImage = [];
    const workDetailsName = [];

    work_data?.forEach((data) => {
      const work = data.workImage;
      const wor = data.workName;
      workDetailsNames.push(wor);
      workDetailsImages.push(work);
    });
    workDetailsImages?.forEach((workDetail, index) => {
      workDetail?.forEach((detail, i) => {
        workDetailsImage.push(detail);
        workDetailsName.push(workDetailsNames[index][i]);
      });
    });

    setWorkDetailsImage([...workDetailsImage]);
    setWorkDetailsName([...workDetailsName]);

    if(condition){
      setTimeout(()=>{

        rightButton.current.click()
      },[50])
    }

  }, []);

  // console.log(workDetailsImages);

  // $(document).ready(function () {
  //   $('#workCarousel').carousel({ interval: 2000, cycle: true });
  // }); 


  const handleRightTransferButton = ()=>{
    setCondition(false)
  }

  return (
    <motion.div
       id="workCarousel"
      className="carousel workCarousel slide d-block w-100 h-100"
      data-bs-ride="carousel"
      data-bs-touch="false"
      data-bs-pause="true"
      // style={{ flex: 3, height: "100%" }}
    >
      <div
        className="carousel-inner"
        style={{ height: "100%", borderRadius: "30px", overflow:'hidden' }}
      >
        <div
          className="carousel-item active"
          data-bs-interval="0001"
          style={{ height: "100%", borderRadius: "30px" }}
        >
        <div style={{margin: "0 -5px"}} className="d-block w-100">&nbsp;</div>
        </div>
        {workDetailsName?.map((workDetail, index) => {
          return (
            <div
              className="carousel-item gradient-card"
              data-bs-interval="2000"
              style={{ height: "100%", borderRadius: "30px" }}
              key={workDetailsImage[index]}
            >
                      {/* <div style={{margin: "0 -5px"}} className="d-block w-100">&nbsp;</div> */}
              <img
                src={require(`../../../images/work${workDetailsImage[index]}`)}
                className="d-block w-100 h-100 make_cover"
                alt="..."
              />
            </div>
          );
        })}
      </div>
      <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#workCarousel"
          data-bs-slide="prev"
          disabled={!condition}
        >
          <span className="carousel-control-prev-icon visually-hidden" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#workCarousel"
          data-bs-slide="next"
          id="rightButton"
          ref={rightButton}
          disabled={!condition}
          onClick={handleRightTransferButton}
        >
          <span className="carousel-control-next-icon visually-hidden" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
    </motion.div>
  );
};

export default Work_Carousel;

{
  /* <div className="Work_Carousel">*/
}
{
  /* <div className="inner-work-carosuel" ref={innerWorkContainer}>
        {workDetailsName?.map((workDetail, index) => {
          return (
            <div
              ref={workCardContainer}
              className="work-card-container"
              style={{ transform: `translateY(-${trans * 100}%)` }}
              key={index}
            >
              <div className="work-name-container">{workDetail}</div>
              <div className="work-image-container">
                {workDetailsImage[index]}
              </div>
            </div>
          );
        })}
      </div> */
}
{
  /*</div>*/
}
