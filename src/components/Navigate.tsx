import React, { useState } from 'react';
import {NextRouter, useRouter} from 'next/router';

export default function index() {
    const router: NextRouter = useRouter();

    const [list, setList] = useState([
        {
            href: '/',
            name: 'Home',
        },
        {
            href: '/about',
            name: 'About',
        },
        {
            href: '/detail',
            name: 'Details',
        },
        {
            href: '/login',
            name: 'Login',
        },
    ]);

  return (
    <>
        <nav className='flex items-center justify-between max-w-full p-1 bg-gradient-to-r from-[#141E30] to-[#243B55] text-white'>
            <div className='w-12 p-1'>
                <img className='rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDW24m42s27ZZQ4jnYjwCRfNfsJ4aSlIunVw&usqp=CAU" alt="" />
            </div>
            <div className='flex justify-item-center'>
                <ul className='flex'>
                    {list.map((items) => <li className='p-2 mx-1 rounded-lg cursor-pointer hover:bg-gray-900 hover:text-white' onClick={() => router.push(items.href)}>{items.name}</li>)}
                </ul>
            </div>
            <div>
                <form>   
                    <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </div>
                        <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search ..." required />
                        <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                    </div>
                </form>
            </div>
        </nav>
    </>
  )
}
