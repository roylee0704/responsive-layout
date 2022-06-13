import React from 'react'
import { SearchIcon } from '@heroicons/react/solid'

const AutoComplete = () => {
  const styles = {
    wrapper: 'w-[50vw] border-2 border-red-500 bg-gray-500',
    searchWrapper:
      'relative z-50 flex w-full items-center border-8 border-black',
    search: 'flex flex-1 border-2 border-blue-400 outline-none',

    /* for this div to fill parent height, use flex-1 */
    resultWrapper: 'relative border-4 border-green-200',
    result:
      'absolute max-h-80 bg-blue-400 overflow-y-auto w-full border-2 border-blue-700',
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.searchWrapper}>
        <SearchIcon className="h-5 w-5" />
        <input type="text" className={styles.search} placeholder="Search" />
      </div>

      <div className={styles.resultWrapper}>
        <div className={styles.result}>
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
          <p>hello.............</p>
          <p>content.............</p>
        </div>
      </div>
    </div>
  )
}

export default AutoComplete
