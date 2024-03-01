import { useEffect, useState } from 'react';
import './App.css';
import getAllData from './services';
function App() {
  const [url,seturl]=useState('https://swapi.dev/api/planets/?format=json')


  const [data,setData]=useState([])
  const [resident,setResident]=useState([])


  const getData=async()=>{
   const {nextURL,previousURL,resultsArray,residentsData}=await getAllData(url)
   setData(resultsArray)
   setResident(residentsData)

  }

  resident.map((e)=>{
    console.log(e)
  })
  
  useEffect(()=>{
   getData()
  },[])
  return (
    <div className="p-6 w-full">
        <div className='grid grid-cols-3 w-full'>
            
        </div>
    </div>
  );
}

export default App;
