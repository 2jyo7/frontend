import axios from 'axios';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import React from 'react'

function Card({title, description, date}: any) {
   
  const handleDelete = (id: any) => {
    axios.delete(`http://localhost:4000/api/events/${id}`)    
  }
  const handleUpdate = (id: any) => {
    axios.put(`http://localhost:4000/api/events/${id}`)
  }

  return (
    <div className='flex flex-wrap justify-center m-2 p-3 shadow-md bg-pink-500'>
        <div className="card card-compact w-96 bg-base-100 shadow-xl bg-pink-300">
 {/* <figure><Image src="" alt="Task Image" /></figure>*/}
  <div className="card-body">
    <div className='flex flex-row m-4 p-2 space-x-3'>
    <button type='submit' onClick={handleUpdate}><FaEdit  className='text-xl'/></button>
    <button type='submit' onClick={handleDelete}><MdDelete className='text-xl'/></button>
    </div>

    <h2 className="card-title text-2xl ">{title}</h2>
    <p className='text-xl text-red-950 font-bold'>{description}</p>
    <div className="card-actions justify-end text-2xl font-semibold text-blue-900">
        {date}
    </div>
  </div>
</div>
    </div>
  )
}

export default Card