import TitleSection from "../elements/title/TitleSection";
import mic from '../../assets/icon/mic.png'
import note from '../../assets/icon/notes.png'
import speaker from '../../assets/icon/speaker.png'
import wireless from '../../assets/icon/wireless.png'
import blob from '../../assets/svg/blob.svg'

const allFeatures = [
  {
    icon: mic ,
    title: "Virtual Surround",
    p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum numquam et dicta.",
  },
  {
    icon: note,
    title: "Noise Cancelling",
    p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum numquam et dicta.",
  },
  {
    icon: speaker,
    title: "Sound Control",
    p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum numquam et dicta.",
  },
  {
    icon: wireless,
    title: "Wireless Freedom",
    p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum numquam et dicta.",
  },
];
const Features = () => {
  return (
    <section id="features" className="py-24 relative overflow-hidden">
        <div className="absolute w-full max-w-md lg:max-w-2xl xl:max-w-3xl -top-24 -left-32 -z-50" >
            <img src={blob} alt="blob" className="" />
        </div>
      <div className="container">
        <TitleSection
          section="Features"
          className="text-center"
          title="Outstanding Features"
        ></TitleSection>
        <div className="flex flex-wrap lg:flex-nowrap justify-center items-center">
          {allFeatures.map((data) => {
            return (
              <div
                key={data.title}
                className="w-full max-w-xs flex flex-col justify-center items-center "
              >
                <div className="w-24 h-24 bg-blue-500 rotate-45 my-12 flex justify-center items-center border-4 border-blue-300 ">
                  <img
                    src={data.icon}
                    alt="icon"
                    className="text-white -rotate-45 "
                  ></img>
                </div>
                <h3 className="font-semibold text-xl pb-2 text-black">
                  {data.title}
                </h3>
                <p className="text-base text-slate-700 font-normal max-w-xs w-3/4 text-center">
                  {data.p}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Features;
