import { Rubik } from 'next/font/google';
import './globals.css';

const rubik = Rubik({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'Frontend Mentor | IP Address Tracker',
  description: 'An IP address tracker app built with Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={rubik.className}>
      <body>{children}</body>
    </html>
  );
}
