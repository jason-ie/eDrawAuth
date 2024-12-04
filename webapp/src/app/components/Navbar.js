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
    { label: 'Sign Up', path: '/auth/signup' },
    { label: 'Login', path: '/auth/login' },
    { label: 'Support', path: '/support' },
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
        <>
            <nav
                className={`fixed top-0 left-0 w-full ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'
                    }`}
            >
                <div className="container mx-auto flex items-center justify-between ">
                    {/* Logo Section */}
                    <div>
                        <a href="/" className="flex items-center">
                            <img
                                className="h-10"
                                src="/e-draw_logo.png"
                                alt="e-Draw Logo"
                            />
                        </a>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex items-center space-x-6">
                        {navLinks.map((link) => (
                            <a
                                key={link.path}
                                href={link.path}
                                className={`text-lg font-medium ${router.pathname === link.path
                                        ? 'text-blue-500 underline'
                                        : 'text-gray-600 hover:text-blue-500'
                                    }`}
                            >
                                {link.label}
                            </a>
                        ))}

                        {/* Sign In Button */}
                        <a href="/auth/login">
                            <button className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
                                Sign In
                            </button>
                        </a>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default ResponsiveAppBar;
