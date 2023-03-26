import React from 'react'

export default function TextArea({placeholder, doApi,searchRef}) {
  return (
    <textarea
            onKeyDown={(e) => {
              if (e.key == "Enter") {
                doApi();
              }
            }}
            ref={searchRef}
            type="text"
            placeholder="placeholder"
            className=" textarea textarea-bordered textarea-lg w-full pr-[10%]"
          />
  )
}
