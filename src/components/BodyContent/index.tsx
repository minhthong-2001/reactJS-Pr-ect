import React from 'react'
import Product from './Product';
import Nav from '../Navigate';
import Header from '../Header';
import Footer from '../Footer';

export default function index() {
  return (
    <>
      <Nav />
      <Header />
      <div className='container mx-auto'>
          <Product />
      </div>
      <Footer />
    </>
  )
}
