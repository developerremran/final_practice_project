import { useEffect, useState } from "react"

const menuHook =()=>{
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() =>{
      fetch('http://localhost:5000/products')
      .then(res => res.json())
      .then( data => {
       
          setData(data);
          setLoading(false)
         
      })
      .catch( error => console.log(error))
    },[])
    return [data, loading]

}


 

export default menuHook;