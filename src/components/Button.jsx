import React from 'react'

const Button = ({name,link,seturl}) => {

    const changePage=()=>{
        if(link){
            seturl(link)
        }
        else{
            alert("No more page")
        }
    }
  return (
    <button className='px-4 py-3 rounded-md text-white bg-blue-900' onClick={()=>{changePage()}}>
        {name}
    </button>
  )
}

export default Button