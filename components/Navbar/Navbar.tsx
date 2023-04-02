import styles from "./Navbar.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Navbar = () => {
  const router = useRouter();

  const [NavLinks, setNavLinks] = useState([
    { title: "Home", href: "/" },
    { title: "About Us", href: "/about" },
    // { title: "Blogs", href: "#" },
    // { title: "Connect", href: "#" },
  ]);

  return (
    <div className={styles.Navbar}>
      <Link href="/" className={styles.Logo}>
        ActualOne
        <br />
        Protocol
      </Link>
      <div className={styles.NavLinks}>
        <Link href={NavLinks[router.pathname === "/" ? 1 : 0].href}>
          {NavLinks[router.pathname === "/" ? 1 : 0].title}
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
