import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";

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

// pages/index.js
import CustomImage from '../components/CustomImage'; // Importing the custom image component
import styles from '../styles/Home.module.css';  // Importing the styles for this page

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Optimized Custom Image Component</h1>
      <CustomImage
        src="/images/next_example.webp" // Source of the image
        alt="Optimized Image" // Alt text for accessibility
        width={600} // Width of the image
        height={400} // Height of the image
        placeholderSrc="/images/Orange-colored-cat-yawns-displaying-teeth.jpg" // Source of the placeholder image
      />
    </div>
  );
}

