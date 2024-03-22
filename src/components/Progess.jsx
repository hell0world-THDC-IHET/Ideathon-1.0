import React from 'react'

const Progess = () => {
  return (
<div className='p-4'>
    <div className='text-2xl mb-4'>Current Progress:</div>
  <div class="inline-block mb-2 ms-[calc(5%-1.25rem)] py-0.5 px-1.5 bg-blue-50 border border-blue-200 text-xs font-medium text-blue-600 rounded-lg dark:bg-blue-100 dark:border-blue-800 dark:text-blue-500">5%</div>
  <div class="flex w-full h-2 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
    <div class="flex flex-col justify-center rounded-full overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500" style={{width: "5%"}}></div>
  </div>
</div>
  )
}

export default Progess