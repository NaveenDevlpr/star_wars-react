import React from 'react'

const PlanetCard = ({data}) => {
  return (
    <div className='rounded-lg shadow-lg flex flex-col  bg-white ring-1 ring-gray-200 w-full px-6'>
        <div className='flex flex-row items-center justify-center mt-2'>
            <h2 className='text-[30px] text-blue-900 font-semibold'>
                {data.name}
            </h2>
        </div>
            <div className='w-full'>
                <table className='w-full text-center table-fixed px-6 py-3'>
                    <tbody>
                        <tr className='border-t  border-gray-300'>
                           <th className='text-xl text-gray-400/80 font-medium  py-3'>Climate</th>
                           <td>:</td>
                           <td className='text-xl text-blue-900 font-medium py-3'>{data.climate}</td> 
                        </tr>

                        <tr>
                           <th className='text-xl text-gray-400/80 font-medium py-3'>Terrain</th>
                           <td>:</td>
                           <td className='text-xl text-blue-900 font-medium py-3 whitespace-pre-wrap'>{data.terrain}</td> 
                        </tr>

                        <tr>
                           <th className='text-xl text-gray-400/80 font-medium  py-3'>Population</th>
                           <td>:</td>
                           <td className='text-xl text-blue-900 font-medium py-3'>{data.population}</td> 
                        </tr>
                    </tbody>
                </table>
            </div>
       
    </div>
  )
}

export default PlanetCard