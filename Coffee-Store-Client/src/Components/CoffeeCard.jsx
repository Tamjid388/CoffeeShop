import { FaEye,FaPen  } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";

export const CoffeeCard = ({coffee}) => {
    const {name,quantity,supplier,taste,category,details,photo}=coffee
  return (
    <div>
        <div className="card card-side bg-base-100 shadow-xl">
  <figure>
    <img
     src={photo ? photo : "https://i.ibb.co.com/XY5W8Fv/3.png"}
      alt="Movie" />
     
  </figure>
  <div className="card-body grid grid-cols-2 justify-center items-center">
  <div className="">
  <h2 className="card-title">Name: {name}</h2>
    <p className='font-semibold'>Category :{category}</p>
    <p className='font-semibold'>Supplier :{supplier}</p>
  </div>
    <div className="card-actions flex flex-col">
      <button className="btn bg-[#D2B48C]">
        <h1 className="text-white"><FaEye /></h1>
        </button>
      <button className="btn bg-[#3C393B]">
        <h1 className="text-white"><FaPen /></h1>
      </button>
      <button className="btn bg-[#EA4744]">
      <h1 className="text-white"><AiFillDelete /></h1>
        </button>
    </div>
  </div>
</div>

    </div>
  )
}
