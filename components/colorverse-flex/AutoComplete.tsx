import React from 'react'
import { SearchIcon } from '@heroicons/react/solid'

const AutoComplete = () => {
  const styles = {
    wrapper:
      'z-50 flex h-[60vh] w-[50vw] flex-col border-2 border-red-500 bg-gray-500 outline-none',
    searchWrapper:
      'relative z-50 flex w-full items-center border-8 border-black',
    search: 'flex flex-1 border-2 border-blue-400 outline-none',

    /* for this div to fill parent height, use flex-1 */
    resultWrapper:
      'relative flex-1 h-full w-full overflow-y-auto border-4 border-green-200',
    result: 'absolute w-full border-2 border-blue-700',
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
          <p>content.............</p>
          <p>content.............</p>
        </div>
      </div>
    </div>
  )
}

export default AutoComplete
