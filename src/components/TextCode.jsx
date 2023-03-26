import React from 'react'
import Typewriter from "typewriter-effect";

export default function TextCode({text,TextAnim}) {
  return (
    <pre className='whitespace-pre-wrap overflow-auto text-[14px]' >
            {TextAnim ?
            <Typewriter
            options={{
                strings:text,
                autoStart:true,
                delay:30
            }}
            /> :
            text
             }
        </pre> 
  )
}
