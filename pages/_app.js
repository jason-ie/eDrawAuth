import Footer from "@/app/components/footer";
import Navbar from "../src/app/components/Navbar";
import { Provider } from 'react-redux';
import store from '../src/app/redux/store';
import "../src/app/global.css";
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
  Stack
} from '../src/app/components/muiComponents';
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
 
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
    </Provider>
  );
}

export default MyApp;
