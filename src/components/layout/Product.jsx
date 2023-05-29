import play from "../../assets/icon/play.png";
const Product = () => {
  return (
    <section id="product" className="bg-faq-bg bg-cover ">
      <div className="backdrop-blur-sm bg-opacity-80 bg-slate-900">
        <div className="container ">
          <div className="flex justify-center items-center px-4 py-24 relative">
            <div className="max-w-xl md:max-w-2xl w-full bg-white flex flex-col items-center rounded-3xl">
              <div className="bg-blue-500 w-12 h-12 mb-2 mt-6 rounded-full flex justify-center items-center  border-4 border-blue-200">
                <img
                  src={play}
                  alt="icon"
                  className="w-6 h-6 translate-x-[2px]"
                />
              </div>
              <div className="w-full text-center ">
                <h1 className="font-bold text-xl md:text-2xl py-4">
                  Best Product for you. Check The Demo Video
                </h1>
                <div className="flex gap-1 justify-center mb-4">
                  <span className="w-12 h-1 rounded-full bg-blue-500 inline "></span>
                  <span className="w-4 h-1 rounded-full bg-blue-500 inline "></span>
                </div>
                <div className="max-w-lg m-auto mb-8 ">
                  <p className="font-normal text-slate-700 px-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Necessitatibus ipsa laboriosam cumque totam eveniet fuga
                    quas esse, reprehenderit id, ad tempore culpa magni hic qui
                    cum saepe eius et reiciendis?
                  </p>
                </div>
              </div>
            </div>
            <span className="block max-w-xl md:max-w-2xl w-full h-1/2 -rotate-[8deg] -z-10 bg-blue-500 items-center rounded-3xl absolute"></span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Product;
