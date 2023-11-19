import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import { Box, Container } from "@mui/material";
import Sidebar from "@/components/sidebar/Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <>
      <Navbar />
      <Box display={"flex"}>
        <aside>
          <Sidebar />
        </aside>
        <main id="main">
          <Box pt={3}>
            <Container>{children}</Container>
          </Box>
        </main>
      </Box>
      <Box ml={"75px"}>
        <Footer />
      </Box>
    </>
  );
}
