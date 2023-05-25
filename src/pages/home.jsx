import Navbar from "../components/fragments/navbar/navbar";
import About from "../components/layout/About";
import Faq from "../components/layout/Faq";
import Features from "../components/layout/Features";
import HeroSection from "../components/layout/heroSection";

const HomePage = () => {
  return (
    <>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <Features></Features>
      <About></About>
      <Faq></Faq>
    </>
  );
};
export default HomePage;
