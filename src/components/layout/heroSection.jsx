import hero from '../../assets/img/headphone.png'
import Button from '../elements/button/Button';
const HeroSection = () => {
  return (
    <section id="hero" className="pt-20 bg-slate-100 overflow-hidden">
      <div className="container ">
        <div className="flex justify-between flex-wrap items-center px-4 ">
          <div className="w-full max-w-xl z-10 xl:-translate-y-28">
            <h1 className="font-bold text-4xl xl:text-6xl mb-4 font-sans">
              Best & Smart <br /> Digital Product
            </h1>
            <p className="font-normal text-base text-slate-600 mb-4 max-w-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ipsa
              quaerat expedita cumque voluptatum facilis blanditiis consectetur
              modi assumenda sint!
            </p>
            <Button >Buy Product</Button>
          </div>
          <div className="w-full max-w-xl relative ">
            <span className="bg-blue-500 w-[100vw] h-[100vh] block absolute rotate-45 -top-[90%] -right-1/2 "></span>
            <div className="z-10 relative">
              <img src={hero} alt="headphone" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection