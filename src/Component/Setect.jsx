import React from 'react'

function Setect( {
    options, 
    lable,
    className,
    ...attributesToProps
}, ref) {
  return (
    <div className='w-full'>
      {lable &&<lable htmlFor={id} className=''></lable>}
      <select  id="id"
      {...props}
      ref={ref}
      className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
      >
       {options?.map((option)=>(
        <option key={option} value={option}> {option} </option>
       ))}

      </select>
    </div>
  )
}

export default React.forwardRef(Setect)
