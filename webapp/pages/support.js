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
import { useState } from 'react';

export default function Support() {
    const supportPageData = useEdrawData("/api/Support-page");

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        contactNumber: '',
        email: '',
        companyName: '',
        message: ''
    });

    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
        setFormSubmitted(true);
    };

    if (!supportPageData) {
        return <Typography>Loading...</Typography>;
    }

    const { Title: edrawTitle, Description, WhyeDraw, WhyeDrawDesc, WhyeDrawSubHeading, Feature1 } = supportPageData;

    return (
        <>
            <Container className='container'>
                <Grid container className="grey-card">
                    <Grid container  size={6} rowSpacing={6} columnSpacing={2} >
                        <Grid >
                        <h2 className='heading'>Contact our team</h2>
                        <p>
                            We can’t wait to hear from you. Your input is important to us.
                        </p>
                        </Grid>
                        <Grid className='support-img1'>
                        <img  src="/vector15.png" alt="Vector 2" />
                        </Grid>
                        <Grid>
                        <div>
                            {Description}
                        </div>
                        <hr className='hr'></hr>
                        <div>Reach out and we’ll get in touch within 24 hours</div>
                        </Grid>
                    </Grid>
                    <Grid size={6}>
                        <Box className="support-form">
                            <form onSubmit={handleSubmit}>
                                <Grid container rowSpacing={1} columnSpacing={2} className="support-form">
                                    <Grid size={6}>
                                        <div className='text'>First Name *</div>
                                        <TextField
                                            required
                                            fullWidth
                                            placeholder='First Name'
                                            size="small"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                        />
                                    </Grid>
                                    <Grid size={6}>
                                        <div>Last Name *</div>
                                        <TextField
                                            fullWidth
                                            required
                                            placeholder='Last Name'
                                            size="small"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                        />
                                    </Grid>
                                    <Grid size={12}>
                                        <div>Contact Number *</div>
                                        <TextField
                                            fullWidth
                                            required
                                            placeholder='Enter Contact Number'
                                            size="small"
                                            name="contactNumber"
                                            value={formData.contactNumber}
                                            onChange={handleChange}
                                        />
                                    </Grid>
                                    <Grid size={12}>
                                        <div>Email ID *</div>
                                        <TextField
                                            fullWidth
                                            required
                                            placeholder='Enter Email ID'
                                            size="small"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                        />
                                    </Grid>
                                    <Grid size={12}>
                                        <div>Company Name *</div>
                                        <TextField
                                            fullWidth
                                            required
                                            placeholder='Enter Company Name '
                                            size="small"
                                            name="companyName"
                                            value={formData.companyName}
                                            onChange={handleChange}
                                        />
                                    </Grid>
                                    <Grid size={12}>
                                        <div>Message *</div>
                                        <TextField
                                            fullWidth
                                            required
                                            size="small"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                        />
                                    </Grid>
                                    <Grid size={12}>
                                        <Button type="submit" className="submitbtn">Submit</Button>
                                    </Grid>
                                    <Grid size={12}></Grid>
                                </Grid>
                            </form>
                            {formSubmitted && (
                                <Typography>Thank you for contacting us! We'll get back to you soon.</Typography>
                            )}
                        </Box>
                        <img className='support-img' src='/vector17.png' />
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}
