import React from 'react';
import About from '@/components/About/About';
import Head from 'next/head';
export default function index() {
  return (
    <div className='container mx-auto'>
        <Head>
            <title>About</title>
            <meta name="description" content="Products" />

        </Head>
        <div>
            <About />
        </div>
    </div>
  )
}
