import { Box, Typography } from "@mui/material";

const Lorem = () => {
  return (
    <Box
      textAlign="center"
      display="flex"
      justifyContent="center"
      justifyItems="center"
      alignSelf="center"
      alignItems="center"
      maxWidth={600}
      margin={2}
    >
      <Typography variant="h4" color="white">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </Typography>
    </Box>
  );
};

export default Lorem;
