import React, { useEffect, useState } from 'react'

const Count = () => {
    const [count, setCount] = useState(0)

    useEffect(()=>{
        console.log("Bileşen Ekrana Geldi")
    },[])

    useEffect(()=>{
        return () => {
            console.log("Bileşen Ekrandan Kaldırıldı")
        }
    },[])

    useEffect(()=>{
        console.log("Bileşen Güncellendi")
    }, [count])

  return (
    <div className='d-flex justify-content-center'>
      <div className='d-flex align-items-center gap-3'>
         
        <button onClick={()=>setCount(count - 1)} className='btn btn-danger'>-</button>
        <span>{count}</span>
        <button onClick={()=>setCount(count + 1)} className='btn btn-success'>+</button>
       
      </div>
    </div>
  )
}

export default Count
