import React from 'react';
import Head from 'next/head'
import Nav from '@/components/Navigate';
import BodyContent from '@/components/BodyContent/index';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className='max-w-full'>
      <Head>
        <title>Home</title>
        <meta
          name="description"
          content="TypeScript starter for Next.js that includes all you need to build amazing apps"
        />
      </Head>
      
      <Nav />
      <Header />
      <BodyContent/>
      <Footer />
    </div>
  );
}
