import React from 'react'

const Chat = () => {
  // the lesson here is to use relative to control and contain the absolute div.

  return (
    <div className="relative z-[-1] flex min-h-[calc(100vh-4.2rem)] flex-1 flex-col overflow-y-auto border-4 border-blue-500 bg-blue-100">
      <div className="absolute inset-x-0 top-0 z-10 bg-white">header</div>
      <div className="relative h-full overflow-y-auto bg-yellow-500">
        <div className="absolute">
          <p>content.............</p>
          <p>content.............</p>
          <p>content.............</p>
          <p>content.............</p>
          <p>content.............</p>
          <p>content.............</p>
          <p>content.............</p>
          <p>content.............</p>
          <p>content.............</p>
          <p>content.............</p>
          <p>content.............</p>
          <p>content.............</p>
          <p>content.............</p>
          <p>content.............</p>
          <p>content.............</p>
          <p>content.............</p>
          <p>content.............</p>
          <p>content.............</p>
          <p>content.............</p>
          <p>content.............</p>
          <p>content.............</p>
          <p>content.............</p>
          <p>content.............</p>
          <p>content.............</p>
          <p>content.............</p>
          <p>content.............</p>
          <p>content.............</p>
          <p>content.............</p>
          <p>content.............</p>
          <p>content.............</p>
          <p>content.............</p>
          <p>content.............</p>
          <p>content.............</p>
          <p>content.............</p>
          <p>content.............</p>
          <p>content.............</p>
          <p>content.............</p>
          <p>content.............</p>
          <p>content.............</p>
          <p>content.............</p>
          <p>content.............</p>
          <p>content.............</p>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 bg-white">
        type your message here
      </div>
    </div>
  )
}

export default Chat
