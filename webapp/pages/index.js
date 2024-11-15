// pages/index.js
import Link from 'next/link';
import { useEdrawData } from '../src/app/utils/EdrawDataContext';
import './home.css';
import {
    Box,
    Container,
    Grid,
    Button,
} from '../src/app/components/muiComponents';

export default function Home() {
    const edrawData = useEdrawData();

    if (!edrawData) return <div>Loading...</div>;
    const {
        Title: edrawTitle,
        Description,
        WhyeDraw,
        WhyeDrawDesc,
        WhyeDrawSubHeading,
    } = edrawData;
    const titleParts = edrawTitle.split('e-Draw');

    return (
        <>
            <Container className="container">
                <Grid
                    container
                    rowSpacing={10}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                    className="grid1"
                >
                    <Grid container size={7} rowSpacing={1}>
                        <Grid>
                            <h1>
                                {titleParts.map((part, index) => (
                                    <span key={index}>
                                        {part}
                                        {index < titleParts.length - 1 && (
                                            <span className="highlighted">
                                                e-Draw
                                            </span>
                                        )}
                                    </span>
                                ))}
                            </h1>
                        </Grid>
                        <Grid>
                            <div className="font-18">{Description}</div>
                        </Grid>
                        <Grid>
                            <Button
                                variant="outlined"
                                className="exoloreFeatures"
                            >
                                Explore Features
                            </Button>

                            <Button
                                variant="contained"
                                className="getStartedFree"
                            >
                                Get Started For
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <div className="relative">
                            <img
                                src="/Vector2.png"
                                alt="Vector 2"
                                className="w-full"
                            />
                            <img
                                src="/Vector3.png"
                                alt="Vector 3"
                                className="absolute top-16 left-8 w-3/4"
                            />
                        </div>
                    </Grid>
                </Grid>
            </Container>
            <Box className="grey-bg">
                <Grid container className="container ">
                    <Grid size={5}>
                        <img src="/vector4.png" alt="Vector 2" />
                    </Grid>
                    <Grid
                        container
                        className="img-center"
                        size={7}
                        rowSpacing={2}
                    >
                        <Grid size={12}>
                            <h2>{WhyeDraw}</h2>
                        </Grid>
                        <Grid size={12}>
                            <hr className="hr"></hr>
                        </Grid>
                        <Grid size={12}>
                            <h3>{WhyeDrawSubHeading}</h3>
                        </Grid>
                        <Grid size={12}>
                            <p className="font-18">{WhyeDrawDesc}</p>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
            <Container className="container">
                <Grid
                    className="grey-card"
                    container
                    rowSpacing={1}
                    columnSpacing={1}
                >
                    <Grid size={12}>
                        <h2>Features</h2>
                        <hr className="Features-hr"></hr>
                    </Grid>
                    <Grid size={4}>
                        <h4>Barcode Generation</h4>
                        <img src="/vector5.png" alt="Vector 2" />
                        <div className="features-text">
                            Built-in barcode creation with support for a variety
                            of formats ensures compliance and efficiency
                        </div>
                    </Grid>
                    <Grid size={4}>
                        <h4>Barcode Generation</h4>
                        <img src="/vector6.png" alt="Vector 2" />
                        <div className="features-text">
                            Built-in barcode creation with support for a variety
                            of formats ensures compliance and efficiency
                        </div>
                    </Grid>
                    <Grid size={4}>
                        <h4>Barcode Generation</h4>
                        <img
                            className="share-img"
                            src="/vector7.png"
                            alt="Vector 2"
                        />
                        <div className="features-text">
                            Built-in barcode creation with support for a variety
                            of formats ensures compliance and efficiency
                        </div>
                    </Grid>
                </Grid>
            </Container>
            <Grid>
                <Container className="container">
                    <Grid container className="container">
                        <Grid
                            container
                            size={7}
                            className="font-18"
                            rowSpacing={4}
                        >
                            <Grid size={12}>
                                <h2> {WhyeDraw}</h2>
                                <hr className="hr2"></hr>
                            </Grid>
                            <Grid>
                                <h4>{WhyeDrawSubHeading}</h4>
                            </Grid>
                            <Grid>{WhyeDrawDesc}</Grid>
                            <Grid>
                                <h4>{WhyeDrawSubHeading}</h4>
                            </Grid>
                            <Grid>{WhyeDrawDesc}</Grid>
                        </Grid>
                        <Grid size={5} className="img-center">
                            <img src="/vector8.png" alt="Vector 2" />
                        </Grid>
                    </Grid>
                </Container>
            </Grid>
            <Grid className="grey-bg">
                <Container className="container">
                    <Grid container className="container">
                        <Grid size={5}>
                            <img
                                className="img-center"
                                src="/vector9.png"
                                alt="Vector 2"
                            />
                        </Grid>

                        <Grid
                            container
                            size={7}
                            className="font-18"
                            rowSpacing={4}
                        >
                            <Grid size={12}>
                                <h2> {WhyeDraw}</h2>
                                <hr className="hr2"></hr>
                            </Grid>
                            <Grid>
                                <h4>{WhyeDrawSubHeading}</h4>
                            </Grid>
                            <Grid>{WhyeDrawDesc}</Grid>
                            <Grid>
                                <h4>{WhyeDrawSubHeading}</h4>
                            </Grid>
                            <Grid>{WhyeDrawDesc}</Grid>
                        </Grid>
                    </Grid>
                </Container>
            </Grid>
            <Grid>
                <Container className="container">
                    <Grid container className="container">
                        <Grid size={5} className="img-center">
                            <img
                                className="img-center"
                                src="/vector10.png"
                                alt="Vector 2"
                            />
                        </Grid>
                        <Grid
                            container
                            size={7}
                            className="font-18"
                            rowSpacing={4}
                        >
                            <Grid size={12}>
                                <h2> {WhyeDraw}</h2>
                                <hr className="hr2"></hr>
                            </Grid>
                            <Grid>
                                <h4>{WhyeDrawSubHeading}</h4>
                            </Grid>
                            <Grid>{WhyeDrawDesc}</Grid>
                            <Grid>
                                <h4>{WhyeDrawSubHeading}</h4>
                            </Grid>
                            <Grid>{WhyeDrawDesc}</Grid>
                        </Grid>
                    </Grid>
                </Container>
            </Grid>
            <Grid className="grey-bg font-18">
                <Container className="container">
                    <h2>Benefits</h2>
                    <hr className="Features-hr"></hr>
                    <Grid container spacing={1}>
                        <Grid className="align-content-center" size={6}>
                            Cloud Collaboration Multiple users can work on the
                            same document in real-time, with full version
                            control. On-Premise Control Maintain full control
                            over your data with on-premise hosting, meeting the
                            needs of high-security environments like life
                            sciences and pharmaceuticals.
                        </Grid>
                        <Grid size={6} className="img-center">
                            <img src="/vector11.png" alt="Vector 2" />
                        </Grid>
                        <Grid size={6} className="img-center">
                            <img src="/vector12.png" alt="Vector 2" />
                        </Grid>
                        <Grid className="align-content-center" size={6}>
                            Multiple users can work on the same document in
                            real-time, with full version control. On-Premise
                            Control Maintain full control over your data with
                            on-premise hosting, meeting the needs of
                            high-security environments like life sciences and
                            pharmaceuticals.
                        </Grid>
                        <Grid className="align-content-center" size={6}>
                            Cloud Collaboration Multiple users can work on the
                            same document in real-time, with full version
                            control. On-Premise Control Maintain full control
                            over your data with on-premise hosting, meeting the
                            needs of high-security environments like life
                            sciences and pharmaceuticals.
                        </Grid>
                        <Grid size={6} className="img-center">
                            <img src="/vector13.png" alt="Vector 2" />
                        </Grid>
                    </Grid>
                </Container>
            </Grid>
        </>
    );
}
