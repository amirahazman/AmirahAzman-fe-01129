import React, { useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
  // navigation
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Movies", href: "/about" },
    { name: "TV Show", href: "/services" },
    { name: "Video", href: "/contact" },
    { name: "FAQ", href: "/contact" },
    { name: "Pricing", href: "/contact" },
    { name: "Contact Us", href: "/contact" },
  ];

  const normalizedPath = pathname.endsWith("/")
    ? pathname.slice(0, -1)
    : pathname;

  //   search logic
  const [isOpen, setIsOpen] = useState(false);
  const [selectedBy, setSelectedBy] = useState("");

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectedByChange = (event) => {
    setSelectedBy(event.target.value);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        {/* logo part */}
        <Link href="/" className="logo">
          <Image
            src="/images/PcariMovie.png"
            alt="MySite Logo"
            width={157}
            height={19}
          />
        </Link>
        {/* menu part */}
        <ul className={styles.navLists}>
          {navLinks.map((link) => {
            const normalizedHref = link.href.endsWith("/")
              ? link.href.slice(0, -1)
              : link.href;

            return (
              <li
                className={`${styles.navLink} ${
                  normalizedPath === normalizedHref ? styles.active : ""
                }`}
                key={link.href}
              >
                <Link href={link.href}>{link.name}</Link>
              </li>
            );
          })}
        </ul>
        {/* search part */}
        <div className={styles.searchContainer}>
          <button onClick={togglePopup} className={styles.searchButton}>
            <img
              src="/images/Search.png"
              alt="Search Icon"
              className={styles.searchIcon}
            />
          </button>

          {isOpen && (
            <div className={styles.popup}>
              <div className={styles.optionGroup}>
                <label htmlFor="selectBy" className={styles.label}>
                  Search by:
                </label>
                <select
                  id="selectBy"
                  value={selectedBy}
                  onChange={handleSelectedByChange}
                  className={styles.select}
                >
                  <option value="">Search by</option>
                  <option value="theater">Theater</option>
                  <option value="timeslot">Timeslot</option>
                </select>
              </div>

              <button
                onClick={() =>
                  alert(`Searching for ${selectedTheater} on ${selectedDate}`)
                }
                className={styles.submitButton}
              >
                Submit
              </button>
            </div>
          )}
        </div>
        {/* profile */}
        <div className={styles.profile}>
          <Image
            src="/images/profile-pic.png"
            alt="Profile"
            width={40}
            height={40}
            className={styles.profileImage}
          />
          <span className={styles.username}>John Glich</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
