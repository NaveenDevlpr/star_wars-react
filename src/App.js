import { useEffect, useState } from 'react';
import getAllData from './services';
import PlanetCard from './components/PlanetCard';
import SearchBox from './components/SearchBox';
import Button from './components/Button';
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

function App() {
  const [url,seturl]=useState('https://swapi.dev/api/planets/?format=json')

  const [next,setNext]=useState()
  const [prev,setPrev]=useState()

  const [data,setData]=useState([])
  const [resident,setResident]=useState([])

  const [perPage,setPerPage]=useState(6)
  const [page,setPage]=useState(1)


  const getData=async()=>{
  const {nextURL,previousURL,resultsArray,residentsData}=await getAllData(url)

   setData(resultsArray)

   setResident(residentsData)

   setNext(nextURL)

   setPrev(previousURL)

  }

  const SelectedPage=(selected)=>{
    if(selected>=1 && selected<=Math.ceil(data.length / perPage) && selected!==page)
           setPage(selected)
  }

  
  useEffect(()=>{
   getData()
  },[url])
  return (
    <div className="flex flex-col w-full p-6 mx-auto space-y-4 max-w-7xl">
      <div className='flex flex-row items-center justify-center h-1/2'>
        <img src='http://imageshack.com/a/img922/3783/oyvsRd.png' className='w-[300px] h-full' alt='logo'></img>
      </div>
       <div className='flex flex-col justify-between space-y-4 md:flex-row md:items-center md:space-y-0'>
          
              <SearchBox data={data} setData={setData} url={next?next:prev} seturl={seturl}/>
          
          <div className='flex flex-row items-center space-x-4'>
            <Button name={'Prev'} link={prev} seturl={seturl}/>
            <button className='px-4 py-3 rounded-md text-black font-semibold bg-[#BA90C6]' onClick={()=>{seturl('https://swapi.dev/api/planets/?format=json')}}>
              Home
            </button>
            <Button name={'Next'} link={next} seturl={seturl}/>
          </div>
       </div>
        {
          data.length>0 ? (
            <div className='grid grid-cols-1 gap-8 lg:grid-cols-3 md:grid-cols-2'>
            {
              
                data.slice(page*perPage-perPage,page*perPage).map((planet,i)=>{
                  return(
                    <div key={i} className="">
                    <PlanetCard data={planet} resident={resident} index={i}/>
                  </div>
                  )
                })
              
              
            }
        </div>
          ):(
          <div className='flex flex-row items-center justify-center w-full h-screen text-center'>
            <AiOutlineLoading3Quarters className='w-8 h-8 animate-spin'/>
          </div>
          )
        }

        <div className='flex flex-row items-center justify-center'>
                  <span className="px-4 cursor-pointer" onClick={() => SelectedPage(page - 1)}>
                      <FaChevronLeft className='text-white' />
                    </span>
            {
              [...Array(Math.ceil(data.length/perPage))].map((e,i)=>{
                return(
                  <span key={i}className={`py-2 px-4 font-medium cursor-pointer ${page===i+1?'bg-[#BA90C6] rounded-md text-white':'text-white'}`} onClick={()=>{SelectedPage(i+1)}}>{i+1}</span>
                )
              })
            }

                  <span className="px-4 cursor-pointer" onClick={() => SelectedPage(page + 1)}>
                      <FaChevronRight className='text-white' />
                  </span>

        </div>
    </div>
  );
}

export default App;
