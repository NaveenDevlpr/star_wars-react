import React,{useState} from 'react'
import { FaChevronDown } from "react-icons/fa";
import ResidentCard from './ResidentCard';

const PlanetCard = ({data,resident,index}) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
       
        setIsOpen(!isOpen);
      };
  return (
    <div className={`rounded-lg mt-4 shadow-lg flex flex-col ring-1 ring-[#BA90C6] hover:ring-purple-300 hover:ring-4 bg-transparent hover:scale-105 transition duration-300 transform  w-full px-6`}>
        <div className='flex flex-row items-center justify-center mt-2 mb-2'>
            <h2 className='text-[30px] text-white font-semibold'>
                {data.name}
            </h2>
        </div>
            <div className='w-full'>
                <table className='w-full px-6 py-3 text-left table-fixed'>
                    <tbody>
                        <tr className='border-t border-gray-300'>
                           <th className='py-3 text-lg font-medium text-[#BA90C6]'>Climate</th>
                           <td className='text-lg text-white font-ldbold'>-</td>
                           <td className='py-3 text-lg font-medium text-white'>{data.climate==='n/a' || data.climate==='unknown' ? 'empty':data.climate}</td> 
                        </tr>

                        <tr>
                           <th className='py-3 text-lg font-medium text-[#BA90C6]'>Terrain</th>
                           <td className='text-lg text-white font-ldbold'>-</td>
                           <td className='py-3 text-lg font-medium text-white whitespace-pre-wrap'>{data.terrain==='n/a' || data.terrain==='unknown' ? 'empty':data.terrain}</td> 
                        </tr>

                        <tr>
                           <th className='py-3 text-lg font-medium text-[#BA90C6]'>Population</th>
                           <td className='text-lg text-white font-ldbold'>-</td>
                           <td className='py-3 text-lg font-medium text-white '>{data.population==='n/a' || data.population==='unknown' ? 'empty':data.population}</td> 
                        </tr>
                    </tbody>
                </table>
            </div>


            <div className='flex flex-col '>
                {
                    resident[index].length!==0 &&
                    (
                            <div className="flex items-center justify-between mt-4 mb-4 cursor-pointer" onClick={()=>{toggleAccordion()}}>
                            <h2 className="text-lg font-semibold text-gray-300">{'Residents Details'}</h2>
                            <FaChevronDown className={`w-6 h-6 mb-2 text-gray-300 ${isOpen ? 'transform rotate-180 duration-700 transition-all' : 'duration-700 transition-all'}`}/>
                            </div>

                            
                    )
                    
                }
                 
                    <div className={`overflow-hidden transition-max-h transform duration-1000 ${isOpen ? 'h-auto' : 'h-0'}`}>
                            <table className='text-left table-fixed'>
                                <thead className='text-[#BA90C6]'>
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
            </div>
       
    </div>
  )
}

export default PlanetCard