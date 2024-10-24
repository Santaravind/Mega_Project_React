import React from 'react'
import appwriteService from "../appwite/config"
import { Link } from 'react-router-dom';

function Postcard({
    $id,title,featuredImage
}) {
  return (
   <Link to={`/post/${$id}`}>
   
   <div className='w-full bg-gray-50 rounded-lg p-4 '>
    <div className='w-full justify-center mb-4 '>
        <img src={appwriteService.getPreview(featuredImage)} alt={title} className='rounded-xl' />
    </div>
    <h2 className='texl-xl font-bold'> {title}</h2>
   </div>
   </Link>
  )
}

export default Postcard;
