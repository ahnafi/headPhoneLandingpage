import TitleSection from "../elements/title/TitleSection";
import person from "../../assets/img/person.jpg";
import Button from "../elements/button/Button";
const Faq = () => {
  const question = [
    {
      id: 1,
      q: "Lorem ipsum dolor sit amet.",
      a: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur sapiente quasi impedit corrupti ullam. Rerum.",
    },
    {
      id: 2,
      q: "Lorem ipsum dolor sit amet.",
      a: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur sapiente quasi impedit corrupti ullam. Rerum.",
    },
    {
      id: 3,
      q: "Lorem ipsum dolor sit amet.",
      a: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur sapiente quasi impedit corrupti ullam. Rerum.",
    },
    {
      id: 4,
      q: "Lorem ipsum dolor sit amet.",
      a: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur sapiente quasi impedit corrupti ullam. Rerum.",
    },
    {
      id: 5,
      q: "Lorem ipsum dolor sit amet.",
      a: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur sapiente quasi impedit corrupti ullam. Rerum.",
    },
    {
      id: 6,
      q: "Lorem ipsum dolor sit amet.",
      a: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur sapiente quasi impedit corrupti ullam. Rerum.",
    },
  ];
  return (
    <section id="faq" className="py-28 bg-slate-100">
      <div className="container">
        <div className="">
          <TitleSection section="FAQ" title="Frequently Asked Question" />
          <p className="px-6 py-4 font-light text-base text-slate-600 lg:text-lg md:text-center md:px-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            laborum nihil possimus maiores voluptate voluptatibus eos!
          </p>
        </div>
        <div className="flex flex-wrap py-8 px-4 gap-4 justify-center">
          {question.map((i) => {
            return (
              <div key={i.id} className="w-full px-4 lg:max-w-md ">
                <h3 className="font-bold text-lg md:text-xl lg:text-2xl pb-1 text-black">
                  {i.q}?
                </h3>
                <p className="font-normal text-sm md:text-base lg:text-lg text-slate-700">
                  {i.a}
                </p>
              </div>
            );
          })}
        </div>
        <div className="px-4">
          <div className="bg-white lg:mx-16 px-4 py-2 lg:flex lg:justify-between lg:items-center ">
            <div className="lg:flex ">
              <img
                src={person}
                alt="person"
                className="w-16 h-16 rounded-full mx-4"
              />
              <div className="py-2">
                <h4 className="font-semibold">Still Have Question?</h4>
                <p className="font-normal">
                  Can't find the answer you're looking for? Please chat to our
                  friendly team.
                </p>
              </div>
            </div>
            <Button>Get in touch</Button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Faq;
