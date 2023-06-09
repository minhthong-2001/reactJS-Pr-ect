import React from 'react'

const styles = `
m-auto
cursor-pointer

text-gray-900 
bg-white border 
border-gray-300 

focus:outline-none 
hover:bg-gray-100 
focus:ring-4 
focus:ring-gray-200 
font-medium 

rounded-lg 
text-sm 
px-5 py-2.5 mr-2 mb-2 

dark:bg-gray-800 
dark:text-white 
dark:border-gray-600 
dark:hover:bg-gray-700 
dark:hover:border-gray-600 
dark:focus:ring-gray-700
`

const stylesButton = `
text-white 
bg-blue-700 
hover:bg-blue-800 

focus:ring-4 
focus:outline-none 
focus:ring-blue-300 
font-medium 

rounded-lg text-sm 
px-1.5 py-2.5 
text-center 
inline-flex 
items-center 
mr-2 dark:bg-blue-600 

dark:hover:bg-blue-700 
dark:focus:ring-blue-800
`
export default function Produc() {

  const documentsList = [
    'Mô hình AI',
    'Chuyên đề Chuyên sâu 2',
    'Tính toán song song và phân tán',
    'Hệ thống thông minh',
    'Hệ thống thông minh',
    'Mô hình AI',
    'Chuyên đề Chuyên sâu 2',
    'Tính toán song song và phân tán',
    'Hệ thống thông minh',
    'Hệ thống thông minh',
  ]
  return (
    <>
      <h1 className='text-center m-2 text-2xl font-bold'><ins>Menu product</ins></h1>
      <div className='grid grid-cols-4 '>
          {documentsList.map((item) => <div className={`${styles}`}>
            <img className='m-auto' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcQUVJ0gIMwcgTXc3pncWCqDZ8i69ZcST-SA&usqp=CAU" alt="" />
            <p className='my-2 truncate '>
              {item}
            </p>
            <div className='flex justify-items-center'>
              <button type="button" className={`${stylesButton}`}>
                <svg aria-hidden="true" className="w-5 h-5 mr-2 -ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path></svg>
                Buy now
              </button>
              <button type="button" className={`${stylesButton}`}>
                  Choose plan
                  <svg aria-hidden="true" className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </button>
            </div>
          </div>)}
      </div>
    </>
  )
}
