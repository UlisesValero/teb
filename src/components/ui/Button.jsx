import {TbMailForward} from 'react-icons/tb'


const Button = ({ text, children, className = "" }) => {
  return (
   <button
      className={"text-white relative group py-2 px-13 border border-gold rounded-xl text-lg font-h3 bg-dblue hover:bg-gold/10 hover:text-gold transition-all duration-400 shadow-md cursor-pointer"}
    >
      <span className="transition-opacity duration-400 ease-in-out group-hover:opacity-0">
        {text}
      </span>
      <TbMailForward
        className="absolute inset-0 m-auto opacity-0 transition-opacity duration-400 ease-in-out group-hover:opacity-100"
        size={30}
      />
      {children}
    </button>
  )
}




export default Button
