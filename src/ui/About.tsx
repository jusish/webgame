import { Box } from "@mui/material";
import HeroAbout from "../components/HeroAbout";
import CardList from "../components/CardList";
import ImageSection from "../components/ImageSection";

const About = () => {
  return (
    <Box display={"flex"} flexDirection={"column"} gap={5}>
      <HeroAbout />
      <CardList />
      <ImageSection />
    </Box>
  );
};

export default About;
