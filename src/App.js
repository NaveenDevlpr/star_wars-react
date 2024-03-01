import { useEffect, useState } from 'react';
import getAllData from './services';
import PlanetCard from './components/PlanetCard';
import SearchBox from './components/SearchBox';
import Button from './components/Button';
import { AiOutlineLoading3Quarters } from "react-icons/ai";

function App() {
  const [url,seturl]=useState('https://swapi.dev/api/planets/?format=json')

  const [next,setNext]=useState()
  const [prev,setPrev]=useState()

  const [data,setData]=useState([])
  const [resident,setResident]=useState([])

  const [perPage,setPerPage]=useState()


  const getData=async()=>{
  const {nextURL,previousURL,resultsArray,residentsData}=await getAllData(url)

   setData(resultsArray)

   setResident(residentsData)

   setNext(nextURL)

   setPrev(previousURL)

  }

  
  
  useEffect(()=>{
   getData()
  },[url])
  return (
    <div className="p-6 max-w-7xl mx-auto w-full flex flex-col space-y-4">
       <div className='flex md:flex-row flex-col md:items-center space-y-4 md:space-y-0 justify-between'>
          
              <SearchBox data={data} setData={setData} url={next?next:prev} seturl={seturl}/>
          
          <div className='flex flex-row items-center space-x-4'>
            <Button name={'Prev'} link={prev} seturl={seturl}/>
            <Button name={'Next'} link={next} seturl={seturl}/>
          </div>
       </div>
        {
          data.length>0 ? (
            <div className='w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10'>
            {
              
                data.map((planet,i)=>{
                  return(
                    <div key={i} className="h-full">
                    <PlanetCard data={planet} resident={resident} index={i}/>
                  </div>
                  )
                })
              
              
            }
        </div>
          ):(
          <div className='flex flex-row items-center justify-center text-center w-full h-screen'>
            <AiOutlineLoading3Quarters className='animate-spin w-8 h-8'/>
          </div>
          )
        }
    </div>
  );
}

export default App;
