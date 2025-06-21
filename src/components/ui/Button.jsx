
const Button = ( { text, className = "" } ) => {
    return(
    <button
      className={`rounded-xl font-medium transition-all duration-400 
                  focus:outline-none focus:ring-1  focus:ring-gold hover:scale-105
                  bg-dblue hover:brightness-120 text-white  shadow-sm cursor-pointer
                  ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;