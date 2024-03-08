import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import LocalFireDepartmentOutlinedIcon from "@mui/icons-material/LocalFireDepartmentOutlined";
import React from "react";

interface GameCardProps {
  image: string;
  numberOfFollowers: number;
}

const GameCard: React.FC<GameCardProps> = ({ image, numberOfFollowers }) => {
  return (
    <Card sx={{ maxWidth: 200, borderRadius: 5 }}>
      <CardMedia component="img" height="194" image={image} alt="Paella dish" />
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 2,
        }}
      >
        <LocalFireDepartmentOutlinedIcon />
        <Typography variant="body2" color="text.secondary">
          {numberOfFollowers} Followers
        </Typography>
      </CardContent>
    </Card>
  );
};

export default GameCard;
