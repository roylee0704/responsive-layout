import React from 'react'

const Roll = () => {
  // the lesson here is to use relative to control and contain the absolute div.

  return (
    <div className="flex min-h-[calc(100vh-4.2rem)] flex-1 flex-col overflow-y-auto border-4 border-blue-500 bg-blue-100">
      <div className="relative h-full overflow-y-auto bg-yellow-500">
        <div className="absolute inset-x-0 top-0 z-50 border-2 border-red-700">
          <p>Header</p>
        </div>

        <div className="absolute inset-0 z-40 overflow-y-auto border-2 border-black bg-green-400">
          <p>Video</p>
          <p>Video</p>
          <p>Video</p>
          <p>Video</p>
          <p>Video</p>
          <p>Video</p>
          <p>Video</p>

          <p>Video</p>
          <p>Video</p>
          <p>Video</p>
          <p>Video</p>
          <p>Video</p>
          <p>Video</p>
          <p>Video</p>
          <p>Video</p>
          <p>Video</p>
          <p>Video</p>
          <p>Video</p>
          <p>Video</p>
          <p>Video</p>
          <p>Video</p>
          <p>Video</p>
          <p>Video</p>
          <p>Video</p>
          <p>Video</p>
          <p>Video</p>
          <p>Video</p>
          <p>Video</p>
          <p>Video</p>
          <p>Video</p>
          <p>Video</p>
        </div>
      </div>
    </div>
  )
}

export default Roll
