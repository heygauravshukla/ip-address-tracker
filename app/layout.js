import './globals.css';

export const metadata = {
  title: 'Frontend Mentor | IP Address Tracker',
  description: 'An IP address tracker app built with Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
