// pages/_app.js
import Footer from "@/app/components/footer";
import Navbar from "../src/app/components/Navbar";
import { Provider } from 'react-redux';
import store from '../src/app/redux/store';
import { EdrawDataProvider } from '../src/app/utils/EdrawDataContext';
import "../src/app/global.css";
import {
  Grid
} from '../src/app/components/muiComponents';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <EdrawDataProvider>
      <Grid container rowSpacing={6}>
      <Grid size={12}>
        <Navbar />
      </Grid>
      <Grid size={12}>
        <Component {...pageProps} />
      </Grid>
      <Grid size={12}>
        <Footer />
      </Grid>
    </Grid>
      </EdrawDataProvider>
    </Provider>
  );
}

export default MyApp;
