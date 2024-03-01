import React,{useState} from 'react'
import { FaChevronDown } from "react-icons/fa";
import ResidentCard from './ResidentCard';

const PlanetCard = ({data,resident,index}) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
       
        setIsOpen(!isOpen);
      };
  return (
    <div className={`rounded-lg shadow-lg flex flex-col bg-white ring-1 ring-gray-200 w-full px-6`}>
        <div className='flex flex-row items-center justify-center mt-2'>
            <h2 className='text-[30px] text-blue-900 font-semibold'>
                {data.name}
            </h2>
        </div>
            <div className='w-full'>
                <table className='w-full text-left table-fixed px-6 py-3'>
                    <tbody>
                        <tr className='border-t  border-gray-300'>
                           <th className='text-lg text-gray-400/80 font-medium  py-3'>Climate</th>
                           <td>:</td>
                           <td className='text-lg text-blue-900 font-medium py-3'>{data.climate==='n/a' || data.climate==='unknown' ? 'empty':data.climate}</td> 
                        </tr>

                        <tr>
                           <th className='text-lg text-gray-400/80 font-medium py-3'>Terrain</th>
                           <td>:</td>
                           <td className='text-lg text-blue-900 font-medium py-3 whitespace-pre-wrap'>{data.terrain==='n/a' || data.terrain==='unknown' ? 'empty':data.terrain}</td> 
                        </tr>

                        <tr>
                           <th className='text-lg text-gray-400/80 font-medium  py-3'>Population</th>
                           <td>:</td>
                           <td className='text-lg text-blue-900 font-medium py-3'>{data.population==='n/a' || data.population==='unknown' ? 'empty':data.population}</td> 
                        </tr>
                    </tbody>
                </table>
            </div>


            <div className='flex flex-col'>
                {
                    resident[index].length!==0 &&
                    (
                            <div className="flex justify-between items-center mt-4 mb-2 cursor-pointer" onClick={()=>{toggleAccordion()}}>
                            <h2 className="text-lg font-semibold">{'Residents Details'}</h2>
                            <FaChevronDown className={`w-6 h-6 mb-2 ${isOpen ? 'transform rotate-180' : ''}`}/>
                            </div>

                            
                    )
                    
                }
                 {
                    isOpen&& (
                        <div className='flex flex-col w-full'>
                            <table className='table-fixed text-left'>
                                <thead>
                                    <tr>
                                        <th className='p-2'>Name</th>
                                        <th className='p-2'>Gender</th>
                                        <th className='p-2'>Mass</th>
                                        <th className='p-2'>Height</th>
                                    </tr>
                                </thead>
                                <tbody>
                                        {
                                    resident.length>0 && resident[index].map((ele,i)=>{
                                            return(
                                                <ResidentCard data={ele}/>
                                            )
                                        })
                                        }
                                </tbody>
                            </table>
                           
                            
                        </div>
                    )
                }
              
           
                
                
                   
            </div>
       
    </div>
  )
}

export default PlanetCard