import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import LocalFireDepartmentOutlinedIcon from "@mui/icons-material/LocalFireDepartmentOutlined";
export default function GameCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="194"
        image="/public/Rectangle 24.png"
        alt="Paella dish"
      />
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
          20 Followers
        </Typography>
      </CardContent>
    </Card>
  );
}
