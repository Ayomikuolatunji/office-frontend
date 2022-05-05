import '../styles/globals.css';
import {Provider} from "react-redux"
import { NextUIProvider } from '@nextui-org/react';
import Head from 'next/head';
import store from '../redux/store';
import { PersistGate } from 'redux-persist/integration/react'
import MainEmplyeeDashhboard from '../layout/employee-dashboard/MainEmplyeeDashhboard';



function MyApp({ Component, pageProps ,...appProps}) {
  if (["/employee-dashboard",'/employee-dashboard/profile', '/employee-dashboard/companies',  '/employee-dashboard/inbox'].includes(appProps.router.pathname)) {
    return  <Provider store={store.store}>
            <NextUIProvider>
              <PersistGate persistor={store.persistStore}>
                <MainEmplyeeDashhboard>
                    <Component {...pageProps} />
                </MainEmplyeeDashhboard>
              </PersistGate>
            </NextUIProvider>
        </Provider>
  }
  return (
   <div>
      <Head>
      <title>Office Room</title>
         <meta name="description" content="Generated by create next app" />
         <link rel="icon" href="/favicon.ico" />
      </Head>
      <Provider store={store.store}>
            <NextUIProvider>
               <PersistGate persistor={store.persistStore}>
                 <Component {...pageProps} />
               </PersistGate>
            </NextUIProvider>
      </Provider>
     
</div>
    
  )
}

export default MyApp
