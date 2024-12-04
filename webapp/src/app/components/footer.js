import React from 'react';
import { Container, Grid, Typography, TextField, Button, Box } from '../components/muiComponents';
import './footer.css';
import Link from 'next/link';

export default function Footer() {
    return (
        <>
            <footer>
                <div className='container justify-center'>
                    <div className='grid grid-cols-12'>
                        <div className='col-span-3'>
                            <Typography variant="h6" gutterBottom>
                                Terms and Policy
                            </Typography>
                            <ul className="font-14" style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
                                <li><Link href="/notices">Legal Notices</Link></li>
                                <li><a href="#">License Information</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Terms Of Use</a></li>
                            </ul>
                        </div>
                        <div className='col-span-3'>
                            <Typography variant="h6" gutterBottom>
                                Contact Us
                            </Typography>
                            <div className="font-14">
                                300 Commercial St. <br />
                                Boston, MA. 02109 <br /> <br />
                                (866) 536-5223
                            </div>
                        </div>
                        <div className='col-span-3'>
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
                        </div>
                        <div className='col-span-3'>
                            <img src="/vector14.png" alt="Vector 2" />
                        </div>

                    </div>
                    <hr></hr>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <img
                            src="/enlabellogo.png"
                            alt="Vector 2"
                        />
                        <div >© 2024 enLabel Global Services, Inc. All rights reserved.</div>
                    </Box>
                </div>
            </footer>

        </>
    );
}
