import Footer from '@/app/components/footer';
import Navbar from '../src/app/components/Navbar';
import { Provider } from 'react-redux';
import store from '../src/app/redux/store';
import { useRouter } from 'next/router';
import '../src/app/global.css';
import {
    AppBar,
    Box,
    Toolbar,
    IconButton,
    Typography,
    Menu,
    Container,
    MenuItem,
    Grid,
    Button,
    Stack,
} from '../src/app/components/muiComponents';
function MyApp({ Component, pageProps }) {
    const router = useRouter();
    const isAuthPage = router.pathname.startsWith('/auth/');
    return (
        <Provider store={store}>
            <Grid container rowSpacing={6}>
                <Grid size={12}>{!isAuthPage && <Navbar />}</Grid>
                <Grid size={12}>
                    <Component {...pageProps} />
                </Grid>
                <Grid size={12}>{!isAuthPage && <Footer />}</Grid>
            </Grid>
        </Provider>
    );
}

export default MyApp;
