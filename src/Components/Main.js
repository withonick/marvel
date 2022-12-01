import React from "react"
import { Character } from "./Character"
import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export const Main = () => {
  const [url,setUrl]=useState("http://gateway.marvel.com/v1/public/characters?ts=1&apikey=baa81f45cf8b60c14212585d968f1e4b&hash=287a51754dbac8560860f01d06309667")
  const [item,setItem]=useState();
  const [search,setSearch]=useState("");
  useEffect(()=>{
    const fetch=async()=>{
      const res=await axios.get(url)
      setItem(res.data.data.results);
    }
    fetch();
  },[url])
  
  const searchMarvel=()=>{
    setUrl(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${search}&ts=1&apikey=baa81f45cf8b60c14212585d968f1e4b&hash=287a51754dbac8560860f01d06309667`)
  }

    return (
        <>

            <div className="header">
                <div className="bg">
                    <img src="./Images/background.jpg" alt="" />
                </div>
                <div className="search-bar">
                    <img src="./Images/logo.png" alt="logo"/>
                    <Box
                        sx={{
                            width: 500,
                            maxWidth: '100%',
                            marginLeft: 50,
                        }}
                    >
                        <TextField fullWidth label="Search" id="Search" onChange={e=>setSearch(e.target.value)} onKeyPress={searchMarvel}/>
                    </Box>
                </div>
            </div>
            <div className="content">

                {
                    (!item)?<p><code>Characters not found</code></p>:<Character data={item}/>
                }
            </div>
        </>
    )
}
