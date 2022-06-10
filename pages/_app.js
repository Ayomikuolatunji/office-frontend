import '../styles/globals.css';
import {Provider} from "react-redux"
import { NextUIProvider } from '@nextui-org/react';
import Head from 'next/head';
import { useRouter } from 'next/router'
import store from '../redux/store';
import { PersistGate } from 'redux-persist/integration/react'
import MainEmplyeeDashhboard from '../layouts/EmplyeeDashhboard';
import CompanyDashBoard from '../layouts/CompanyDashBoard';



function MyApp({ Component, pageProps ,...appProps}) {
  const router=useRouter()

  if (router.pathname.startsWith('/login')) {
    return (
      <NextUIProvider>
         <Provider store={store.store}>
            <PersistGate persistor={store.persistStore}>
                <Component {...pageProps} />
            </PersistGate>
        </Provider>
      </NextUIProvider> 
    )
  }

  if (["/admin-dashboard","/admin-dashboard/tasks"].includes(appProps.router.pathname)) {
    return  <Provider store={store.store}>
            <NextUIProvider>
              <PersistGate persistor={store.persistStore}>
                <CompanyDashBoard>
                    <Component {...pageProps} />
                </CompanyDashBoard>
              </PersistGate>
            </NextUIProvider>
        </Provider>
  }

   
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
