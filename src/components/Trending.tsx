import { Box } from "@mui/material";
import GameCard from "./GameCard";

const Trending = () => {
  return (
    <Box marginLeft={20} marginY={5}>
      <Box display={"flex"} flexDirection={"row"} flexWrap={"wrap"} gap={10}>
        <GameCard image="/public/Rectangle 23.png" numberOfFollowers={20} />
        <GameCard image="/public/Rectangle 24.png" numberOfFollowers={40} />
        <GameCard image="/public/Rectangle 26.png" numberOfFollowers={25} />
        <GameCard image="/public/Rectangle 25.png" numberOfFollowers={10} />
      </Box>
    </Box>
  );
};

export default Trending;
