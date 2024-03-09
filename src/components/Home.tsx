import { Box } from "@mui/material";
import Hero from "./Hero";
import Lorem from "./Lorem";
import Image from "./Image";
import Games from "./Games";
import RecentProjects from "./RecentProjects";
import StayInLoop from "./StayInLoop";
import FooterComp from "./FooterComp";

const Home = () => {
  return (
    <Box display={"flex"} flexDirection={"column"} gap={5}>
      <Hero />
      <Lorem />
      <Image />
      <Games />
      <RecentProjects />
      <StayInLoop />
      <FooterComp />
    </Box>
  );
};

export default Home;
