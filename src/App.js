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

  
  
  useEffect(()=>{
   getData()
  },[])
  return (
    <div className="App">
     <div className='' style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr 1fr'}}>
        {
          data.map((e,i)=>{
            return(
              <div key={i} style={{display:'flex',flexDirection:'column'}}>
                  <h2>Name : {e.name}</h2>
                  <h2>Population : {e.population}</h2>  
                  <h2>Climate : {e.climate}</h2>    
                  <h2>
                  {
                    resident.map((e,j)=>{
                      
                        e[i].map((ele,k)=>{
                          return(
                            <div>{ele.name}</div>
                          )
                        })
                      
                    })
                  }            
                  </h2>
              </div>
            ) 
          })
        }
     </div>
    </div>
  );
}

export default App;
