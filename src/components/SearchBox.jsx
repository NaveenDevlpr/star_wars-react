import React, { useEffect, useState } from 'react'

const SearchBox = ({data,setData,url,seturl}) => {
    const [search,setSearch]=useState('')
 
    const searchResident=()=>{
       
        if(search && search.trim() !== '')
        {

            const filteredData=data.filter((e,i)=>e.name.toLowerCase()===search.toLowerCase())
            if(filteredData.length!==0)
            {
              setData(filteredData)
            }
            else{
              setData(data)
              alert('Character not found in this page')
            }
        }
      
    }  
  return (
<div className='flex flex-row items-center w-full space-x-2'>
            <input 
            type='text'
            placeholder='Enter a planet name'
            value={search}
            onChange={(e)=>{
               
                setSearch(e.target.value)
            }}
            className='w-full px-4 py-3 text-white bg-transparent border-2 rounded-md outline-none placeholder-gray-200/80 border-gray-200/60 focus:border-white md:w-1/2 focus:outline-none focus:bg-transparent'>
            </input>
            <button 
            onClick={()=>{searchResident()}}
            className='rounded-md px-5 py-3 text-black font-semibold bg-[#BA90C6]'>
              Search
            </button>

    </div>
  )
}

export default SearchBox