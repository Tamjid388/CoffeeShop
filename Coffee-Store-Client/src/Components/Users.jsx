import { useQueries, useQuery } from "@tanstack/react-query"
import axios from "axios"

import { useEffect } from "react"
import Loader from "./loader"


export const Users = () => {
    // useEffect(()=>{
    //     axios.get('/')
    //     .then(data=>{
    //         console.log(data.data)
    //     })

    // },[])
    const {isPending,data:users}=useQuery(
      {
        queryKey:['users'],
        queryFn:async()=>{
          const res=await fetch('http://localhost:5000/coffee')
          return res.json()
        }
      }
    )
    if(isPending){
      return <Loader></Loader>
    }
  return (
    <div>
        <h1 className="text-4xl">Users:{users?.length}</h1>
        <loader></loader>
    </div>
  )
}
