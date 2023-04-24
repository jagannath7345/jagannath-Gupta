import React, { useEffect, useState } from "react";
import Data from "./Data";
import axios from "axios"

function App() {
    const [query, setQuery] = useState("")
    const [data, setData] = useState([])
    useEffect(()=>{
    const fetchData = async()=>{
        const result = await axios.get(`http://localhost:5000/api/search?query=${query}`);
        console.log(result)
        setData(result.data)
    }
       if(query.length === 0 || query.length >2) fetchData()
    }, [query])
 return(

  <>
  <div className="container">
    <input
    className="search"
    placeholder="Search..."
    onChange={(e) => setQuery(e.target.value)}
    />
  </div>
  <Data data={data} />
  </>
 )
}

export default App;
