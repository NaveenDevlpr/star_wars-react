import React from 'react'

const ResidentCard = ({data}) => {
  return (
   
        <tr className='border-t border-gray-400'>
                    <td className='p-2 text-white whitespace-break-spaces'>{data.name}</td>
                    <td className='p-2 text-white whitespace-break-spaces'>{data.gender==='n/a' || data.gender==='unknown' ? 'empty':data.gender}</td>
                    <td className='p-2 text-white whitespace-break-spaces'>{data.mass==='n/a' || data.mass==='unknown' ? 'empty':data.mass}</td>
                    <td className='p-2 text-white whitespace-break-spaces'>{data.height==='n/a' || data.height==='unknown' ? 'empty':data.height}</td>
        </tr>
  )
}

export default ResidentCard