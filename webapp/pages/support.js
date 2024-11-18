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
import './support.css';
import { useEdrawData } from '../src/app/utils/EdrawDataContext';


export default function Support() {
    const supportPageData = useEdrawData("/api/Support-page");
    if (!supportPageData) {
        return <Typography>Loading...</Typography>;
    }
    const { Title: edrawTitle, Description, WhyeDraw, WhyeDrawDesc, WhyeDrawSubHeading, Feature1 } = supportPageData;
    console.log("test");
    return (
        <>
            <Container className='container'>
                <Grid container className="grey-card">
                    <Grid size={6}>
                        <h2>Contact our team</h2>
                        <p>
                            We can’t wait to hear from you. Your input is important to us.0
                        </p>
                        <img src="/vector15.png" alt="Vector 2" />
                        <p>
                            {Description}
                        </p>
                        <hr className='hr'></hr>
                        <div>Reach out and we’ll get in touch within 24 hours</div>
                    </Grid>
                    <Grid size={6}>
                        <Box className="support-form">
                            <Grid container rowSpacing={4} columnSpacing={2}>
                                <Grid size={6}>
                                    <div>First Name</div>
                                    <TextField fullWidth  placeholder='First Name' size="small" />
                                </Grid>
                                <Grid size={6}>
                                <div>Last Name</div>
                                    <TextField fullWidth  placeholder='Last  Name' size="small" />
                                </Grid>
                                <Grid size={12}>
                                <div>Contact Number</div>
                                <TextField fullWidth  placeholder='Enter Contact Number' size="small" />
                                </Grid>
                                <Grid size={12}>
                                <div> Email ID</div>
                                <TextField fullWidth  placeholder='Enter Email ID' size="small" />
                                </Grid>
                                <Grid size={12}>
                                <div>Company Name</div>
                                <TextField fullWidth  placeholder='Enter Company Name ' size="small" />
                                </Grid>
                                <Grid size={12}>
                                <div>Message</div>
                                <TextField fullWidth size="small" />
                                </Grid>
                                <Grid size={12}>
                                <Button className="submitbtn">Submit</Button>
                                </Grid>
                                <Grid size={12}>

                                </Grid>
                            </Grid>
                        </Box>
                        <img className='support-img' src='/vector17.png'/>
                    </Grid>
                </Grid>
            </Container>

        </>
    );
}