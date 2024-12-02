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
    Heading, Description, Feature1, Feature2, Feature3, Feature4, Feature5
  } = featuresData;

  const highlightWords = ['e-Draw’s'];
  return (
    <>
    <Box className="box">
      <Container className='container'>

        <Grid container>
          <Grid container rowSpacing={2} className="grid1">
            <Grid>
              <h1> {splitAndHighlightMultiple(Heading, highlightWords)}</h1>
             
            </Grid>
            <Grid>
              <div>
              {splitAndHighlightMultiple(Description, highlightWords)}
              </div>
            </Grid>
            <Grid>
                <Button className='get-started'>Get Started</Button>
            </Grid>

          </Grid>
          <Grid container className="grey-card">
            <Grid size={6} className="text-left">
            {Feature1}
            </Grid>
            <Grid size={6}>
            <img  src='/vector19.png' />
            </Grid>
            <Grid size={6}>
            <img  src='/vector24.png' />
            </Grid>
            <Grid size={6} className="text-left">
            {Feature2}
            </Grid>
            <Grid size={6} className="text-left">
            {Feature3}
            </Grid>
            <Grid size={6}>
            <img  src='/vector21.png' />
            </Grid>
            <Grid size={6}>
            <img  src='/vector22.png' />
            </Grid>
            <Grid size={6} className="text-left">
            {Feature4}
            </Grid>
            <Grid size={6} className="text-left">
            {Feature5}
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