import './features.css';
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
  TextField
} from '../src/app/components/muiComponents';
import { useEdrawData } from '../src/app/utils/EdrawDataContext';
import { splitAndHighlightMultiple } from '../src/app/utils/EdrawDataContext';
export default function Features() {
  const featuresData = useEdrawData('/api/feature');
  if (!featuresData) return <div>Loading...</div>;
  const {
    Heading
  } = featuresData;

  const highlightWords = ['e-Draw'];
  const highlightWords1 = ['flexibility', 'scalability']
  return (
    <>
    <Box className="box">
      <Container className='container'>

        <Grid container>
          <Grid container rowSpacing={2} className="grid1">
            <Grid>
              <h1>Explore<span className='red-text'> e-Draw’s</span> Advanced Features</h1>
              {Heading}
            </Grid>
            <Grid>
              <div>
              <span className='red-text'>e-Draw’s</span> is your all-in-one solution for creating high-quality labels, documents, and packaging materials. Designed with flexibility and scalability in mind, it’s perfect for both small and global enterprises.
              </div>
            </Grid>
            <Grid>
                <Button className='get-started'>Get Started</Button>
            </Grid>

          </Grid>
          <Grid container className="grey-card">
            <Grid size={6} className="text-left">
            Multi-Page Authoring: Perfect for IFUs, multi-language labels, and complex documents.
            </Grid>
            <Grid size={6}>
            <img  src='/vector19.png' />
            </Grid>
            <Grid size={6}>
            <img  src='/vector24.png' />
            </Grid>
            <Grid size={6} className="text-left">
            Barcode and QR Code Generation: Create, print, and manage all barcode formats from a single platform.
            </Grid>
            <Grid size={6} className="text-left">
            Multi-Page Authoring: Perfect for IFUs, multi-language labels, and complex documents.
            </Grid>
            <Grid size={6}>
            <img  src='/vector21.png' />
            </Grid>
            <Grid size={6}>
            <img  src='/vector22.png' />
            </Grid>
            <Grid size={6} className="text-left">
            Database Integration: Automate data updates and reduce manual errors by connecting directly to your data sources.
            </Grid>
            <Grid size={6} className="text-left">
            Cloud and On-Premise: Work from anywhere with real-time collaboration or secure your data on-premise.
            </Grid>
            <Grid size={6}>
            <img  src='/vector23.png' />
            </Grid>
          </Grid>
        </Grid>
      </Container>
      </Box>
    </>
  );
}