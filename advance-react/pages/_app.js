import React from 'react';
import "@/styles/globals.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />; // Render the current page
}

export default MyApp; // Export the custom App component
