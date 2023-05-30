const TitleSection = ({ section, className = "text-center", title }) => {
  return (
    <div className={`w-full ${className}`}>
      <h1 className="font-medium text-blue-600 bg-blue-200 px-4 py-1 inline shadow  animate-pulse duration-1000 transition-all ease-in-out">
        {section}
      </h1>
      <h2 className="font-bold text-2xl md:text-4xl py-4">{title}</h2>
      <div className="flex gap-1 justify-center">
        <span className="w-12 h-1 rounded-full bg-blue-500 inline animate-pulse duration-700 ease-in-out transition-all"></span>
        <span className="w-4 h-1 rounded-full bg-blue-500 inline animate-pulse duration-200 ease-in-out transition-all"></span>
      </div>
    </div>
  );
};
export default TitleSection;
