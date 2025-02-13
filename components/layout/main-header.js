import Link from "next/link";
import classes from "./main-header.module.css";
function MainHeader(props) {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href="/">NextEvents</Link>
      </div>
      <div>
        <nav className={classes.navigation}>
          <ul>
            <li>
              <Link href="/events">Browse all events</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
export default MainHeader;
