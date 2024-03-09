import { Box, Typography } from "@mui/material";

const Image = () => {
  return (
    <Box marginX={20} display={"flex"} flexDirection={"column"} gap={2}>
      <Typography sx={{ fontSize: "20px", fontWeight: "bold" }} color="white">
        Lorem Ipsum
      </Typography>
      <Typography sx={{ fontSize: "16px" }} color="white" width={"60%"}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s,
      </Typography>
      <Box>
        <img
          src="/Rectangle 4.png"
          alt="Spiderman"
          style={{ height: "400px", width: "100%" }}
        />
      </Box>
    </Box>
  );
};

export default Image;
