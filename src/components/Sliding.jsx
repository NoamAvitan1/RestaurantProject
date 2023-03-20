import React, { useMemo } from 'react'

export default function Sliding() {
    const Photos = useMemo(() => [
        'https://img.zoechip.cc/resize/1278x768/cd/73/cd73896af8d8e87473f38aa1c0bb1888/cd73896af8d8e87473f38aa1c0bb1888.jpg',
        'https://img.zoechip.cc/resize/1278x768/82/fb/82fb5fb5151d07be758eabfe4c20b70e/82fb5fb5151d07be758eabfe4c20b70e.jpg',
        'https://img.zoechip.cc/resize/1278x768/71/54/715407760baa697b9fe3bed477a2dfcc/715407760baa697b9fe3bed477a2dfcc.jpg',

    ],[])
  return (
    <section className='w-full grid grid-cols-1 grid-rows-1'>
        {Photos.map((photo,i) =>(
          <img key={i} src={photo[i]} alt=""/>  
        ))}
    </section>
  )
}
