import { Box, Typography } from "@mui/material";

const RecentProjects = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      gap={1}
      marginTop={10}
      marginX={20}
    >
      <Typography variant="h5" color="white" width={"70%"} textAlign={"center"}>
        Our Recent Projects
      </Typography>
      <Typography
        variant="body1"
        color="white"
        width={"60%"}
        textAlign={"center"}
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </Typography>

      <Box
        display={"flex"}
        flexDirection={"row"}
        flexWrap={"wrap"}
        gap={2}
        marginTop={5}
      >
        <img
          src="/Rectangle 15.png"
          alt="project 1"
          style={{ maxWidth: "300px" }}
        />
        <img
          src="/Rectangle 16.png"
          alt="project 2"
          style={{ maxWidth: "300px" }}
        />
        <img
          src="/Rectangle 17.png"
          alt="project 3"
          style={{ maxWidth: "300px" }}
        />
        <img
          src="/Rectangle 19.png"
          alt="project 5"
          style={{ maxWidth: "300px" }}
        />
        <img
          src="/Rectangle 18.png"
          alt="project 4"
          style={{ maxWidth: "300px" }}
        />

        <img
          src="/Rectangle 20.png"
          alt="project 6"
          style={{ maxWidth: "300px" }}
        />
      </Box>
      <Typography
        variant="button"
        color="white"
        bgcolor={"gray"}
        textAlign={"center"}
        paddingX={2}
        paddingY={1}
        borderRadius={1}
        sx={{ fontSize: "10px" }}
        marginTop={5}
        fontWeight={"bold"}
      >
        <button>SEE ALL</button>
      </Typography>
    </Box>
  );
};

export default RecentProjects;
