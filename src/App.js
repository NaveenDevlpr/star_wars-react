import { useEffect, useState } from 'react';
import getAllData from './services';
import PlanetCard from './components/PlanetCard';
import SearchBox from './components/SearchBox';
import Button from './components/Button';
function App() {
  const [url,seturl]=useState('https://swapi.dev/api/planets/?format=json')

  const [next,setNext]=useState()
  const [prev,setPrev]=useState()

  const [data,setData]=useState([])
  const [resident,setResident]=useState([])


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
       <div className='flex flex-row items-center justify-around'>
          <SearchBox data={data} setData={setData}/>
          <div className='flex flex-row items-center space-x-4'>
            <Button name={'Prev'} link={prev} seturl={seturl}/>
            <Button name={'Next'} link={next} seturl={seturl}/>
          </div>
       </div>
        <div className='w-full grid grid-cols-3 gap-10'>
            {
              data.map((planet,i)=>{
                return(
                  <PlanetCard data={planet}/>
                )
              })
            }
        </div>
    </div>
  );
}

export default App;
