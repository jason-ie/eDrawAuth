import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import './navbar.css';

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
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav
            className={`navbar-bg fixed top-0 left-0 w-full transition-all ${
                scrolled ? 'navbar-scrolled shadow-md' : 'bg-transparent'
            }`}
        >
            <div className="navbar mx-auto flex items-center justify-between pt-1 pb-1">
                {/* Logo Section */}
                <div>
                    <a href="/" className="flex items-center">
                        <img
                            className={`logo ${
                                scrolled ? 'logoscroll' : ''
                            }`}
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
                            className={`text-lg font-medium pr-6 ${
                                router.pathname === link.path
                                    ? 'active-link'
                                    : 'text-gray-600 hover:text-blue-500'
                            }`}
                        >
                            {link.label}
                        </a>
                    ))}

                    {/* Sign In Button */}
                    <a href="/auth/login">
                        <button
                            className={`    ${
                                scrolled
                                    ? 'signupbtnclr border-none py-3 px-4 rounded '
                                    : 'signupbtnclr   border-none py-3 px-4 rounded'
                            }`}
                        >
                            Sign In
                        </button>
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default ResponsiveAppBar;
