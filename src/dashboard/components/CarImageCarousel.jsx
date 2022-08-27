import React from "react";
import { Carousel } from "@trendyol-js/react-carousel";
import styled from "styled-components";

export const CarImageCarousel = ({ carImages }) => {
  console.log(carImages);

  const ImageWrapper = styled.div`
    height: 100%;
    width: 100%;

    background-image: url("${carImages[0]}");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 10px 0 0 10px;
  `;

  return (
    <>
      {/* <Carousel
        show={1}
        slide={1}
        transition={0.5}
        swiping={true}
        autoSwipe={2}
        hideArrows={true}
      > */}
      <ImageWrapper></ImageWrapper>
      {/* </Carousel> */}
    </>
  );
};
