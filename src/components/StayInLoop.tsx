import { Box, Typography } from "@mui/material";
import Search from "./Search";

const StayInLoop = () => {
  return (
    <Box
      marginX={20}
      display={"flex"}
      flexDirection={"column"}
      gap={3}
      marginBottom={2}
    >
      <Typography variant="h4" color="white">
        Lorem Ipsum
      </Typography>
      <Typography variant="body1" color="white" width={"60%"}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s,
      </Typography>
      <Box
        display={"flex"}
        flexDirection={"row"}
        bgcolor={"#1C140F"}
        padding={5}
        borderRadius={3}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box gap={1} display={"flex"} flexDirection={"column"}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }} color="white">
            Stay in the loop
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontSize: "16px" }}
            color="white"
            width={"60%"}
          >
            Subscribe to receive the latest news and updates about TDA. We
            promise not to spam you!
          </Typography>
        </Box>
        <Box>
          <Search />
        </Box>
      </Box>
    </Box>
  );
};

export default StayInLoop;
