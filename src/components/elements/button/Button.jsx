const Button = ({children}) => {
  
  return (
    <button className="bg-blue-500 px-5 py-2 text-white font-semibold shadow-lg hover:bg-blue-700">
      {children}
    </button>
  );
};
export default Button;
