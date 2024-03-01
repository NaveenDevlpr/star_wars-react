import React, { useEffect, useState } from 'react'

const SearchBox = ({data,setData,url,seturl}) => {
    const [search,setSearch]=useState('')
 
    const searchResident=()=>{
       
        if(search && search.trim() !== ''){

            const filteredData=data.filter((e,i)=>e.name.toLowerCase()===search.toLowerCase())
            setData(filteredData)
        }
        if(search.trim()===''){
       seturl(url)
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
            className='w-full px-4 py-3 bg-transparent border-2 outline-none md:w-1/2 rounded-md border-gray-400/50 focus:border-gray-500 focus:outline-none focus:bg-transparent'>
            </input>
            <button 
            onClick={()=>{searchResident()}}
            className='rounded-md px-5 py-3 text-white bg-blue-900'>
              Search
            </button>

    </div>
  )
}

export default SearchBox