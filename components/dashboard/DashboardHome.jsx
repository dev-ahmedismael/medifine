import { Box, Typography } from "@mui/material";
import React from "react";

const DashboardHome = () => {
  return (
    <Box
      height={"100vh"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      id={"dashboard-home"}
    >
      <img src="/images/logo.png" alt="Logo" />
      <Typography my={2} variant="h3" color={"gray"} textAlign={"center"}>
        Welcome To MediFine
      </Typography>
      <Typography variant="h6" color={"primary"} textAlign={"center"}>
        Hospital Management System
      </Typography>
    </Box>
  );
};

export default DashboardHome;
