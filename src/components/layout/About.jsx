import prod from "../../assets/img/headphone2.png";
import TitleSection from "../elements/title/TitleSection";
import blob from "../../assets/svg/blob.svg";
const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container px-4">
        <div className="w-full flex flex-wrap-reverse lg:flex-nowrap justify-center lg:justify-evenly items-center">
          <div className="flex justify-center items-center max-w-xl w-full">
            <img src={prod} alt="product" className="w-3/4 xl:w-full flip" />
          </div>
          <div className="max-w-xl w-full">
            <TitleSection
              section="About Product"
              className="text-center lg:text-left"
              title="Awesome Digital Product Can Make Your Life Easier"
            ></TitleSection>
            <div className="px-6 text-slate-700 py-4">
              <p className="mb-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                aliquam doloremque odio minima et alias nihil.
              </p>
              <p className="mb-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia,
                deleniti? Iusto, quos dolore. Itaque aut maxime accusantium
                pariatur mollitia quibusdam numquam nisi enim! Quaerat sit
                eveniet blanditiis ipsam, ipsa similique.
              </p>
              <p className="font-semibold text-black">
                {" "}
                ✔️ Wireles Connection Headphone <br /> ✔️ hight quality Audio{" "}
                <br /> ✔️ Noise Canceling without cable <br /> ✔️ Wireles
                connection with BLUETOOTH
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute w-full max-w-md lg:max-w-2xl xl:max-w-3xl -top-24 -right-32 -z-50">
        <img src={blob} alt="blob" />
      </div>
    </section>
  );
};
export default About;
