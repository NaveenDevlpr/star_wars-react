import React from 'react'

const ResidentCard = ({data}) => {
  return (
   
        <tr className='border-t border-gray-300'>
                    <td className='whitespace-break-spaces p-2'>{data.name}</td>
                    <td className='whitespace-break-spaces p-2'>{data.gender==='n/a' || data.gender==='unknown' ? 'empty':data.gender}</td>
                    <td className='whitespace-break-spaces p-2'>{data.mass==='n/a' || data.mass==='unknown' ? 'empty':data.mass}</td>
                    <td className='whitespace-break-spaces p-2'>{data.height==='n/a' || data.height==='unknown' ? 'empty':data.height}</td>
        </tr>
  )
}

export default ResidentCard