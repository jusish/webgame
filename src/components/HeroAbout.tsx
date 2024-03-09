import { Box, Typography, Button } from "@mui/material";

const HeroAbout = () => {
  return (
    <Box>
      <Box
        display={"flex"}
        flexDirection={"row"}
        justifyItems={"center"}
        alignItems={"center"}
        marginLeft={10}
        marginRight={8}
        gap={5}
      >
        <Box>
          <Typography
            variant="h6"
            sx={{ marginBottom: 2, color: "#FA8305", fontWeight: "bold" }}
          >
            3D game Dev
          </Typography>
          <Typography sx={{ fontSize: "38px" }}>
            Lorem Ipsum is simply dummy text of the printing and.
          </Typography>
          <Typography sx={{ fontSize: "15px" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
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
    </Box>
  );
};

export default HeroAbout;
