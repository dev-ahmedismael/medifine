"use client";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";
import { blue } from "@mui/material/colors";

const Theme = ({ children }) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: blue[500],
      },
    },
  });
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
