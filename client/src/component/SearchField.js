import React from 'react'

const SearchField = ({title, flight}) => {
  return (
<div className='container m-2 p-1'>
<h2 className='text-2xl font-bold'>{title}</h2>
  <div className="flex justify-between items-center w-full border-2 m-2 p-3 border-gray-200 rounded-md  hover:bg-slate-100">
    <p className='text-gray-700 text-md cursor-pointer'>{flight}</p>
<button className='text-center text-sm text-blue-600 border-double border-blue-600 border-2 rounded-md p-2 hover:underline'>Search Here</button>
      </div>
    </div>
  )
}

export default SearchField
