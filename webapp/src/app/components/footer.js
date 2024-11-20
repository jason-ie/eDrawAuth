import React from 'react';
import { Container, Grid, Typography, TextField, Button, Box } from '../components/muiComponents';
import './footer.css';

export default function Footer() {
    return (
        <Box component="footer">
            <Container className='container-footer' >
                <Grid container size={12}>
                     <Grid container spacing={4} size={6}>
                        <Grid  >
                            <Typography variant="h6" gutterBottom>
                                Terms and policy
                            </Typography>
                            <ul className="font-14" style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
                                <li><a href="#">Legal Notices</a></li>
                                <li><a href="#">License Information</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Terms Of Use</a></li>
                            </ul>
                        </Grid>

                        <Grid  >
                            <Typography variant="h6" gutterBottom>
                                Contact Us
                            </Typography>
                                <div className="font-14">
                                     300 Commercial St. <br />
                                     Boston, MA. 02109 <br /> <br /> 
                                     (866) 536-5223</div>

                        </Grid>

                    </Grid> 

                    <Grid container size={6} spacing={2} justifyContent="space-between" alignItems="center" >

                        <Grid >
                            <Typography variant="h6" gutterBottom>
                                Subscribe To Newsletter
                            </Typography>
                            <TextField
                                label="Enter Your E-mail"
                                variant="outlined"
                                size="small"
                                fullWidth
                                sx={{ marginBottom: '1rem' }}
                            />
                            <Button variant="contained" color="primary" fullWidth>
                                Subscribe
                            </Button>
                        </Grid>
                        <Grid >
                            <img src="/vector14.png" alt="Vector 2" />
                        </Grid>

                    </Grid>
                    <Grid size={12}  >
                        <hr></hr>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                            <img
                                src="/enlabellogo.png"
                                alt="Vector 2"
                            />
                            <div >© 2024 enLabel Global Services, Inc. All rights reserved.</div>
                        </Box>
                    </Grid>
                </Grid>
            </Container>

        </Box>
    );
}
