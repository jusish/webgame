import { Box } from "@mui/material";
import Hero from "./Hero";
import Lorem from "./Lorem";
import Image from "./Image";

const Home = () => {
  return (
    <Box display={"flex"} flexDirection={"column"} gap={5}>
      <Hero />
      <Lorem />
      <Image />
    </Box>
  );
};

export default Home;
