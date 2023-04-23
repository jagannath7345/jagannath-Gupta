import React, { useEffect, useState } from "react";
import Data from "./Data";
import axios from "axios"

function App() {
    const [query, setQuery] = useState("")
    const [ads, setAds] = useState([])

    const fetchData = async()=>{
        const result = await axios.get(`http://localhost:5000/api/search`);
      
        console.log(result)
    }
    useEffect(()=>{
        fetchData()
    }, [])
 return(

  <>
  <h1>hello</h1>
  {/* <Data /> */}
  </>
 )
}

export default App;
