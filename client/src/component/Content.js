import React from 'react'

const Content = () => {
  return (
    <div>
      <div className="container items-center justify-center bg-gray-200 w-fit m-2 p-2 rounded-lg">
 <div className="w-100 items-center justify-center rounded-md flex flex-col mt-3">
 <h1 className="items-center text-blue-800 font-bold text-4xl justify-center">Why Book Flight With Quacki.</h1>
<p className="items-center text-gray-400 text-md">Booking with Quacki. Save time and money.</p>'
 </div>
 <div className="grid grid-cols-3 gap-3 p-2 justify-around">
    <div className="content w-50 rounded-md flex flex-col items-center">
<img src="/images/dollar.png" alt="charges" className='w-10 h-10'/>
<h1 className='text-2xl font-bold'>No booking charges</h1>
<p className='text-gray-400 text-sm text-center'>No booking charges will be charged from our customers.No booking charges will be charged from our customers</p>
    </div>
<div className="content w-50 rounded-md flex flex-col items-center">
<img src="/images/percent.png" alt="charges" className='w-10 h-10'/>
<h1 className='text-2xl font-bold'>Cheapest Price</h1>
<p className='text-gray-400 text-sm text-center'>No booking charges will be charged from our customers.No booking charges will be charged from our customers</p>
    </div>
    <div className="content w-50 rounded-md flex flex-col items-center">
<img src="/images/cross.png" alt="charges" className='w-10 h-10'/>
<h1 className='text-2xl font-bold'>Easy Cancellation & Refund</h1>
<p className='text-gray-400 text-sm text-center'>No booking charges will be charged from our customers.No booking charges will be charged from our customers</p>
    </div>
 </div>
      </div>
    </div>
  )
}

export default Content
