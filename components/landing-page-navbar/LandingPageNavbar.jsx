import { Box, Typography } from "@mui/material";
import React from "react";

const LandingPageNavbar = () => {
  return (
    <nav>
      <Box
        bgcolor={"white"}
        height={90}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <img src="/images/logo.png" alt="Logo" width={140} height={40} />
      </Box>
    </nav>
  );
};

export default LandingPageNavbar;
