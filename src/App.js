import React from 'react' 
import Card from './Components/Card'
import data from './data'
import Card2 from './Components/Card2'

export default function App() {

  const places = data.map(data => {
    return (
        <Card {...data} key={data.id} />
        
    )
})
// console.log('this is the places array of modified objects');
// console.log(places);
// console.log(...places);

// const data2 =  {
//   id: 1,
//   title: "Life Lessons with Katie Zaferes",
//   description: "I will share with you what I call \"Positively Impactful Moments of Disappointment.\" Throughout my career, many of my highest moments only came after setbacks and losses. But learning from those difficult moments is what gave me the ability to rise above them and reach my goals.",
//   price: 136,
//   coverImg: "katie-zaferes.png",
//   stats: {
//       rating: 5.0,
//       reviewCount: 6
//   },
//   location: "Online",
//   openSpots: 0,
// } 

  return (
   <div>
    {places}
    {console.log(places)}
    {/* <Card2 propNameWhatever={data2}  />
    <Card2 {...data2}  />
    {console.log(<Card2 {...data2}  />)} */}
   </div>
  )
}