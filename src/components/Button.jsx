
const Button = ({label,iconURL,backgroundColor="bg-coral-red",textColor="text-white",borderColor="coral-red",fullWidth,extra=""}) => {
  return (
    <button className={`flex justify-center items center gap-2 px-7 py-4 border-2 font-montserrat text-lg leading-none rounded-full ${extra} ${backgroundColor} ${textColor} border-${borderColor} ${fullWidth && "w-full"}  cursor-pointer` }>
      {label}

      {iconURL && (
        <img src={iconURL}
         alt="right-arrow"
         className="ml-2 rounded-full bg-white w-5 h-5" />
      )}
    </button>
  )
}

export default Button