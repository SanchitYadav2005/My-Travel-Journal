import React from "react";
import Navbar from "./components/Navbar";
import Card from './components/Card'
import style from "./App.css"
import data from './data'



export default function App(){
  const cards = data.map(iteams =>{
    return(
      <Card 
        location= {iteams.location}
        img= {iteams.img}
        map = {iteams.map}
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