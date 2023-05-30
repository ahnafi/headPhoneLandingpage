import Footer from "../components/fragments/footer/Footer";
import Navbar from "../components/fragments/navbar/navbar";
import About from "../components/layout/About";
import Contact from "../components/layout/Contact";
import Faq from "../components/layout/Faq";
import Features from "../components/layout/Features";
import Product from "../components/layout/Product";
import Testimonial from "../components/layout/Testimonial";
import HeroSection from "../components/layout/heroSection";

const HomePage = () => {
  return (
    <>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <Features></Features>
      <About></About>
      <Product></Product>
      <Faq></Faq>
      <Testimonial></Testimonial>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
};
export default HomePage;
