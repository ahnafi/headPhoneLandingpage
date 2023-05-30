import TitleSection from "../elements/title/TitleSection";
import jurica from "../../assets/test/jurica-koletic.jpg";
import joseph from '../../assets/test/joseph-gonzalez-iFgRcqHznqg-unsplash.jpg'
import houcine from '../../assets/test/houcine-ncib-B4TjXnI0Y2c-unsplash.jpg'
import eric from '../../assets/test/erik-lucatero-d2MSDujJl2g-unsplash.jpg'
import ospan from '../../assets/test/ospan-ali-6xv4A1VA1rU-unsplash.jpg'

function Testimonial() {
  const test = [
    {
      name: "joseph Gonzales",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti molestias eius quam sint natus nostrum.",
      color: "red",
      img: joseph,
    },
    {
      name: "Houcine Ncib",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti molestias eius quam sint natus nostrum.",
      color: "yellow",
      img: houcine ,
    },
    {
      name: "Erik Lucatero",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti molestias eius quam sint natus nostrum.",
      color: "lime",
      img: eric ,
    },
    {
      name: "Ospan Ali",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti molestias eius quam sint natus nostrum.",
      color: "pink",
      img: ospan ,
    },
  ];

  return (
    <section id="testimonial" className="py-28">
      <div className="container">
        <TitleSection section="Testimonial" title="What are people saying" />
        <div className="mx-4">
          <div className=" bg-violet-100 relative mt-24 flex justify-center shadow-lg max-w-6xl mx-auto">
            <img
              src={jurica}
              alt="jurica-koletic"
              className="rounded-full w-20 h-20  object-cover object-top absolute -top-10 "
            />
            <div className="px-12 py-4 mt-8 text-center">
              <p className="font-medium text-base text-slate-900">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias
                repellat commodi porro, est doloribus quae. Aut ab similique
                praesentium consectetur minus rerum, sit porro, fugit
                necessitatibus doloribus sunt dignissimos sequi?
              </p>
              <p className="font-serif py-2 font-semibold text-sm text-black">
                ~Jurica Koletic
              </p>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {test.map((i) => {
              return (
                <div
                  key={i.color}
                  className={` bg-${i.color}-100 relative mt-16 flex justify-center shadow-lg max-w-xl `}
                >
                  <img
                    src={i.img}
                    alt={i.name}
                    className=" rounded-full w-20 h-20  object-cover  absolute -top-10 "
                  />
                  <div className="px-12 py-4 mt-8 text-center">
                    <p className="font-medium text-base text-slate-700">{i.text}</p>
                    <p className="font-serif py-2 font-semibold text-sm text-black">
                      ~{i.name}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
export default Testimonial;
