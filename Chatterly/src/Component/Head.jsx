import React from 'react'
import girl from './girls.jpeg'

const Head = () => {
  return (
<div className="shadow-md bg-blue-50">
    <div className=" flex  ">
      <h1 className='font-bold font-serif mt-4 '>Chatterly 
      <sup>
      <i className="fa-solid fa-comments text-blue-700"></i>
      </sup> 
    </h1> 
    <div className="flex mt-4 pr-2 mr-2 w-auto">
          <img className=" rounded-full h-10 w-10 ml-[1200px] border border-purple-600 mr-2"src={girl} alt="img"/>
          <span>
            <h3 className="font-semibold font-serif flex ">
            <select className='mt-2'><option value="select">Select All</option>
                <option value="date1">Simar</option>
               <option value="date2">Simarpreet</option>
               <option value="date3">Simarpreet Kaur</option>
</select></h3>
          </span>
        </div>
      </div>
      <hr/>
      <div className='flex justify-between'>
      <div className='flex justify-between divide-x'>
    <h4 className="font-serif font-semibold ml-3 ">Filters</h4>
    <div className="" >
   <div className="">
            <h4 className="ml-10 text-slate-500">Created by</h4>
            <div className=""/>
                <select className='bg-slate-300 rounded-xl ml-10'>
                <option value="All"> Select All</option>
                  <option value="None">None</option>
              <option value="Self">Self</option>
                <option value="Me">Me</option>
                </select>
                </div>
                </div>
                <div className="">
            <h4 className="ml-14 text-slate-500">Published Date</h4>
            <div className="">
                <select className='bg-slate-300 rounded-xl ml-14'>
                <option value="select">Select All</option>
                <option value="date1">2021</option>
               <option value="date2">2020</option>
               <option value="date3">2019</option>

              </select>
            </div>
          </div>
        </div>
        <div>
          <div className="">
            <h4 className="text-slate-500">Search</h4>
            <div className="">
              <input type="text" placeholder="Type here" className="type-here bg-slate-300 rounded-xl"/>
              <i class="fa-solid fa-magnifying-glass"></i>
              <span className="">
                search
              </span>


      </div>
      </div>
      </div>
      </div>
      </div>
      

      )
}

export default Head



