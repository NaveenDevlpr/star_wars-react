import axios from 'axios'



const getPlanetData=async(url)=>{
    const data=await axios.get(url).then((res)=>res.data)
    const nextURL=data.next
    const previousURL=data.previous
    const resultsArray=data.results
   return {
    nextURL,previousURL,resultsArray
   }
}


const getResidentData=async(arrayURL)=>{

    if(arrayURL)
    {
        const promiseData=await Promise.all(arrayURL.map((e,i)=>axios.get(e)))
        
        const residents=await promiseData.map((e,i)=>e.data)

        return residents
        
    }
}

const getAllData=async(url)=>{
    var residentsData=[]
    const planetData=await getPlanetData(url)
    const {nextURL,previousURL,resultsArray}=planetData
    if(resultsArray)
    {
        residentsData = await Promise.all(resultsArray.map(async (e, i) => {
            return await getResidentData(e.residents);
        }));
       
    }
   

    return {
        nextURL,previousURL,resultsArray,residentsData
    }

}
export default getAllData