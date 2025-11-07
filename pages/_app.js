import React, { createContext, useState } from "react";
import { DM_Sans } from "next/font/google"; // Import the font from Next.js optimization
import "../styles/globals.css"; // Global styles
import Layout from "../components/Layout";
import { SelectedByProvider } from "../contexts/SelectedByContext";

// Create context for user state management
const MyContext = createContext();

// Load the DM Sans font
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Specify which weights you need
  variable: "--font-dm-sans", // Define a CSS variable for the font
  display: "swap", // Font display strategy
});

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState(null);

  return (
    <MyContext.Provider value={{ user, setUser }}>
      <div className={dmSans.variable}>
        <Layout>
          {/* This Component renders page-specific content */}
          <Component {...pageProps} />
        </Layout>
      </div>
    </MyContext.Provider>
  );
}

export default MyApp;
export { MyContext };
