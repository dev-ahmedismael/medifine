"use client";
import React from "react";
import { Box, Container, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material";
import AccountMenu from "./AccountMenu";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "@/store/sidebarSlice";
import Link from "next/link";

const Navbar = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  return (
    <nav>
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        height={"100%"}
        bgcolor={theme.palette.primary.main}
        borderBottom={"1px solid white"}
      >
        <Container>
          <Box display={"flex"} justifyContent={"space-between"}>
            <Box display={{ xs: "flex", sm: "flex", md: "none" }}>
              <Button
                sx={{ color: "white" }}
                onClick={() => dispatch(toggleSidebar())}
              >
                <MenuIcon fontSize="large" />
              </Button>
            </Box>
            <Link href={"/dashboard"}>
              <Box bgcolor={"white"} p={1} borderRadius={2}>
                <img
                  src="/images/logo.png"
                  alt="Logo"
                  width={140}
                  height={40}
                />
              </Box>
            </Link>
            <Box>
              <AccountMenu />
            </Box>
          </Box>
        </Container>
      </Box>
    </nav>
  );
};

export default Navbar;
