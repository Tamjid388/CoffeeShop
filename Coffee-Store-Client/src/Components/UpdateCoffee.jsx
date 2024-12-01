import React from 'react'
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function UpdateCoffee() {
  const coffee=useLoaderData()
  const {_id,name,quantity,supplier,taste,category,details,photo}=coffee
  const handleSubmit=(e)=>{
    e.preventDefault();
    const name = e.target.name.value;
    const quantity = e.target.quantity.value;
    const supplier = e.target.supplier.value;
    const taste = e.target.taste.value;
    const category = e.target.category.value;
    const details = e.target.details.value;
    const photo = e.target.photo.value;
    const UpdatedCoffee={name,quantity,supplier,taste,category,details,photo}
console.log(UpdatedCoffee); 

// Send data to Server
fetch(`http://localhost:5000/coffee/${_id}`
  ,{
method:'PUT',
headers:{
    'content-type':'application/json'
},
body:JSON.stringify(UpdatedCoffee)
}

)
.then(res=>res.json())
.then(data=>{
console.log(data)
if(data.modifiedCount>0){
 
   Swal.fire({
    title: 'Coffee Updated successfully!',
    
    icon: 'success',
    confirmButtonText: 'Close'
  })
}
})



// e.target.reset();  
}
  return (
    <div>
        <h1 className='text-4xl font-extrabold text-center py-8'>UpdateCoffee</h1>
        <div className='container mx-auto bg-[#F4F3F0] mt-20 pb-20'>
       <Link to={"/"}>
       <button className='font-bold btn btn-error'>Back TO Home</button>
       </Link>
     
        {/* <h1 className='text-center text-4xl font-bold py-20'>Add New Coffee</h1> */}
        <form  onSubmit={handleSubmit}>
            <div className='grid grid-cols-2 gap-x-20 gap-y-4 px-8'>
            <div className="flex flex-col ">
                <label htmlFor="">
                    <span className='font-semibold'>Name</span> 
                </label>
                <input type="name" 
                  name="name"
                  defaultValue={name}
                placeholder="Enter coffee name" 
                className="input input-bordered  my-2" />

</div>
<div className="flex flex-col  ">
                <label htmlFor="" >
                    <span className='font-semibold'>Available Quantity</span> 
                </label>
                <input type="text" 
                 name="quantity"
                 defaultValue={quantity}
                placeholder="Type here Available Quantity" 
                className="input input-bordered my-2" />

</div>
<div className="flex flex-col ">
                <label htmlFor="" >
                    <span className='font-semibold'>Supplier</span> 
                </label>
                <input type="text" 
                 name="supplier"
                 defaultValue={supplier}
                placeholder="Enter coffee supplier" 
                className="input input-bordered my-2" />

</div>
<div className="flex flex-col  ">
                <label htmlFor="" >
                    <span className='font-semibold'>Taste</span> 
                </label>
                <input type="text" 
                   name="taste"
                placeholder="Enter coffee taste" 
                defaultValue={taste}
                className="input input-bordered my-2" />

</div>
<div className="flex flex-col  ">
                <label htmlFor="" >
                    <span className='font-semibold'>Category</span> 
                </label>
                <input type="text" 
                  name="category"
                  defaultValue={category}
                placeholder="Enter coffee category" 
                className="input input-bordered my-2" />

</div>
<div className="flex flex-col  ">
                <label htmlFor="" >
                    <span className='font-semibold'>Details</span> 
                </label>
                <input type="text" 
                   name="details"
                placeholder="Enter coffee details " 
                defaultValue={details}
                className="input input-bordered my-2" />

</div>
<div className="flex flex-col col-span-2 ">
                <label htmlFor="" >
                    <span className='font-semibold'>Photo</span> 
                </label>
                <input type="text" 
                  name="photo"
                  defaultValue={photo}
                placeholder="Enter photo URL" 
                className="input input-bordered my-2" />

</div>
<div className='col-span-2'>
    <button className="btn w-full bg-[#D2B48C]">Add Coffee</button>

</div>

            </div>
        </form>

      
    </div>
    </div>
  )
}
