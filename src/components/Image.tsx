import { Box, Typography } from "@mui/material";

const Image = () => {
  return (
    <Box marginX={20} display={"flex"} flexDirection={"column"} gap={3}>
      <Typography variant="h4" color="white">
        Lorem Ipsum
      </Typography>
      <Typography variant="body1" color="white" width={"60%"}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s,
      </Typography>
      <img src="/public/Rectangle 4.png" alt="Spiderman" />
    </Box>
  );
};

export default Image;
