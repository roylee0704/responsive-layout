import React from 'react'
import AutoComplete from './AutoComplete'

const Header = () => {
  return (
    <div className="fixed top-0 right-0 left-0 h-[4rem] border-4 border-green-600">
      <div className="flex items-center justify-center space-x-10">
        <p>Header</p>
        <AutoComplete />
      </div>
    </div>
  )
}

export default Header
