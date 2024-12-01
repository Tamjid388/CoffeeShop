import { FaEye,FaPen  } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

export const CoffeeCard = ({coffee, coffees,setCoffees}) => {
    const {_id,name,quantity,supplier,taste,category,details,photo}=coffee
  const handleDelete=(id)=>{
console.log(id);
Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
  

fetch(`http://localhost:5000/coffee/${_id}`,
 { method:'DELETE'}
)
.then(res=>res.json())
.then(data=>{
  console.log(data)
  if(data.deletedCount>0){
  Swal.fire({
      title: "Deleted!",
      text: "Your coffee has been deleted.",
      icon: "success"
    })
    const remaining=coffees.filter(coff=>coff._id !==_id)
    setCoffees(remaining)
  }
})

  }
});
// .....
  }
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
  <Link to={`/updateCoffee/${_id}`}>
  <button className="btn bg-[#3C393B]"
       title="Update"
      >
        <h1 className="text-white"><FaPen /></h1>
      </button>
  </Link>
      <button 
      title="Delete"
      onClick={()=>handleDelete(_id)}
      
      className="btn bg-[#EA4744]">
      <h1 className="text-white"><AiFillDelete /></h1>
        </button>
    </div>
  </div>
</div>

    </div>
  )
}
