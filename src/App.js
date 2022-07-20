import React from "react";
import Navbar from "./components/Navbar";
import Card from './components/Card'
import style from "./App.css"
import data from './data'



export default function App() {
  const cards = data.map(iteams => {
    return (
      <Card
        key={iteams.id}
        country={iteams.countryName}
        place={iteams.placeName}
        img={iteams.imgSrc}
        date={iteams.visitDate}
        location={iteams.map}
        info={iteams.discription}
      />
    )
  })
  return (
    <div>
      <Navbar />
      {cards}
    </div>
  )
}