import React,{useState} from 'react'

export default function Search({getSearch}) {
    const [input,setInput]=useState("")
    return (
        <div>
            <input type="text" placeholder="Search" onChange={(e)=>setInput(e.target.value)} />
            <button onClick={()=>getSearch(input)}>Search</button>
        </div>
    )
};