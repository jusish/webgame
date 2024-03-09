import { Box, Typography } from "@mui/material";
import { Card } from "flowbite-react";

const CardList = () => {
  return (
    <Box marginX={10} display={"flex"} flexDirection={"column"} gap={3}>
      <Typography variant="body1" color="white">
        Lorem Ipsum
      </Typography>
      <Box display="flex" gap={2} flexDirection={"row"} flexWrap={"wrap"}>
        <Card href="#" className="max-w-sm bg-[#1C140F] hover:bg-black">
          <p className="bg-[#B000DC] p-1 w-[40%] rounded-md text-center">
            Lorem ipsum
          </p>
          <h5 className="text-2xl font-bold text-white ">Lorem Ipsum</h5>
          <p className="font-normal text-white ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,Here are the biggest enterprise technology
            acquisitions of 2021 so far, in reverse chronological order.
          </p>
        </Card>
        <Card href="#" className="max-w-sm bg-[#1C140F] hover:bg-black">
          <p className="bg-[#DC4200] p-1 w-[40%] rounded-md text-center">
            Lorem ipsum
          </p>
          <h5 className="text-2xl font-bold text-white ">Lorem Ipsum</h5>
          <p className="font-normal text-white ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,Here are the biggest enterprise technology
            acquisitions of 2021 so far, in reverse chronological order.
          </p>
        </Card>
        <Card href="#" className="max-w-sm bg-[#1C140F] hover:bg-black">
          <p className="bg-[#00DC8D] p-1 w-[40%] rounded-md text-center">
            Lorem ipsum
          </p>
          <h5 className="text-2xl font-bold text-white ">Lorem Ipsum</h5>
          <p className="font-normal text-white ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,Here are the biggest enterprise technology
            acquisitions of 2021 so far, in reverse chronological order.
          </p>
        </Card>
      </Box>
    </Box>
  );
};

export default CardList;
