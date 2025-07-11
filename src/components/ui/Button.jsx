
const Button = ({ text, children, className = "" }) => {
  return (
    <button
      className={`group relative overflow-hidden rounded-xl font-medium transition-all duration-400 
                  focus:outline-none focus:ring-1 focus:ring-gold hover:scale-105
                  bg-dblue hover:brightness-110 text-white shadow-sm cursor-pointer
                  ${className}`}
    >
      {children ? children : text}
    </button>
  );
};

export default Button;
