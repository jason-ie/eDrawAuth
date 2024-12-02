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
      <div className='box'>


        <div className='container'>
          <h1> {splitAndHighlightMultiple(Heading, highlightWords)}</h1>
          <div>
            {splitAndHighlightMultiple(Description, highlightWords)}
          </div>
          <Button className='get-started'>Get Started</Button>
          <div className='grid grid-cols-12 grey-card'>
            <div className='col-span-6'>
              {Feature1}
            </div>
            <div className='col-span-4'>
              <img src='/vector19.png' />
            </div>
            <div className='col-span-6'>
              <img src='/vector24.png' />
            </div>
            <div className='col-span-6'>
              {Feature2}
            </div>
            <div className='col-span-6'>
              {Feature3}
            </div>
            <div className='col-span-6'>
              <img src='/vector21.png' />
            </div>
            <div className='col-span-6'>
              <img src='/vector22.png' />
            </div>
            <div className='col-span-6'>
              {Feature4}
            </div>
            <div className='col-span-6'>
              {Feature5}
            </div>
            <div className='col-span-6'>
              <img src='/vector23.png' />
            </div>
          </div>

        </div>
      </div>
    </>
  );
}