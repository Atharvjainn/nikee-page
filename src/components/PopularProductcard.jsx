import { star } from "../assets/icons"


const PopularProductcard = ({imgURL,name,price}) => {

  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full items-center shadow-3xl rounded-2xl pt-3 pb-2 ">
        <img src={imgURL} alt={name} width={282} height={282}
        className="hover:scale-120 hover:ease-in hover:duration-200 " />

        <div className="mt-8 flex justify-start gap-2.5">
            <img src={star} alt="rating-icon" />
            <p className="font-montserrat text-xl leading-normal text-slate-gray">(4.5)</p>
        </div>

        <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
        {name}
        </h3>

        <p className="mt-2 font-semibold text-coral-red text-2xl leading-normal">
        {price}
        </p>
    </div>
  )
}

export default PopularProductcard