import { Box } from "@mui/material";
import Hero from "../components/Hero";
import Lorem from "../components/Lorem";
import Image from "../components/Image";
import Games from "../components/Games";
import RecentProjects from "../components/RecentProjects";
import StayInLoop from "../components/StayInLoop";
import FooterComp from "../components/FooterComp";

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
