import { Avatar, Box, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Games = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      gap={2}
      marginTop={10}
      marginX={20}
      bgcolor={"#1C140F"}
      padding={5}
      borderRadius={5}
    >
      <Typography variant="h5" color="white" width={"70%"} textAlign={"center"}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </Typography>
      <Typography
        variant="body1"
        color="white"
        width={"60%"}
        textAlign={"center"}
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s,
      </Typography>
      <Box
        marginY={5}
        display={"flex"}
        flexDirection={"row"}
        gap={10}
        flexWrap={"wrap"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          gap={2}
        >
          <Avatar alt="Mobile" src="/public/Group 48.png" />
          <Typography variant="body1" color="white">
            Mobile Game Development
          </Typography>
          <ArrowForwardIcon sx={{ fill: "#FA8305" }} />
        </Box>
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          gap={2}
        >
          <Avatar alt="Mobile" src="/public/Group 48.png" />
          <Typography variant="body1" color="white">
            Mobile Game Development
          </Typography>
          <ArrowForwardIcon sx={{ fill: "#FA8305" }} />
        </Box>
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          gap={2}
        >
          <Avatar alt="Mobile" src="/public/Group 48.png" />
          <Typography variant="body1" color="white">
            Mobile Game Development
          </Typography>
          <ArrowForwardIcon sx={{ fill: "#FA8305" }} />
        </Box>
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          gap={2}
        >
          <Avatar alt="Mobile" src="/public/Group 48.png" />
          <Typography variant="body1" color="white">
            Mobile Game Development
          </Typography>
          <ArrowForwardIcon sx={{ fill: "#FA8305" }} />
        </Box>
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          gap={2}
        >
          <Avatar alt="Mobile" src="/public/Group 48.png" />
          <Typography variant="body1" color="white">
            Mobile Game Development
          </Typography>
          <ArrowForwardIcon sx={{ fill: "#FA8305" }} />
        </Box>
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          gap={2}
        >
          <Avatar alt="Mobile" src="/public/Group 48.png" />
          <Typography variant="body1" color="white">
            Mobile Game Development
          </Typography>
          <ArrowForwardIcon sx={{ fill: "#FA8305" }} />
        </Box>
      </Box>
    </Box>
  );
};

export default Games;
