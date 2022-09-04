import React from "react";
import styled from "@emotion/styled";

export const CarImageCarousel = ({ carImages }) => {
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
