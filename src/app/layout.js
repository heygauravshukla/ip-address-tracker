import { Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "IP Address Tracker",
  description:
    "An IP address tracker web application that quickly locates and maps IP addresses.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={rubik.className}>
      <body className="bg-white text-lg/[normal] text-gray-800">
        {children}
      </body>
    </html>
  );
}
