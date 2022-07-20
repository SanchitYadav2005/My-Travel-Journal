import React from "react";
import Navbar from "./components/Navbar";
import style from "./App.css"
import data from './data'


export default function App(){
  const cards = data.map(iteams =>{
    return(
      <Card 
        location= {iteams.location}
      />
    )
  })
  return(
    <div>
      <Navbar />
      {cards}
    </div>
  )
}