import * as React from "react";
import { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { ISearchProps } from "@/base/models/module.interface";
import EastIcon from "@mui/icons-material/East";

const SearchSide = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "whitesmoke",
  "&:hover": {
    backgroundColor: "whitesmoke",
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "30ch",
      "&:focus": {
        width: "120ch", // Increase the width on focus
      },
    },
  },
}));

export const Search: React.FC<ISearchProps> = ({ onFocusChange }) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const handleFocus = () => {
    setIsFocused(true);
    onFocusChange(true); // Notify the parent component that the input is focused
  };

  const handleBlur = () => {
    setIsFocused(false);
    onFocusChange(false); // Notify the parent component that the input is no longer focused
  };

  return (
    <Toolbar>
      <SearchSide>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
       
      </SearchSide>
    </Toolbar>
  );
};
