// pages/_app.js
import Footer from '@/app/components/footer';
import Navbar from '../src/app/components/Navbar';
import { Provider } from 'react-redux';
import store from '../src/app/redux/store';
import { EdrawDataProvider } from '../src/app/utils/EdrawDataContext';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Grid } from '../src/app/components/muiComponents';
import '../src/app/global.css';

function MyApp({ Component, pageProps }) {
    const router = useRouter();
    const isAuthPage = router.pathname.startsWith('/auth/');
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <title>eDraw</title>
            </Head>
            <Provider store={store}>
                <EdrawDataProvider>
                    {/* <Grid container rowSpacing={6}>
                        <Grid size={12}>{!isAuthPage && <Navbar />}</Grid>
                        <Grid size={12}>
                            <Component {...pageProps} />
                        </Grid>
                        <Grid size={12}>{!isAuthPage && <Footer />}</Grid>
                    </Grid> */}
                    <div className='grid grid-cols-12'>
                        <div class="col-span-12">
                            {!isAuthPage && <Navbar />}
                        </div>
                        <div class="col-span-12">
                            <Component {...pageProps} />
                        </div>
                        <div class="col-span-12">
                            {!isAuthPage && <Footer />}
                        </div>
                    </div>
                </EdrawDataProvider>
            </Provider>
        </>
    );
}

export default MyApp;
