import hero from "../../assets/img/headphone.png";
import Button from "../elements/button/Button";
const HeroSection = () => {
  return (
    <section id="hero" className="pt-20 bg-slate-100 overflow-hidden">
      <div className="container ">
        <div className="flex justify-between flex-wrap lg:flex-nowrap xl:flex-wrap items-center px-4 md:flex-col-reverse lg:flex-row ">
          <div className="w-full max-w-xl z-10 md:-translate-y-28 ">
            <h1 className="font-bold text-4xl lg:text-5xl xl:text-6xl mb-4 font-sans">
              Best & Smart <br /> Digital Product
            </h1>
            <p className="font-normal text-base text-slate-600 mb-4 max-w-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ipsa
              quaerat expedita cumque voluptatum facilis blanditiis consectetur
              modi assumenda sint!
            </p>
            <Button>Buy Product</Button>
          </div>
          <div className="w-full max-w-xl relative ">
            <span className="bg-blue-500 w-96 h-96 rounded-full -right-24 md:right-0 lg:rounded-none lg:w-[100vw] lg:h-[100vh] block absolute rotate-45 lg:-top-[100%] xl:-top-[90%] lg:-right-1/2 "></span>
            <div className="z-10 relative flex justify-center">
              <img src={hero} alt="headphone" className=" w-3/4 xl:w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
