import { Box } from "@mui/material";
import Hero from "./Hero";
import Lorem from "./Lorem";
import Image from "./Image";
import Games from "./Games";

const Home = () => {
  return (
    <Box display={"flex"} flexDirection={"column"} gap={5}>
      <Hero />
      <Lorem />
      <Image />
      <Games />
    </Box>
  );
};

export default Home;
