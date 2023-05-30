function DetailsText({label,name,id,text}) {
  return (
    <div className="py-2 ">
      <label htmlFor={id} className="font-medium text-slate-700 text-lg">
        {label}
      </label>
      <textarea
        name={name}
        id={id}
        cols="0"
        rows="3"
        placeholder={text}
        className="block border-2 text-base font-normal text-slate-700 border-blue-300 focus:outline-blue-700 w-full px-2 py-1 bg-slate-100"
      ></textarea>
    </div>
  );
}
export default DetailsText