
const Button = ( { text, className = "" } ) => {
    return(
    <button
      className={`px-6 py-2 rounded-xl font-medium transition-all duration-200 
                  focus:outline-none focus:ring-1  focus:ring-gold hover:scale-105
                  bg-dblue hover:bg-dblue/80 text-white  shadow-sm cursor-pointer
                  ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
