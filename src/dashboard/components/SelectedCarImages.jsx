import { Box, Paper } from "@mui/material";
import { useEffect } from "react";
import { Carousel } from "react-carousel-minimal";
import { useSelector } from "react-redux";

export const SelectedCarImages = () => {
  const { selectedCar } = useSelector((state) => state.cars);

  let data = [];

  for (const image of selectedCar.images) {
    let imageObj = { image: image };
    data.push(imageObj);
  }

  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };

  useEffect(() => {}, [data]);

  return (
    <Carousel
      data={data}
      time={10000}
      width={"100%"}
      height={"60vh"}
      captionStyle={captionStyle}
      radius="7px"
      slideNumber={true}
      slideNumberStyle={slideNumberStyle}
      captionPosition="bottom"
      automatic={true}
      //   dots={true}
      pauseIconColor="black"
      pauseIconSize="40px"
      slideBackgroundColor="black"
      slideImageFit="cover"
      thumbnails={true}
      thumbnailWidth="100px"
    />
  );
};
