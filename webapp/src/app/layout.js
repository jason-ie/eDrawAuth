import { Inter } from 'next/font/google';
import './global.css';
import { ThemeRegistry } from './ThemeRegistry';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <ThemeRegistry>{children}</ThemeRegistry>
            </body>
        </html>
    );
}

export const metadata = {
    title: 'eDraw Application',
    description: 'Electronic Drawing Application',
};
