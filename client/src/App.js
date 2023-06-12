import React, { useEffect, useState } from 'react';
import { data, json_data } from './Data';
import Sidebar from './component/Sidebar';
import Card from './component/Card';
import Content from './component/Content';
import SearchField from './component/SearchField';

const App = () => {
  const userData = data(json_data);
  const [user, setUser] = useState(userData && userData[0]);

  useEffect(() => {
    if (user && userData) {
      setUser(userData[0]);
    }
  }, []);

  return (
    <div>
      {/* header component */}
  <header className='w-full p-2 container flex justify-between'>
    <div className="flex flex-col-2 items-center justify-self">
  <img src="/images/Logo.png" alt="bibble" className='w-20 h-10 cursor-pointer hover:cursor-pointer hover:bg-slate-100'/>
  <div className="flex ml-2 p-2 items-center bg-gray-200 border-none border-r-8 rounded-md">
<img src="/images/search.png" alt="search" className='w-6 h-6 cursor-pointer'/>
<input type="text" placeholder="Search..." className='w-full h-6 p-2 bg-gray-200 border-r-8 focus:border-none outline-none font-medium' />
  </div>
  </div>
  <div className="flex flex-col-6 items-center justify-evenly">
    {user && json_data[0]?.form[0]?.title === "header" && (
      json_data[0]?.form[0]?.initialData.map((data) => (
    <ul className='flex' key={data?.id}>
          <li className='p-1 font-semibold hover:underline hover:cursor-pointer'>{data?.name}</li>
        </ul>
      ))
    )}
     </div>
      </header>
      {/* content component */}
      <div className="container w-full">
    <div className="w-full relative">
  <p className="absolute top-20 tracking-wide left-20 space-x-2 text-white text-5xl font-bold">Your <span className="text-red-600">Booking made</span> easy</p>
<img src="/images/images.png" alt="main-img" className='mw-full h-full ml-7'/>
    </div>
      </div>
  <nav className='container w-fit m-1 p-2 flex'>
      {
        user && json_data[1]?.form[0]?.title === "content" && (
          json_data[1]?.form[0]?.initialData.map((data) => (
        <ul className='grid grid-cols-6 w-50 h-50 bg-gray-400 m-2 ml-2 p-3 items-center hover:bg-yellow-400 hover:cursor-pointer' key={data?.id}>
        <li className='font-semibold p-1 mr-2'>{data?.name}</li>
      <img src={data?.img} alt="services" className='ml-3'/>
        </ul>
    ))
  )
}
  </nav>
  <main className='flex'>
    <Sidebar 
     />
<div className="container">
<div className="grid grid-cols-3 gap-3 m-3 p-2 justify-around">
  <Card title={"A special Offer"}
  desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ea."}
  img={"/images/wifi.png"}
  />
  <Card title={"Best Way TO Play"}
  desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ea."}
  img={"/images/wheel.png"}
  />
  <Card title={"Fly at lowest Rate"}
  desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ea."}
  img={"/images/dollar.png"}
  />
     </div>
     <Content />
</div>
  </main>
  <section className='flex items-center justify-center'>
    <div className="container ">
      <SearchField title={"Popular Domestic Routes"} flight={"Flight from Mumbai to Dehli"}/>
      <SearchField flight={"Flight from Mumbai to Dehli"}/>
      <SearchField flight={"Flight from Mumbai to Dehli"}/>
      <SearchField flight={"Flight from Mumbai to Dehli"}/>
      <SearchField flight={"Flight from Mumbai to Dehli"}/>
      <SearchField flight={"Flight from Mumbai to Dehli"}/>

    </div>
    <div className="container">
      <SearchField title={"Popular International Routes"} flight={"Flight from Mumbai to Dehli"}/>
      <SearchField flight={"Flight from Mumbai to Dehli"}/>
      <SearchField flight={"Flight from Mumbai to Dehli"}/>
      <SearchField flight={"Flight from Mumbai to Dehli"}/>
      <SearchField flight={"Flight from Mumbai to Dehli"}/>
      <SearchField flight={"Flight from Mumbai to Dehli"}/>
    </div>
  </section>
  <footer className='flex flex-col items-center justify-center text-center w-30'>
    <h2 className="font-bold text-lg underline">Why Quacki?</h2>
    <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ea.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ea
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ea
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ea
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ea
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ea
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ea
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ea
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ea
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ea
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ea
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ea
    </p>
  </footer>
    </div>
  );
};

export default App;