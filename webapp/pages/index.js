import { useEffect, useState } from 'react';
import { getedrawData } from '../src/app/utils/api';
import { Container, Grid, Button } from '../src/app/components/muiComponents';

export default function Home() {
    const [edrawData, setEdrawData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const data = await getedrawData('/api/home-page');
            setEdrawData(data.data);
        }
        fetchData();
    }, []);

    if (!edrawData) return <div>Loading...</div>;

    const {
        Title: edrawTitle,
        Description,
        WhyeDraw,
        WhyeDrawDesc,
        WhyeDrawSubHeading,
        Feature1,
    } = edrawData;
    const titleParts = edrawTitle?.split('e-Draw') || [];

    return (
        <div className="min-h-screen bg-white">
            <Container className="py-24">
                {' '}
                {/* Added padding for navbar */}
                <Grid container spacing={4}>
                    <Grid item xs={12} md={7}>
                        <h1 className="text-4xl font-bold mb-6">
                            {titleParts.map((part, index) => (
                                <span key={index}>
                                    {part}
                                    {index < titleParts.length - 1 && (
                                        <span className="text-primary">
                                            e-Draw
                                        </span>
                                    )}
                                </span>
                            ))}
                        </h1>
                        <p className="text-lg mb-8">{Description}</p>
                        <div className="space-x-4">
                            <Button
                                variant="contained"
                                className="bg-primary hover:bg-primary/90"
                            >
                                Get Started Free
                            </Button>
                            <Button
                                variant="outlined"
                                className="border-primary text-primary hover:bg-primary/5"
                            >
                                Explore Features
                            </Button>
                        </div>
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

            {/* Why eDraw Section */}
            <div className="bg-gray-50 py-24">
                <Container>
                    <Grid container spacing={6}>
                        <Grid item xs={12} md={5}>
                            <img
                                src="/vector4.png"
                                alt="Vector 4"
                                className="w-full"
                            />
                        </Grid>
                        <Grid item xs={12} md={7}>
                            <h2 className="text-3xl font-bold mb-6">
                                {WhyeDraw}
                            </h2>
                            <p className="text-lg mb-4">{WhyeDrawDesc}</p>
                            <p className="text-lg">{WhyeDrawSubHeading}</p>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </div>
    );
}
