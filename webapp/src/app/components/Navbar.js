import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import './navbar.css';
import {
    AppBar,
    Box,
    Toolbar,
    Typography,
    Container,
} from '../components/muiComponents';
import Button from './Button';

const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Features', path: '/features' },
    { label: 'About Us', path: '/about' },
    { label: 'Support', path: '/support' },
    // { label: 'Sign Up', path: '/auth/signup' },
    // { label: 'Login', path: '/auth/login' },
];

function ResponsiveAppBar() {
    const router = useRouter();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <AppBar
            className={`navbar-bg ${scrolled ? 'navbar-scrolled' : ''}`}
            position="fixed"
            elevation={0}
        >
            <Container className="navbar">
                <Toolbar disableGutters>
                    <Box sx={{ flexGrow: 1 }}>
                        <Link href="/" passHref>
                            <img
                                className="logo"
                                src="/e-draw_logo.png"
                                alt="e-Draw Logo"
                            />
                        </Link>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                            flexGrow: 1,
                        }}
                    >
                        {navLinks.map((link) => (
                            <Link key={link.path} href={link.path} passHref>
                                <Typography
                                    className={
                                        router.pathname === link.path
                                            ? 'active-link'
                                            : ''
                                    }
                                    sx={{ my: 2, mx: 2 }}
                                >
                                    {link.label}
                                </Typography>
                            </Link>
                        ))}
                        <Link className="signupbtn" href="/auth/login">
                            <Button  className="signupbtnclr">Sign Up</Button>
                        </Link>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default ResponsiveAppBar;
