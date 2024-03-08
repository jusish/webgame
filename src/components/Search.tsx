import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";

const SearchBar = styled("div")(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.5),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.1),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    [theme.breakpoints.up("md")]: {},
  },
}));

const Search = () => {
  return (
    <SearchBar sx={{ display: "flex", color: "gray" }}>
      <StyledInputBase placeholder="Enter email address" />
      <Button variant="text" color="primary" sx={{ bgcolor: "#FA8305" }}>
        <SearchIcon />
      </Button>
    </SearchBar>
  );
};

export default Search;
