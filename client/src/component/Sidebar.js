import React, { useEffect, useState } from 'react'
import { json_data, data } from '../Data'

const Sidebar = () => {
    const userData = data(json_data)
const [user, setUser] = useState(userData ? userData : null )
useEffect(() => {
    if (user && userData) {
      setUser(userData[0]);
    }
  }, []);

  return (
    <div>
  <main className='container w-70'>
  {
        user && json_data[2]?.form[0]?.title === "sidebar" && (
          json_data[2]?.form[0]?.initialData.map((data) => (
<ul className='list border-b-2 flex w-72 h-16 hover:bg-purple-600 hover:cursor-pointer rounded-md m-2 list-none items-center' key={data?.id}>
        <li className='font-semibold p-1 hover:text-white mr-2'>{data?.name}</li>
  <img src={data?.img} alt="services" className='w-6 h-6 '/>
      {console.log(data?.img)}
        </ul>
    ))
  )
}
   
  </main>
    </div>
  )
}

export default Sidebar
