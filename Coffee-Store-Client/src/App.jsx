import { useState } from 'react'

import './App.css'
import { NavLink, useLoaderData } from 'react-router-dom'
import { CoffeeCard } from './Components/CoffeeCard'

function App() {
const coffees=useLoaderData()

  return (
    <div className='container mx-auto'>
    <nav className='flex gap-2 font-bold justify-center py-4'>
    <NavLink to={'/'}>Home</NavLink>
      <NavLink to={'/addCoffee'}>Addcoffee</NavLink>
      <NavLink to={'/updateCoffee'}>UpdateCoffee</NavLink>
    </nav>
    <div>
      <h1 className='font-bold my-6 text-center text-4xl'>Hot Cold Coffees: {coffees.length}</h1>
<div className='grid grid-cols-2 gap-4'>
  {coffees.map(coffee=><CoffeeCard 
  key={coffee._id}
  coffee={coffee}
  ></CoffeeCard>)}
</div>
    </div>
  
    </div>
  )
}

export default App
