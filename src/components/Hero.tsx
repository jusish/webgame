import { Box, Button, Typography } from "@mui/material";
import Trending from "./Trending";

const Hero = () => {
  return (
    <Box>
      <Box
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        marginLeft={20}
        marginRight={1}
        gap={5}
      >
        <Box>
          <Typography
            sx={{
              marginBottom: 2,
              color: "#FA8305",
              fontWeight: "bold",
              fontSize: "15px",
            }}
          >
            3D game Dev
          </Typography>
          <Typography sx={{ fontSize: "40px", fontWeight: "bold" }}>
            Work that we produce for <br />
            our clients
          </Typography>
          <Typography sx={{ fontSize: "16px", fontWeight: "normal" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. <br /> Lorem Ipsum has been the industry's standard.
          </Typography>
          <Button
            sx={{
              borderRadius: "30px",
              marginTop: 5,
              backgroundColor: "#FA8305",
              color: "white",
              paddingX: 3,
              paddingY: 1.5,
            }}
          >
            Get more Details
          </Button>
        </Box>
        <Box maxWidth={"400px"}>
          <img src="/joy_stick 1.png" alt="joystick" />
        </Box>
      </Box>
      <Box>
        <Box
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"space-between"}
          marginLeft={20}
          marginRight={20}
          marginTop={5}
        >
          <Typography variant="h5" fontWeight={"semi-bold"} fontSize={"20px"}>
            Currently Trending Games
          </Typography>
          <Typography
            variant="button"
            color="white"
            bgcolor={"gray"}
            textAlign={"center"}
            paddingX={2}
            paddingY={1}
            borderRadius={1}
            fontWeight={"bold"}
            sx={{ fontSize: "10px" }}
          >
            <button>SEE ALL</button>
          </Typography>
        </Box>
        <Box display={"flex"} flexDirection={"row"} flexWrap={"wrap"}>
          <Trending />
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
