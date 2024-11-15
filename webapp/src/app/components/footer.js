import React from 'react';
import { Container, Grid, Typography, TextField, Button, Box } from '../components/muiComponents';

export default function Footer() {
    return (
        <Box component="footer">
            <Container className='container' >
                <Grid container>
                    <Grid container spacing={4} size={6}>
                        <Grid  >
                            <Typography variant="h6" gutterBottom>
                                Terms and policy
                            </Typography>
                            <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
                                <li><a href="#">Legal Notices</a></li>
                                <li><a href="#">License Information</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Terms Of Use</a></li>
                            </ul>
                        </Grid>

                        <Grid >
                            <Typography variant="h6" gutterBottom>
                                Contact Us
                            </Typography>
                            <Typography variant="body1">
                                <span role="img" aria-label="location">📍</span> 300 Commercial St.<br />
                                Boston, MA. 02109
                            </Typography>
                            <Typography variant="body1">
                                <span role="img" aria-label="phone"></span> (866) 536-5223
                            </Typography>
                        </Grid>
                        <Grid >
                       
                            <Typography variant="body2" color="textSecondary">
                            <img src="/enlabellogo.png" alt="Vector 2" />    © 2024 enLabel Global Services, Inc. All rights reserved.
                            </Typography>
                        </Grid>
                    </Grid>

                    {/* Bottom Section */}
                    <Grid container size={6} spacing={2} justifyContent="space-between" alignItems="center" sx={{ marginBottom: '2rem' }}>
                        
                    {/* <Grid size={12}>
                            <Button variant="outlined" color="inherit" startIcon={<span role="img" aria-label="globe">🌐</span>}>
                                English
                            </Button>
                        </Grid> */}
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
                </Grid>
            </Container>
        </Box>
    );
}
