import React from 'react'
import Swal from 'sweetalert2';

export default function UpdateCoffee() {
    function showalert(){
        console.log("ok");
        Swal.fire({
            title: 'Error!',
            text: 'Do you want to continue',
            icon: 'error',
            confirmButtonText: 'Cool'
          })
        }
  return (
    <div>
        <h1>UpdateCoffee</h1>
          {/*  */}
       <button className='btn' onClick={showalert}>Alert</button>
       {/*  */}
    </div>
  )
}
