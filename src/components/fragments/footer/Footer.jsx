function Footer() {
  const navigation = [
    {
      to: "#hero",
      text: "Home",
    },
    {
      to: "#features",
      text: "Features",
    },
    {
      to: "#about",
      text: "About",
    },
    {
      to: "#product",
      text: "Product",
    },
    {
      to: "#faq",
      text: "Faq",
    },
    {
      to: "#testimonial",
      text: "Testimonial",
    },
    {
      to: "#contact",
      text: "Contact",
    },
  ];

  return (
    <footer className="bg-slate-200 py-8 border-t-2 border-black">
      <div className="container">
        <div className="flex flex-wrap flex-col lg:flex-row justify-between ">
          <div className="w-full lg:w-1/4 mb-4">
            <h1 className="text-4xl font-bold">CURVE</h1>
            <p className="mx-4">by Sulthon</p>
          </div>
          <div className="flex justify-around w-full lg:w-1/3  flex-col md:flex-row mb-4">
            {navigation.map((e) => {
              return (
                <a key={e.to} href={e.to}>
                  {e.text}
                </a>
              );
            })}
          </div>
          <div className="w-full lg:w-1/3 text-center">
            <p className="font-mono font-light text-sm">
              Copyright 2023 &copy; Sulthon-curve,inc.All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
