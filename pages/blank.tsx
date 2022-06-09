import React from 'react'

const blank = () => {
  return (
    <div className="h-screen w-[50vw] bg-gray-300">
      <div className="bg-blue-300 p-10"></div>
      <div className="relative h-40 w-full border-2 border-green-700">
        <div className=" absolute right-0 top-0 left-0 h-full overflow-y-auto bg-red-300">
          <p>a</p>
          <p>a</p>
          <p>a</p>
          <p>a</p>
          <p>a</p>
          <p>a</p>
          <p>a</p>
        </div>
      </div>
    </div>
  )
}

export default blank
