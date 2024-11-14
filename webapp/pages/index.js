// pages/index.js
import Link from 'next/link';
import { useEdrawData } from '../src/app/utils/EdrawDataContext';
import './home.css';
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

export default function Home() {
    const edrawData = useEdrawData();

    if (!edrawData) return <div>Loading...</div>;
    const { Title: edrawTitle, Description, WhyeDraw, WhyeDrawDesc, WhyeDrawSubHeading, Feature1 } = edrawData;
    const titleParts = edrawTitle.split("e-Draw");

    return (
        <>
            <Container className='container'>
                <Grid container rowSpacing={10} columnSpacing={{ xs: 1, sm: 2, md: 3 }} className="grid1">
                    <Grid container size={7} rowSpacing={1}>
                        <Grid>
                            <h1>
                                {titleParts.map((part, index) => (
                                    <span key={index}>
                                        {part}
                                        {index < titleParts.length - 1 && (
                                            <span className="highlighted">e-Draw</span>
                                        )}
                                    </span>
                                ))}
                            </h1>
                        </Grid>
                        <Grid>
                            <h3>{Description}</h3>
                        </Grid>
                        <Grid>
                            <Button variant="outlined" className="exoloreFeatures">Explore Features</Button>

                            <Button variant="contained" className="getStartedFree">
                                Get Started For
                            </Button>
                        </Grid>



                    </Grid>
                    <Grid size={4} className='overlap-img'>
                        <img src="/Vector2.png" alt="Vector 2" />
                        <img className="eifu-gif" src="/Vector3.png" alt="Vector 3" />
                    </Grid>
                </Grid>
            </Container>
            <Box className="grey-bg" >
                <Grid container className='container'>
                    <Grid size={5}>
                        <img src="/vector4.png" alt="Vector 2" />
                    </Grid>
                    <Grid container size={7} rowSpacing={2}>
                        <Grid size={12}>
                            <h2>
                                {WhyeDraw}
                            </h2>
                        </Grid>
                        <Grid size={12}>
                            <hr className='hr'>
                            </hr>
                        </Grid>
                        <Grid size={12}>
                            <h3>
                                {WhyeDrawSubHeading}
                            </h3>
                        </Grid >
                        <Grid size={12}>

                            <p>
                                {WhyeDrawDesc}
                            </p>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
            <Container className='container'>
                <Grid className="grey-card" container rowSpacing={1} columnSpacing={1}>
                    <Grid item size={12}>
                        <h2>Features</h2>
                    </Grid>
                    <Grid size={4}>
                        <h4>Barcode Generation</h4>
                        <img src="/vector5.png" alt="Vector 2" />
                        <div>Built-in barcode creation with support for a variety of formats ensures compliance and efficiency</div>
                    </Grid>
                    <Grid size={4}>
                        <h4>Barcode Generation</h4>
                        <img src="/vector6.png" alt="Vector 2" />
                        <div>Built-in barcode creation with support for a variety of formats ensures compliance and efficiency</div>
                    </Grid>
                    <Grid size={4}>
                        <h4>Barcode Generation</h4>
                        <img src="/vector7.png" alt="Vector 2" />
                        <div>Built-in barcode creation with support for a variety of formats ensures compliance and efficiency</div>

                    </Grid>
                </Grid>
            </Container>
            <Grid >
                <Container className='container'>
                    <Grid container className='container'>
                        <Grid size={7}>
                            <p>
                                {WhyeDraw}
                                {WhyeDrawDesc}
                                {WhyeDrawSubHeading}
                            </p>
                        </Grid>
                        <Grid size={5}>
                            <img src="/vector8.png" alt="Vector 2" />
                        </Grid>

                    </Grid>

                </Container>
            </Grid>
            <Grid className="grey-bg">
                <Container className='container'>
                    <Grid container className='container'>
                        <Grid size={7}>
                            <p>
                                {WhyeDraw}
                                {WhyeDrawDesc}
                                {WhyeDrawSubHeading}
                            </p>
                        </Grid>
                        <Grid size={5}>
                            <img src="/vector9.png" alt="Vector 2" />
                        </Grid>

                    </Grid>

                </Container>
            </Grid>
            <Grid >
                <Container className='container'>
                    <Grid container className='container'>
                        <Grid size={5}>
                            <img src="/vector10.png" alt="Vector 2" />
                        </Grid>
                        <Grid size={7}>
                            <p>
                                {WhyeDraw}
                                {WhyeDrawDesc}
                                {WhyeDrawSubHeading}
                            </p>
                        </Grid>


                    </Grid>

                </Container>
            </Grid>
            <Grid className="grey-bg">
                <Container className='container'>
                    <Grid container spacing={20} sx={{ p: 12 }}>
                        <Grid size={6}>
                            Cloud Collaboration

                            Multiple users can work on the same document in real-time, with full version control.
                            On-Premise Control

                            Maintain full control over your data with on-premise hosting, meeting the needs of high-security environments like life sciences and pharmaceuticals.
                        </Grid>
                        <Grid size={6}>
                            <img src="/vector11.png" alt="Vector 2" />
                        </Grid>
                        <Grid size={6}>
                            <img src="/vector12.png" alt="Vector 2" />
                        </Grid>
                        <Grid size={6}>
                            Multiple users can work on the same document in real-time, with full version control.
                            On-Premise Control

                            Maintain full control over your data with on-premise hosting, meeting the needs of high-security environments like life sciences and pharmaceuticals.
                        </Grid>
                        <Grid size={6}>
                            Cloud Collaboration

                            Multiple users can work on the same document in real-time, with full version control.
                            On-Premise Control

                            Maintain full control over your data with on-premise hosting, meeting the needs of high-security environments like life sciences and pharmaceuticals.
                        </Grid>
                        <Grid size={6}>
                            <img src="/vector13.png" alt="Vector 2" />
                        </Grid>
                    </Grid>
                </Container>
            </Grid>
        </>
    );
}
