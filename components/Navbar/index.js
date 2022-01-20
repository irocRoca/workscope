import classes from "./Navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className={classes.navbar}>
      <div className={classes.logo}>WorkScope</div>
      <ul className={classes.list}>
        <li className={classes.listItem}>
          <Link href="/">Home</Link>
        </li>
        <li className={classes.listItem}>
          <Link href="/orders">Orders</Link>
        </li>
        <li className={classes.listItem}>
          <Link href="/profile">Profile</Link>
        </li>
        <li className={classes.listItem}>
          <Link href="/create">Create</Link>
        </li>
      </ul>
    </nav>
  );
}
