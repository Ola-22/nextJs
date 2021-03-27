import Head from 'next/head';
import React from 'react'
import Footer from '../Components/Footer';
import NavBar from '../Components/NavBar';

function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous"></link>
      </Head>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout;
