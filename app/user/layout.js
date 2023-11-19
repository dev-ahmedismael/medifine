"use client";
import Footer from "@/components/footer/Footer";
import UserNavbar from "@/components/user/user-navbar/UserNavbar";
import { Box, Container } from "@mui/material";
import { blue } from "@mui/material/colors";

export default function DashboardLayout({ children }) {
  return (
    <>
      <UserNavbar />
      <main>
        <Box bgcolor={blue[50]}>
          <Container>{children}</Container>
        </Box>
      </main>
      <Footer />
    </>
  );
}
