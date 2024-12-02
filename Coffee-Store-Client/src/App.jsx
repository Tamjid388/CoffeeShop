import { useState } from 'react'

import './App.css'
import { NavLink, Outlet, useLoaderData } from 'react-router-dom'
import { CoffeeCard } from './Components/CoffeeCard'

function App() {
const loadedcoffees=useLoaderData()    
const [coffees,setCoffees]=useState(loadedcoffees)
  return (
    <div className='container mx-auto'>
    <nav className='flex gap-2  justify-center py-4'>
    <NavLink  className={'btn'} to={'/'}>Home</NavLink>
      <NavLink className={'btn'}  to={'/addCoffee'}>Addcoffee</NavLink>
      <NavLink className={'btn'}  to={'/login'}>Login</NavLink>
      <NavLink className={'btn'}  to={'/signup'}>SignUp</NavLink>
     
    </nav>
<Outlet></Outlet>
    <div>
      <h1 className='font-bold my-6 text-center text-4xl'>Hot Cold Coffees: {coffees.length}</h1>
<div className='grid grid-cols-2 gap-4'>
  {coffees.map(coffee=><CoffeeCard 
  key={coffee._id}
  coffee={coffee}
  coffees={coffees}
  setCoffees={setCoffees}
  ></CoffeeCard>)}
</div>
    </div>
  
    </div>
  )
}

export default App
