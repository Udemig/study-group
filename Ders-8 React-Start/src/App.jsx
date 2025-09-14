import React, { useState } from 'react'
import Header from './Header'
import Card from './Card'
import Count from './Count'

const App = () => {
    const cards = [
        {title: "Title-1", desc: "Açıklama-1"},
        {title: "Title-2", desc: "Açıklama-2"},
        {title: "Title-3", desc: "Açıklama-3"},
    ]
    const [isShow, setIsShow] = useState(false)
    const [isShow2i , setIsShow2] = useState(false)
  return (
    <div>
        <Header />


        <button onClick={()=>setIsShow(!isShow)} className='btn btn-secondary'>Göster/Gizle</button>

       {isShow && cards.map((item) => (
        <div className='d-flex align-items-center'>
         <Card title={item.title} desc={item.desc} />
         </div>
       ))}


        <h1>Count</h1>
       <button onClick={() =>setIsShow2(!isShow2i)} className='btn btn-dark m-3'>Göster / Gizle</button>

      {isShow2i && <Count />} 
      
    </div>
  )
}

export default App
