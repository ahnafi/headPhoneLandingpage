function LabelInput({label , id , type ,name ,text}) {
  return (
    <div className="max-w-md py-2">
      <label htmlFor={id} className="font-medium text-slate-700 text-lg ">
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={text}
        className="block border-2 border-blue-300 w-full px-2 py-1 focus:outline-blue-800 text-base font-normal bg-slate-100 text-slate-700"
        autoComplete="off"
      />
    </div>
  );
}
export default LabelInput;
