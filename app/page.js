import Footer from "@/components/footer/Footer";
import LandingPageNavbar from "@/components/landing-page-navbar/LandingPageNavbar";
import LandingPage from "@/components/landing-page/LandingPage";

export default function Home() {
  return (
    <>
      <LandingPageNavbar />
      <main>
        <LandingPage />
      </main>
      <Footer />
    </>
  );
}
