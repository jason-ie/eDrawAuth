import * as React from 'react';
import Link from 'next/link';
import './navbar.css';
import { useRouter } from 'next/router';
import {
    AppBar,
    Box,
    Toolbar,
    Typography,
    Container,
} from '../components/muiComponents';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
    const router = useRouter();
    return (
        <AppBar className='navbar-bg' position="fixed" elevation={0}>
            <Container className='navbar'>
                <Toolbar disableGutters>
                    {/* Logo on the left */}
                    <Box sx={{ flexGrow: 1 }}>
                        <Link href="/" passHref>
                            <img className="logo" src="/e-draw_logo.png" alt="e-Draw Logo" />
                        </Link>
                    </Box>

                    {/* Navigation links on the right */}
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', flexGrow: 1 }}>
                        <Link href="/" passHref>
                            <Typography
                                className={router.pathname === '/' ? 'active-link' : ''}
                                sx={{ my: 2, mx: 2 }}
                            >
                                Home
                            </Typography>
                        </Link>
                        <Link href="/features" passHref>
                            <Typography
                                className={router.pathname === '/features' ? 'active-link' : ''}
                                sx={{ my: 2, mx: 2 }}
                            >
                                Features
                            </Typography>
                        </Link>
                        <Link href="/about" passHref>
                            <Typography
                                className={router.pathname === '/about' ? 'active-link' : ''}
                                sx={{ my: 2, mx: 2 }}
                            >
                                About Us
                            </Typography>
                        </Link>
                        <Link href="/signup" passHref>
                            <Typography
                                className={router.pathname === '/signup' ? 'active-link' : ''}
                                sx={{ my: 2, mx: 2 }}
                            >
                                Sign Up
                            </Typography>
                        </Link>
                        <Link href="/login" passHref>
                            <Typography
                                className={router.pathname === '/login' ? 'active-link' : ''}
                                sx={{ my: 2, mx: 2 }}
                            >
                               Login
                            </Typography>
                        </Link>
                        <Link href="/verificationpage" passHref>
                            <Typography
                                className={router.pathname === '/verificationpage' ? 'active-link' : ''}
                                sx={{ my: 2, mx: 2 }}
                            >
                               verificationpage
                            </Typography>
                        </Link>
                        <Link href="/passwordpage" passHref>
                            <Typography
                                className={router.pathname === '/passwordpage' ? 'active-link' : ''}
                                sx={{ my: 2, mx: 2 }}
                            >
                               passwordpage
                            </Typography>
                        </Link>
                        <Link href="/forgotpassword" passHref>
                            <Typography
                                className={router.pathname === '/forgotpassword' ? 'active-link' : ''}
                                sx={{ my: 2, mx: 2 }}
                            >
                               forgotpassword
                            </Typography>
                        </Link>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default ResponsiveAppBar;
