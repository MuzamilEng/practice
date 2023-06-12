import React from 'react'
import Sidebar from './Sidebar'

const Card = ({title, desc, img}) => {
  return (
    <div>
  <section className='container flex items-center justify-between bg-gray-100 p-6 w-80 h-30 border-none border-r-4 hover:bg-blue-300 rounded-md'>
    <div className='card'>
    <h1 className="font-bold text-blue-800 text-2xl">{title}</h1>
<p className="para text">{desc}</p>
    </div>
    <div className='card'>
<img src={img} alt="service provider" className='w-24 h-20' />
    </div>
  </section>
    </div>
  )
}

export default Card
