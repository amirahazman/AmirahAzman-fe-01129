import React from "react";
import Navbar from "./Navbar"; // Import Navbar
import styles from "./Layout.module.css"; // Layout styling
// import HomePage from "./HomePage";

const Layout = ({ children }) => {
  // const [selectedBy, setSelectedBy] = useState("");
  return (
    <div className={styles.layout}>
      {/* selectedBy={selectedBy} setSelectedBy={setSelectedBy} */}
      <Navbar />

      <main className={styles.mainContent}>
        {/* <HomePage selectedBy={selectedBy} /> */}
        {children}
      </main>

      <footer className={styles.footer}>
        <p>© 2025 My Website</p>
      </footer>
    </div>
  );
};

export default Layout;
