import '../styles/globals.css'
import Head from "next/head"
import {ChakraProvider} from "@chakra-ui/react"
import Nprogress from "nprogress"

import Layout from "../components/Layout"
import { Router } from 'next/router'

function MyApp({ Component, pageProps }) {
  Nprogress.configure({showSpinner:false})
  Router.events.on("routeChangeStart",()=>{
    Nprogress.start();
  });
  Router.events.on("routerChangeComplete",()=>{
    Nprogress.done();
  })
  return(
    <>
    <Head>
    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css' integrity='sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ==' crossOrigin='anonymous' referrerPolicy='no-referrer' />
    </Head>
    <ChakraProvider>
      <Layout>
      <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
    </>
  )
  
 
}

export default MyApp
