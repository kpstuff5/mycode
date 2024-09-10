import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
import ThemeToggle from '../components/ThemeToggle';

export default function Home() {
  return (
    <div style={{ padding: '40px', height: '100vh', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center', color: '#0070f3' }}>Welcome to Next.js with Context API</h1>
      <p style={{ textAlign: 'center', marginBottom: '20px' }}>
        This example demonstrates how to manage state using the Context API to toggle between light and dark modes.
      </p>
      <div style={{ maxWidth: '400px', margin: '0 auto' }}>
        <ThemeToggle />
      </div>
    </div>
  );
}

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

